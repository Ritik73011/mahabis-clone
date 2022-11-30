import React from "react";
import "./Banner.css";
function BannerRight({ image, heading, subHeading }) {
  return (
    <div className="bannerContainer">
      <div className="bannerHeading rightHeading">
        <h2>{heading}</h2>
        <hr />
        <h3>{subHeading}</h3>
      </div>
      <div className="bannerImg">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default BannerRight;
