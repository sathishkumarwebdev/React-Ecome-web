import { Card } from "../Card";
import { useEffect, useState, useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { cartContext } from "../Providers/CartProvider";
import { loginContext } from "../Providers/LoginProvider";
import { NavBar } from "../pages/NavBar";

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, dispatch } = context;

  // useEffect(() => {
  //   const accesstoken = JSON.parse(localStorage.getItem("access-token"));
  //   if (accesstoken) {
  //     settoken(accesstoken);
  //   }
  // }, []);
  // const { access_token } = token;

  // console.log("token:", access_token);

  useEffect(() => {
    const accesstoken = JSON.parse(localStorage.getItem("access-token"));
    const { access_token } = accesstoken;
    const getData = async () => {
      const { data } = await fetch("https://ecart-qr06.onrender.com/products", {
        method: "GET",
        headers: new Headers({
          Authorization: "Bearer " + access_token,
        }),
        // headers: {
        //   Accept: "application/json",
        //   Authorization: `Bearer ${access_token}`,
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data),
      }).then((res) => res.json());
      setProducts(data.products);
    };

    if (access_token) {
      getData();
    }
    // setTimeout(getData, 1000);
  }, []);

  //  const { products } = data;

  if (!products.length) {
    return (
      <div className="spinner-ring">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  const addCart = (product) => {
    dispatch({ type: "addCart", payload: { product } });
  };
  const removeCart = (product) => {
    dispatch({ type: "removeCart", payload: { product } });
  };

  return (
    <>
      <NavBar />

      <div className="container">
        {products.map((product) => (
          <Card product={product} addCart={addCart} removeCart={removeCart} />
        ))}
      </div>
    </>
  );
}
