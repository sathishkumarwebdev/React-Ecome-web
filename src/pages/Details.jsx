import { useContext } from "react";
import { cartContext } from "../Providers/CartProvider";
import { Addcart } from "../Addcart";

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
      <h4>Shopping Cart</h4>

      <div className="container">
        {cart.map((item) => (
          <Addcart item={item} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}
