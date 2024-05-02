import { useState, useEffect } from "react";
import React from "react";
import { src } from "./Amazon-Emblem.jpg";
import { Routes, Link, useNavigate, Route, Navigate } from "react-router-dom";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { ProductDetails } from "./pages/ProductDetails";
import { CartProvider } from "./Providers/CartProvider";
import { Admin } from "./pages/Admin";
import { ProtectedRoute } from "./Providers/ProtectedRoute";

export function App() {
  //hooks

  const navigate = useNavigate();

  const [isAthu, setAthu] = useState(false);

  // access_token ? children : <Navigate to="/" />

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
          <Route path="/" element={<Login setAthu={setAthu} />} />
          <Route
            path="/Products"
            element={
              <ProtectedRoute>
                <Products Products={Products} />
              </ProtectedRoute>
            }
          />

          <Route path="/Details" element={<Details />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/AdminPanel" element={<Admin />} />
        </Routes>
      </CartProvider>
    </>
  );
}
