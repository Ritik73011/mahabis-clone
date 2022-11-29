import "./CardLayout.css";

function CardLayout({ ele }) {
  return (
    <div className="cardLayout">
      <div className="cardImgDiv">
        <img src={ele.image.img1} alt="" />
      </div>
      <h3>{ele.title}</h3>
      <p>{ele.color}</p>
      <p>{ele.price}</p>
    </div>
  );
}
export default CardLayout;
