import { useState, useEffect } from "react";
import React from "react";
import { src } from "./Amazon-Emblem.jpg";
import { Routes, Link, useNavigate, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { CartProvider } from "./Providers/CartProvider";

export function App() {
  //hooks

  const navigate = useNavigate();

  const [isAthu, setAthu] = useState(false);

  //useeffect

  useEffect(() => {
    if (isAthu) {
      navigate("/Products");
    }
  }, [isAthu]);

  return (
    <>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Link to="login">Login</Link>
              </div>
            }
          />
          <Route path="/login" element={<Login setAthu={setAthu} />} />
          <Route path="/Products" element={<Products Products={Products} />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </CartProvider>
    </>
  );
}
