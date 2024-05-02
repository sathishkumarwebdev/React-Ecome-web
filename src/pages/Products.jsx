import { Card } from "../Card";
import { useEffect, useState, useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { cartContext } from "../Providers/CartProvider";
import { loginContext } from "../Providers/LoginProvider";
import { NavBar } from "../pages/NavBar";
import { getProduts } from '../api/product';

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, dispatch } = context;

  useEffect(() => {
    const accesstoken = JSON.parse(localStorage.getItem("access-token"));
    const { access_token } = accesstoken;
    const getData = async () => {
      // const { data } = await fetch("https://ecart-qr06.onrender.com/products", {
      //   method: "GET",
      //   headers: new Headers({
      //     Authorization: "Bearer " + access_token,
      //   }),
       
      // }).then((res) => res.json());

      const { data }  = await getProduts();
      console.log("data ::", data);



      setProducts(data);
      console.log(data);
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
          <Card key={product.id} product={product} addCart={addCart} removeCart={removeCart} />
        ))}
      </div>
    </>
  );
}
