import { Box } from "@chakra-ui/react";
import "./SingleGridItem.css";

function SingleGridItem({ img, name }) {
  return (
    <Box position={"relative"} cursor="pointer">
      <img src={img} alt="" />
      <p className="textOnImage">{name}</p>
    </Box>
  );
}
export default SingleGridItem;
