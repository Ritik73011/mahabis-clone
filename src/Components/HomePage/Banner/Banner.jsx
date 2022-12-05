import { Flex, Image } from "@chakra-ui/react";
import "./Banner.css";
import Buttons from "./Button/Button";

function Banner() {
  return (
    <div className="bannerDiv">
      <Image
        width="100%"
        maxHeight="570px"
        src="https://cdn.mahabis.com/website/homepage/webp/021222-homepage-desktop.webp"
      />

      <Flex mt={"16px"} justifyContent="space-evenly">
        <Buttons name={"SHOP MEN"} />
        <Buttons name={"SHOP WOMEN"} />
      </Flex>
    </div>
  );
}
export default Banner;
