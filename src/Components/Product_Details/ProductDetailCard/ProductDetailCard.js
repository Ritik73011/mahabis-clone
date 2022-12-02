import React, { useState } from "react";
import "./ProductDetailCard.css";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Text,
  Button,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
function ProductDetailCard(props) {
  console.log(props.prod);
  // const [cart, setCart] = useState();
  let arr = JSON.parse(localStorage.getItem("cart")) || [];

  const addToCart = () => {
    arr.push(props.prod);
    localStorage.setItem("cart", JSON.stringify(arr));
  };

  // console.log(arr);

  return (
    // <div className="prodDetCar">
    //   {product.map((data, index) => (
    //     <div key={index}>
    //       <h2>{data.title}</h2>
    //       <h3>{this.props.data}</h3>
    //       <div className="discountDiv">
    //         <p>{data.discount}</p>
    //       </div>
    //       <div className="colorDiv">
    //         <p>choose your upper colour | </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <Container>
      <Box>
        <Box>
          <Box mt="1" mb="0" fontWeight="semibold" as="h1">
            {props.prod.title}
          </Box>
          <Box fontWeight="semibold">₹‌{props.prod.price}</Box>
          <Box
            mt="20"
            fontSize="12px"
            textAlign="center"
            backgroundColor="#f5f5f5">
            discount of {props.prod.discount}% on pre order
          </Box>
          <Box fontSize="10px" mt="20">
            Choose your color |
          </Box>
          <Flex gap="10" mt="20" cursor="pointer">
            <Box
              bgColor="red"
              w="40px"
              h="40"
              color="red"
              border="1px solid black">
              red
            </Box>
            <Box bgColor="black" w="40px" border="1px solid black">
              black
            </Box>
            <Box
              bgColor="white"
              w="40px"
              color="white"
              border="1px solid black">
              white
            </Box>
          </Flex>
          <Box fontSize="10px" mt="20">
            Choose your sole color |
          </Box>
          <Box
            bgColor="red"
            w="40px"
            h="40"
            color="red"
            border="1px solid black"
            mt="20">
            red
          </Box>
          <Box fontSize="10px" mt="20">
            Choose size
          </Box>
          <Flex textAlign="center">
            <Box w="40px" mr="10" h="40" border="1px solid black" mt="20">
              8
            </Box>
            <Box w="40px" mr="10" h="40" border="1px solid black" mt="20">
              9
            </Box>
            <Box w="40px" h="40" border="1px solid black" mt="20">
              10
            </Box>
          </Flex>
          <Button
            onClick={addToCart}
            size="lg"
            w="90%"
            bgColor="black"
            color="white"
            p="10"
            fontSize="16px"
            mt="20"
            cursor="pointer">
            Pre Order
          </Button>
          <Box w="90%" mt="20">
            <Image
              src="https://cdn.mahabis.com/website/cart/cart-pdp-bf-2022-new.jpg"
              w="100%"
            />
          </Box>
          <Box>
            <Accordion allowToggle>
              <AccordionItem mb="0">
                <h2>
                  <AccordionButton p="15" mb="0" border="none" bgColor="white">
                    <Box flex="1" textAlign="left">
                      DESCRIPTION
                    </Box>
                    <AccordionIcon fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel mt="0" fontSize="12px">
                  Sink into pure, simple comfort the moment you step in the
                  door. mahabis classic has a pared-back design for those who
                  love the beautiful yet understated things in life. The wool
                  lining and contoured footbed create a feeling of comfort and
                  support, while the premium felt upper ensures you'll always
                  look stylish, wherever the day should take you.
                  <UnorderedList textAlign="left">
                    <ListItem>Iconic, understated design.</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <Spacer />

              <AccordionItem mt="-30">
                <h2>
                  <AccordionButton p="15" border="none" bgColor="white">
                    <Box flex="1" textAlign="left">
                      SIZE AND FIT INFO
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize="12px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem mt="-30">
                <h2>
                  <AccordionButton p="15" border="none" bgColor="white">
                    <Box flex="1" textAlign="left">
                      DELIVERY & RETURNS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize="12px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetailCard;
