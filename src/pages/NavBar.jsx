import logo from "../assests/logo.png";
import { GoSearch } from "react-icons/go";
import { MiniAddCart } from "../pages/MiniAddCart";
import { cartContext } from "../Providers/CartProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { RiShoppingCartLine } from "react-icons/ri";

export function NavBar() {
  const { cart, dispatch } = useContext(cartContext);

  const [addCartClick, setaddCartClick] = useState(false);
  const navigate = useNavigate();

  const totalCartItem = cart.reduce(
    (acc, currentvalue) => acc + currentvalue.qty,
    0
  );
  function navClick() {
    navigate("/Details");
  }

  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-input">
        <input type="text" />
        <button>
          <GoSearch />
        </button>
      </div>
      <div>
        <div className="nav-bar-items ff">
          <div>Language</div>
          <div>Login</div>
          <div
            className="cart-icon"
            onClick={() => {
              setaddCartClick(!addCartClick);
            }}
          >
            <div className="total-cart-btn">
              <RiShoppingCartLine size={24} />
              <span>{totalCartItem}</span>
            </div>

            {addCartClick ? (
              <div className="mini-cart">
                {cart
                  .filter((item, index) => index < 3)
                  .map((item) => (
                    <MiniAddCart item={item} dispatch={dispatch} />
                  ))}

                {cart.length > 3 ? (
                  <div className="see-more">
                    
                    <button
                      className="seemore-btn"
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
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
