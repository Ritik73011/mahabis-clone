import { Box, Flex } from "@chakra-ui/react";
import "./Rating.css";
import SingleGridItem from "../GridImage/SingleGridItem";
import mLogo from "../../Navbar/Logo/mlogo.svg";
function Rating() {
  return (
    <>
      <Flex justifyContent={"center"} margin="16px 0">
        <Box>
          <p className="ratingP">Rated Excellent By You</p>
          <Flex gap={"2px"} justifyContent="center">
            <div className="ratingBox">
              <p>★</p>
            </div>
            <div className="ratingBox">
              <p>★</p>
            </div>
            <div className="ratingBox">
              <p>★</p>
            </div>
            <div className="ratingBox">
              <p>★</p>
            </div>
            <div className="ratingBox">
              <p>★</p>
            </div>
          </Flex>
          <p className="totalRating">5 out of 5 based on 39,758 reviews</p>
        </Box>
      </Flex>

      <Flex position={"relative"} justifyContent={"center"} margin="32px 0">
        <div className="ratingImgGrid">
          <SingleGridItem
            img={
              "https://cdn.shopify.com/s/files/1/0238/5795/files/2_fa7874a0-4a6e-4eee-95fa-f8d6af89f7dc.jpg?v=1668096599"
            }
          />
          <SingleGridItem
            img={
              "https://cdn.shopify.com/s/files/1/0238/5795/files/3_b9265a13-8de7-4c36-abab-eea710ad1f59.jpg?v=1668096599"
            }
          />
          <SingleGridItem
            img={
              "https://cdn.shopify.com/s/files/1/0238/5795/files/4_0f644a08-e6e0-4ce3-949a-0b704c847e19.jpg?v=1668096599"
            }
          />
          <SingleGridItem
            img={
              "https://cdn.shopify.com/s/files/1/0238/5795/files/5_5b46fe73-7966-49c2-a149-1aa485996e8e.jpg?v=1668096599"
            }
          />
        </div>

        <div className="roundLogo">
          <img src={mLogo} alt="" />
        </div>
      </Flex>
    </>
  );
}
export default Rating;
