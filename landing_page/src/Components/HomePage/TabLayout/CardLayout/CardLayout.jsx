import "./CardLayout.css";

function CardLayout({ ele }) {
  return (
    <div className="cardLayout">
      <div className="cardImgDiv">
        <img src={ele.image.img1} alt="" />
      </div>
      <h3>{ele.title}</h3>
      <p className="color">{ele.color}</p>
      <p className="priceC">₹‌{ele.price}</p>
    </div>
  );
}
export default CardLayout;
