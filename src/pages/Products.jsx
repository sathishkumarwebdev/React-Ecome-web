import { Card } from "../Card";
import { useEffect, useState, useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { cartContext } from "../Providers/CartProvider";
import {loginContext} from "../Providers/LoginProvider";
import { MiniAddCart } from "./MiniAddCart";
import {NavBar} from "../pages/NavBar";

export function Products() {
  const [products, setProducts] = useState([]);
  const [addCartClick, setaddCartClick] = useState(false);
  const navigate = useNavigate();
  const context = useContext(cartContext);
  const {accessToken}=useContext(loginContext)
  const { cart, dispatch } = context;
  console.log(accessToken);

  useEffect(() => {
    const getData = async () => {
      const { products } = await fetch("https://dummyjson.com/products", {
        method: "GET", // or 'PUT'
        headers: {
          // Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(data),
      }).then((res) => res.json());
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

  function navClick(e) {
    navigate("/Details");
  }

  console.log(cart);
  const totalCartItem = cart.reduce(
    (acc, currentvalue) => acc + currentvalue.qty,
    0
  );

  return (
    <>
      <NavBar/>
      <div className="the-cart">
        <div
          className="your-cart"
          onClick={() => {
            setaddCartClick(!addCartClick);
          }}
        >
          Your Cart:{totalCartItem}
          {addCartClick ? (
            <div className="mini-cart">
              {cart.map((item) => (
                <MiniAddCart item={item} dispatch={dispatch} />
              ))}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navClick();
                }}
              >
                see more
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="container">
        {products.map((product) => (
          <Card product={product} addCart={addCart} removeCart={removeCart} />
        ))}
      </div>
    </>
  );
}
