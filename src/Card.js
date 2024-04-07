import { useState } from "react";


export function Card({ product, addCart, removeCart }) {
  const [btn, setbtn] = useState(true);
  const { title, description, brand, price, rating, discount, thumbnail } =
    product;
  const handleClick = () => {
    if (btn) {
      setbtn((oldbtn) => !oldbtn);
      const addProduct = {...product, qty: 1};
      addCart(addProduct);
    } else {
      setbtn((btnold) => !btnold);
      removeCart(product);
    }
  };

  return (
    <>
      <div className="box">
        <div className="img-div">
          <img src={thumbnail} alt="phone-pic" />
        </div>
        <div className="deatail">
          <h1>{title}</h1>
          <h3>{brand}</h3>
          <h3>{rating}</h3>
          <h3>{price}</h3>
          <h3>{discount}</h3>
          <p>{description}</p>
          <button onClick={() => handleClick(product)}>
            {btn ? "add" : "remove"}
          </button>
        </div>
      </div>
    </>
  );
}
