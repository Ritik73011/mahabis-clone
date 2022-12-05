import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../Navbar/ContextApi/Context";
import CountVal from "./CountVal";
import SingleCart from "./SingleCart";

function Cart() {
  let nevigate = useNavigate();
  const [total, setTotal] = useState(1);
  let {setLen} = useContext(context); 

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };

  let cartArray = JSON.parse(localStorage.getItem("cart")) || [];

  const deleteProduct = (i) => {
    cartArray.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartArray));
    let arr = JSON.parse(localStorage.getItem("cart"))||[];
    setLen(arr.length)
  };
const checkout = ()=>{
  nevigate('/checkout')
}
  return (
    <Flex justifyContent={'center'} textAlign={'left'} maxWidth='1033px' width={'100%'}>
      <Text>Your Cart</Text>
      <Flex gap={'40px'}>
        <Grid templateColumns={'repeat(1,1fr)'}>
          {cartArray.map((el, index) => (
           <SingleCart ele={el}/>
          ))}
        </Grid>

        <Box ml="20">
          <Flex justify="space-between">
            <Text>SUBTOTAL</Text>
            <Text></Text>
          </Flex>
          <Flex justify="space-between">
            <Text>SHIPPING</Text>
            <Text>calculated at checkout</Text>
          </Flex>
          <Button
          onClick={checkout}
            w="100%"
            p="10"
            mb="20"
            bgColor="#f34c3f"
            border="none"
            color="white"
            cursor="pointer">
            CHECKOUT
          </Button>
          <Box textAlign="center">
            <Link>CONTINUE SHOPPING</Link>
            <br />
            <Link>CLEAR CART</Link>
          </Box>
        </Box>
      </Flex>
      <Box textAlign="center">
        <Text>add a product from the rest of our collection</Text>

        <Box></Box>
      </Box>
    </Flex>
  );
}

export default Cart;
