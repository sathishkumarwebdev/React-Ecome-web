import { NavBar } from "./NavBar";
import { AboutProduct } from "./AboutProduct";
import { useLocation } from "react-router";

export function ProductDetails() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      
      {/* {pro.map((about) => (
        <AboutProduct about={about} />
      ))} */}
    </>
  );
}
