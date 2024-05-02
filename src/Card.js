import { useState } from "react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-stars";
import { Products } from "./pages/Products";
import {AboutProduct} from "./pages/AboutProduct"

export function Card({ product, addCart, removeCart }) {
  const [btn, setbtn] = useState(true);
  const navigate = useNavigate();

  const {
    title,
    description,
    brand,
    price,
    rating,
    discountPercentage,
    thumbnail,
  } = product;

  const discountValue = price * ((100 - discountPercentage) / 100);
  const value = discountValue.toFixed(2);

  const handleClick = () => {
    if (btn) {
      setbtn((oldbtn) => !oldbtn);
      const addProduct = { ...product, qty: 1 };
      addCart(addProduct);
    } else {
      setbtn((btnold) => !btnold);
      removeCart(product);
    }
  };
  function productDetail() {
    navigate("/ProductDetails", { state: { product } });
   
  }
  return (
    <>
      <div className="box">
        <div onClick={() => productDetail()} className="box-detail">
          <div className="img-div">
            <img src={`data:image/jpeg;base64,${thumbnail}`} alt="phone-pic" />
          </div>
          <div className="deatail ff">
            <span className="cc fw-400 fz-20">{title}</span>
            <h4>{brand}</h4>
            <div className="rating">
              {rating}
              <div>
                {/* <ReactStars
                  count={5}
                  value={rating}
                  onChange={null}
                  size={25}
                  edit={false}
                  color2={"#f08804"}
                  
                /> */}
              </div>
            </div>

            <div className="discount">
              {/* <h5>({discountPercentage}%)</h5>&nbsp; */}
              {/* <h3>${value}</h3> */}
            </div>
            <p className="price">
              $<strike>{price}</strike>
            </p>

            {/* <p className="description">{description}</p> */}
          </div>
        </div>

        <div className="add-cart-box">
          <button onClick={() => handleClick(product)} className="cart-btn">
            {btn ? "Add Cart" : "Remove Cart"}
          </button>
        </div>
      </div>
    </>
  );
}
