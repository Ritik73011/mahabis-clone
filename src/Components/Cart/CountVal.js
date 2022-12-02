import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const CountVal = (props) => {
  //   console.log(props);
  let [count, setCount] = useState(1);
  //   let [total, setTotal] = useState(0);
  // console.log(total);
  return (
    // <div className="count">
    //   <h2
    //     style={{ cursor: "pointer" }}
    //     className="incr"
    //     onClick={() => {
    //       if (count === 1) {
    //         return;
    //       }
    //       setCount(count - 1);
    //     //   if (total <= 0) {
    //     //     return;
    //     //   }
    //     //   setTotal(total - props.price);
    //     }}>
    //     <img src="https://cdn-icons-png.flaticon.com/512/43/43625.png" />
    //   </h2>
    //   <h2> {count} </h2>
    //   <h2
    //     style={{ cursor: "pointer" }}
    //     className="decr"
    //     onClick={() => {
    //       setCount(count + 1);
    //     //   setTotal(total + props.price);
    //     }}>
    //     <img src="https://cdn-icons-png.flaticon.com/512/2997/2997933.png" />
    //   </h2>
    // </div>
    <Flex align="center" gap="5" alignContent="center">
      <Button
        border="0.5px solid grey"
        textAlign="center"
        w="25px"
        h="20px"
        onClick={() => {
          if (count == 1) {
            return;
          }
          setCount(count - 1);
        }}>
        -
      </Button>
      <Text>{count}</Text>

      <Button
        textAlign="center"
        border="0.5px solid grey"
        w="25px"
        h="20px"
        onClick={() => {
          setCount(count + 1);
        }}>
        +
      </Button>
    </Flex>
  );
};

export default CountVal;
