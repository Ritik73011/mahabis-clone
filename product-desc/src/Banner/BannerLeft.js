import React from "react";
import "./Banner.css";
function BannerLeft({ image, heading, subHeading }) {
  return (
    <div className="bannerContainer">
      <div className="bannerImg">
        <img src={image} alt="" />
      </div>
      <div className="bannerHeading">
        <h2>{heading}</h2>
        <hr />
        <h3>{subHeading}</h3>
      </div>
    </div>
  );
}

export default BannerLeft;
