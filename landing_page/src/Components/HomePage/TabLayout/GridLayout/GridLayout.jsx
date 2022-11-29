import { useEffect } from "react";
import CardLayout from "../CardLayout/CardLayout";
import { useDispatch, useSelector } from "react-redux";
import { bestSellerAction } from "../../../../Redux/Actions/HomePageAction/bestSellerAction";
import { preOrderAction } from "../../../../Redux/Actions/HomePageAction/preOrderAction";
import { backInStockAction } from "../../../../Redux/Actions/HomePageAction/backInStockAction";
import "./GridLayout.css";

function GridLayout({ category }) {
  const dispatch = useDispatch();

  const bestseller = useSelector((data) => {
    return data.bestSellerData;
  });
  const preOrder = useSelector((data) => {
    return data.preOrderData;
  });
  const backStock = useSelector((data) => {
    return data.backInStock;
  });

  const fetchData = async () => {
    console.log("object");
    const responce = await fetch(
      "https://collection-mart-default-rtdb.firebaseio.com/product.json"
    );
    const data = await responce.json();

    const filteredData = data.filter((ele) => {
      return ele.category === category;
    });

    if (category === "bestseller") {
      bestSellerAction(filteredData, dispatch);
    } else if (category === "preorder") {
      preOrderAction(filteredData, dispatch);
    } else {
      backInStockAction(filteredData, dispatch);
    }
  };
  useEffect(() => {
    if (bestseller.length === 0) {
      fetchData();
    }
  }, []);

  if (category === "bestseller") {
    return (
      <div className="gridlayout">
        {bestseller.map((ele) => {
          return <CardLayout key={ele.id} ele={ele} />;
        })}
      </div>
    );
  } else if (category === "preorder") {
    return (
      <div className="gridlayout">
        {preOrder.map((ele) => {
          return <CardLayout key={ele.id} ele={ele} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="gridlayout">
        {backStock.map((ele) => {
          return <CardLayout key={ele.id} ele={ele} />;
        })}
      </div>
    );
  }
}
export default GridLayout;
