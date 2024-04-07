import { Card } from "../Card";
import { useEffect, useState, useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { cartContext } from "../Providers/CartProvider";

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, dispatch } = context;

  useEffect(() => {
    const getData = async () => {
      const { products } = await fetch("https://dummyjson.com/products").then(
        (res) => res.json()
      );
      setProducts(products);
    };

    setTimeout(getData, 1000);
  }, []);

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

  function navClick() {
    navigate("/Details");
  }

  console.log(cart);
  const totalCartItem = cart.reduce(
    (acc, currentvalue) => acc + currentvalue.qty,
    0
  );

  return (
    <>
      {" "}
      
        <div className="your-cart" onClick={()=>navClick()}>
          Your Cart:{totalCartItem}
          
      </div>
      <div className="container">
        {products.map((product) => (
          <Card product={product} addCart={addCart} removeCart={removeCart} />
        ))}
      </div>
    </>
  );
}
