export function Card({ title, phone, brand, price, rating, discount, desc }) {
  return (
    <>
      <div className="box">
        <div className="img-div">
          <img src={phone} alt="phone-pic" />
        </div>
        <div className="deatail">
          <h1>{title}</h1>
          <h3>{brand}</h3>
          <h3>{rating}</h3>
          <h3>{price}</h3>
          <h3>{discount}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
