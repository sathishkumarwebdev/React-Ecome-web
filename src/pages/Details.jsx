import { useContext } from "react";
import { cartContext } from "../Providers/CartProvider";
import { Addcart } from "../Addcart";
import { NavBar } from "../pages/NavBar";

export function Details() {
  const context = useContext(cartContext);
  const { cart, dispatch } = context;
    if (!cart.length) {
      return (
        <>
          <h1>No Cart Item Found...</h1>
        </>
      );
    }
  return (
    <>
      <NavBar />
      <h4>Shopping Cart</h4>

      <div className="add-cart">
        {cart.map((item) => (
          <Addcart item={item} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}
