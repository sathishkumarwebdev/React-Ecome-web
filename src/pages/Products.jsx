import { Card } from "../Card";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
export function Products({ Products }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { products } = await fetch("https://dummyjson.com/products").then(
        (res) => res.json()
      );
      setProducts(products);
    };

    setTimeout(getData, 5000);
  }, []);
  if (!products.length) {
    return (
      <div className="spinner-ring">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div className="container">
      {products.map((card) => (
        <Card
          title={card.title}
          brand={card.brand}
          phone={card.thumbnail}
          price={card.price}
          rating={card.rating}
          discount={card.discount}
          desc={card.description}
        />
      ))}
    </div>
  );
}
