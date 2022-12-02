import { Box, Divider, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import "./BannerExplore.css";

function BannerExplore() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex justifyContent={"center"} cursor="pointer">
      <Box margin={"16px 0"} bgColor="#f9f9f8">
        <Image
          maxW={"1240px"}
          width="100%"
          src="https://cdn.shopify.com/s/files/1/0238/5795/files/1_1e477e90-3122-4c4a-9215-75285f1bbb67.jpg?v=1668096319"
        />
        <div className={isLargerThan768 ? "dividerDiv" : "dividerDiv2"}>
          <h1>The five beautiful benifits of wool</h1>
          <Divider orientation="vertical"></Divider>
          <p>
            Discover five ways this intelligent, natural material benefits your
            feet <span>READ MORE.</span>
          </p>
        </div>
      </Box>
    </Flex>
  );
}
export default BannerExplore;
