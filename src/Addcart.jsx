export function Addcart({ item, dispatch }) {
  const { title, description, brand, price, rating, discount, thumbnail, qty } =
    item;


  return (
    <>
      <div className="cart-div">
        <div className="cart-img">
          <img src={thumbnail} alt="phone-pic" />
        </div>
        <div className="cart-deatail">
          <h1>{title}</h1>
          <h3>{brand}</h3>
          <h3>{rating}</h3>
          <h3>{price}</h3>
          <h3>{discount}</h3>
          <p>{description}</p>
          <button
            onClick={() => {
              dispatch({ type: "minus", payload: { product: item } });
            }}
          >
            -
          </button>
          {qty}
          <button
            onClick={() => {
              dispatch({ type: "plus", payload: { product: item } });
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
