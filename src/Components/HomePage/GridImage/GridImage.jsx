import { Flex } from "@chakra-ui/react";
import "./GridImage.css";
import SingleGridItem from "./SingleGridItem";

function GridImage() {
  return (
    <Flex justifyContent={"center"} margin="16px 0">
      <div className="gridImgCom">
        <SingleGridItem
          img={
            "https://cdn.shopify.com/s/files/1/0238/5795/files/2_635bc7ee-60b9-4b5b-9dbf-8e03c87903d8_1024x1024.jpg?v=1668087521"
          }
          name={"Who we are"}
        />
        <SingleGridItem
          img={
            "https://cdn.shopify.com/s/files/1/0238/5795/files/3_441ab4b0-aec0-4c99-8493-97c2d71a928c_1024x1024.jpg?v=1668087547"
          }
          name={"Sustainability"}
        />
        <SingleGridItem
          img={
            "https://cdn.shopify.com/s/files/1/0238/5795/files/4_4aed203a-353d-47d8-a330-a01389a2c95b_1024x1024.jpg?v=1668087564"
          }
          name={"Gifting"}
        />
        <SingleGridItem
          img={
            "https://cdn.shopify.com/s/files/1/0238/5795/files/1_dd53b4df-ac19-4cc0-9b87-4d25c8b8047e_1024x1024.jpg?v=1668087583"
          }
          name={"Mahabis rewards"}
        />
      </div>
    </Flex>
  );
}
export default GridImage;
