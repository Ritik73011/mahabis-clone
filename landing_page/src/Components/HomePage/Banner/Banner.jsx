import { Flex, Image } from "@chakra-ui/react";
import "./Banner.css";
import Buttons from "./Button/Button";

function Banner() {
  return (
    <div className="bannerDiv">
      <Image
        width="100%"
        maxHeight="550px"
        src="https://cdn.mahabis.com/website/homepage/webp/desktop-homepage-bf-2022-new.webp"
      />

      <Flex mt={"16px"} justifyContent="space-evenly">
        <Buttons name={"SHOP MEN"} />
        <Buttons name={"SHOP WOMEN"} />
      </Flex>
    </div>
  );
}
export default Banner;
