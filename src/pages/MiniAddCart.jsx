import { MdOutlineDelete } from "react-icons/md";
export function MiniAddCart({ item, dispatch }) {
  const { title, description, brand, price, rating, discount, thumbnail, qty } =
    item;

  return (
    <>
      <div className="mini-cart-div">
        <div className="mini-cart-img">
          <img className="thumb-img" src={`data:image/jpeg;base64,${thumbnail}`} alt="phone-pic" />
        </div>
        <div className="mini-cart-deatail">
          <p>{title}</p>
          <p>{brand}</p>
          <p>{rating}</p>
          <p>{price}</p>
          <p>{discount}</p>
          <p>{description}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "minus", payload: { product: item } });
            }}
          >
            <MdOutlineDelete />
          </button>
          {qty}
          <button
            onClick={(e) => {
              e.stopPropagation();
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
