import React from "react";
import "./ProductCard.css";
import ProductDetailCard from "../ProductDetailCard/ProductDetailCard";
import ProductImages from "../ProductImages/ProductImages";
import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import BannerLeft from "../Banner/BannerLeft";
import BannerRight from "../Banner/BannerRight";
import MainBanner from "../Banner/MainBanner";
function ProductCard() {
  const bannerData = [
    {
      image:
        "https://i.shgcdn.com/07cd2e7a-0868-43f3-b414-c4ad48f23b48/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      heading: "Our pared-back design speaks volumes",
      subHeading:
        "Let the bold colours of the mahabis classic brighten your day.",
    },
    {
      image:
        "https://i.shgcdn.com/9a1c396b-93d8-46db-b790-630dc6e2d488/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      heading: "A slipper that's here to stay",
      subHeading:
        "Made with a premium felt upper and a durable anywhere sole, they're the slippers you'll be wearing for years to come. What's more, the neoprene heel cradle holds them in place for a secure fit.",
    },
    {
      image:
        "https://i.shgcdn.com/668c2734-2190-41a2-ba56-086046bc8b90/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      heading: "Slippers with sole",
      subHeading:
        "And by that we mean a cleverly designed, versatile, easy to clean TPU sole which takes you indoors to out.  ",
    },
    {
      image:
        "https://i.shgcdn.com/79ce6d4c-e764-4489-889d-404437e5dc4b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      heading: "Everyday, year round comfort",
      subHeading:
        "The temperature regulating lining keeps you warm in the winter, comfortable in the summer, and feeling good year round.",
    },
  ];
  return (
    <Container>
      //{" "}
      {/* <div className="container">
        // <ProductImages />
        // <ProductDetailCard />
        //{" "}
      </div> */}
      <Flex mt="50">
        <Box w="65%">
          <ProductImages />
        </Box>
        <Box w="25%" m="0">
          <ProductDetailCard />
        </Box>
      </Flex>
      <MainBanner />
      <BannerLeft
        image={bannerData[0].image}
        heading={bannerData[0].heading}
        subHeading={bannerData[0].subHeading}
      />
      <BannerRight
        image={bannerData[1].image}
        heading={bannerData[1].heading}
        subHeading={bannerData[1].subHeading}
      />
      <BannerLeft
        image={bannerData[2].image}
        heading={bannerData[2].heading}
        subHeading={bannerData[2].subHeading}
      />
      <BannerRight
        image={bannerData[3].image}
        heading={bannerData[3].heading}
        subHeading={bannerData[3].subHeading}
      />
    </Container>
  );
}

export default ProductCard;
