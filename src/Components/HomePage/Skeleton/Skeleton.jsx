import { Flex, Skeleton } from "@chakra-ui/react";
import "./Skeleton.css";

function Skeletons() {
  return (
    <Flex justifyContent={"center"} marginTop="24px" gap={"24px"}>
      <Skeleton height="250px" width={"300px"} />
      <Skeleton height="250px" width={"300px"} />
      <Skeleton height="250px" width={"300px"} />
    </Flex>
  );
}
export default Skeletons;
