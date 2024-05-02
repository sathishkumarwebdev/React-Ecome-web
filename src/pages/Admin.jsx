import { useState } from "react";
import { NavBar } from "./NavBar";
import { RotatingLines } from "react-loader-spinner";
import {createData} from "../api/product";

export function Admin() {
  const form = {
    thumbnail: null,
    title: "",
    price: 0,
    stock: 0,
    category: "",
  };
  const [item, setItem] = useState(form);
  const [load, setLoad] = useState(false);

  const handleInputChange = (e) => {
    e.target.type === "file"
      ? setItem((item) => ({ ...item, [e.target.name]: e.target.files[0] }))
      : setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  console.log("items ::", item);
  // console.log(file);

  async function getData() {
    setLoad(true);
    setTimeout(5000);
    const formData = new FormData();
    for (let key in item) {
      if (key === "thumbnail") {
        console.log(key, item[key], item[key].name);
        formData.append(key, item[key], item[key].name);
      } else {
        formData.append(key, item[key]);
      }
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/tenant/auth/list`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(item),
        }
      );

      const result = await response.json();
      console.log(result);
      if (result) {
        formData.append("tenantId", result.tenants[0].id);
        console.log(formData);
        putData(formData);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function putData(formData) {
    // const accesstoken = JSON.parse(localStorage.getItem("access-token"));
    // const { access_token } = accesstoken;

    try {
    //   const response = await fetch(
    //     `${process.env.REACT_APP_BASE_URL}/products`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //         // "Content-Type": "multipart/form-data",
    //       },
    //       body: formData,
    //     }
    //   );

        const result= await createData(formData);
      // const result = await response.json();

      console.log("final data", result);
      setItem(form);
      setLoad(false);
      alert("Data Added Successfully");
    } catch (error) {
      console.log("Error", error);
      setLoad(false);
    }
  }
  if (load) {
    return (
      <div className="spinner-ring">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeColor="#f08804"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="admin ff">
        <div className="admin-form">
          <div className="form-title">
            <h1>Update Product</h1>
          </div>
          <div className="form-box">
            <div className="form-box-label">Select Image:</div>
            <div className="form-box-data">
              <input
                type="file"
                name="thumbnail"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-label">Enter Product Title:</div>
            <div className="form-box-data">
              <input
                type="text"
                value={item.title}
                name="title"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-label">Enter Product Price:</div>
            <div className="form-box-data">
              <input
                type="number"
                name="price"
                value={item.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-label">Enter Product Stock:</div>
            <div className="form-box-data">
              <input
                type="number"
                value={item.stock}
                name="stock"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-box">
            <div className="form-box-label">Enter Product Category:</div>
            <div className="form-box-data">
              <input
                type="text"
                value={item.category}
                name="category"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-btn">
            <button onClick={() => getData(item)} disabled={load}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
