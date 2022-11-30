import { Flex, Image } from "@chakra-ui/react";
import "./Banner.css";
import Buttons from "./Button/Button";

function Banner() {
  return (
    <div className="bannerDiv">
      <Image
        width="100%"
        maxHeight="450px"
        src="https://firebasestorage.googleapis.com/v0/b/collection-mart.appspot.com/o/ezgif.com-gif-maker.jpg?alt=media&token=79892b87-a0cc-422b-9c08-7b3014159c8b"
      />

      <Flex mt={"16px"} justifyContent="space-evenly">
        <Buttons name={"SHOP MEN"} />
        <Buttons name={"SHOP WOMEN"} />
      </Flex>
    </div>
  );
}
export default Banner;
