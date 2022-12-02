import { Flex } from "@chakra-ui/react";
import "./VideoBanner.css";

function VideoBanner() {
  return (
    <Flex justifyContent={"center"}>
      <video
        style={{
          maxWidth: "1240px",
          width: "100%",
          height: "auto",
          margin: "16px 0",
        }}
        autoPlay
        muted
        loop
        src="https://cdn.shopify.com/s/files/1/0238/5795/files/mahabis-video-2022.mp4?v=1644408717"
      ></video>
    </Flex>
  );
}
export default VideoBanner;
