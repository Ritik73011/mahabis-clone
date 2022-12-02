import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Cart() {
  let cartArray = JSON.parse(localStorage.getItem("cart"));
  return (
    <Container p="200" pt="50">
      <Text>Your Cart</Text>

      {cartArray.map((el) => (
        <Box boxShadow="0 2px 2px black">
          <Flex align="center">
            <Box w="60%">
              <Flex>
                <Box w="20%">
                  <Image
                    w="100%"
                    src="https://cdn.shopify.com/s/files/1/0238/5795/products/MC-F-LG-HV-A2-2_300x.jpg?v=1668705500"
                  />
                </Box>
                <Box w="65%" p="60" pt="0" pb="0">
                  <Text>{el.title}</Text>
                  <Text>8</Text>
                  <Flex align="center">
                    <Button w="20px" h="20px">
                      +
                    </Button>
                    <Text>1</Text>
                    <Button w="20px" h="20px">
                      -
                    </Button>
                  </Flex>
                </Box>
                <Box w="10%" mr="50">
                  <Text textAlign="end">x</Text>
                  <Text mt="50" mr="30">
                    ₹{el.price}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box w="30%">
              <Flex justify="space-between">
                <Text>SUBTOTAL</Text>
                <Text>₹{el.price}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>SHIPPING</Text>
                <Text>calculated at checkout</Text>
              </Flex>
              <Button
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
        </Box>
      ))}
      <Box textAlign="center">
        <Text>add a product from the rest of our collection</Text>

        <Box></Box>
      </Box>
    </Container>
  );
}

export default Cart;
