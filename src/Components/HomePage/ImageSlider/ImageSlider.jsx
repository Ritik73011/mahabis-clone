import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  let ref = useRef();
  let slider = useRef();
  function slide() {
    let slideValue = slider.current.value;
    ref.current.style.clipPath =
      "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
  }
  return (
    <Box>
      <div className="textDiv">
        <h1 className="goodDesign">we value good design.</h1>
        <h1 className="insideMatter">
          but it's what's on the inside that matters
        </h1>
      </div>
      <div className="containerS">
        <img
          src="https://cdn.mahabis.com/website/homepage/side-to-side-1.jpg"
          alt=""
        />
        <img
          id="my-img"
          ref={ref}
          src="https://cdn.mahabis.com/website/homepage/side-to-side-2.jpg"
          alt=""
        />
        <input
          type="range"
          min={0}
          max={100}
          value={50}
          id="slider"
          ref={slider}
          onInput={slide}
        />
      </div>
    </Box>
  );
}
export default ImageSlider;
