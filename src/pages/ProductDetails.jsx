import { NavBar } from "./NavBar";
import { AboutProduct } from "./AboutProduct";
import { useLocation } from "react-router";

export function ProductDetails() {
  const location = useLocation();
  const data=location.state;
  const {product}=data;
  console.log(product);
  const {
    thumbnail,
    title,
    brand,
    price,
    discountPercentage,
    rating,
    description,
    images,
  } = product;
  console.log(images);
  
  return (
    <>
      <NavBar />
      <div className="product-detail">
        <div>
          <div>
            <img src={thumbnail} />
          </div>
          <div className="images-div">{images.map((images)=><div className="display-images"><img src={images}/></div>)}</div>
        </div>
        <div></div>
      </div>

      {/* <div className="box">
        <div >
          <div className="img-div">
            <img src={thumbnail} alt="phone-pic" />
          </div>
          <div className="deatail ff">
            <span className="cc fw-400 fz-20">{title}</span>
            <h4>{brand}</h4>
            <div className="rating">
              {rating}
              <div>
               
              </div>
            </div>

            <div className="discount">
              <h5>({discountPercentage}%)</h5>&nbsp;
              <h3>${value}</h3>
            </div>
            <p className="price">
              $<strike>{price}</strike>
            </p>

            <p className="description">{description}</p>
          </div>
        </div>

        <div className="add-cart-box">
          <button onClick={() => handleClick(product)} className="cart-btn">
            {btn ? "Add Cart" : "Remove Cart"}
          </button>
        </div>
      </div> */}
    </>
  );
}
