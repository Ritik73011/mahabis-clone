import React from "react";
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
} from "@chakra-ui/react";
function ProductDetailCard() {
  let product = [
    {
      title: "mahabis classic",
      price: "₹‌10,200.00",
      discount: "Buy 2 or more pairs, GET 20% with the code BLACKFRI",
      rating: "",
      desc: "Sink into pure, simple comfort the moment you step in the door. mahabis classic has a pared-back design for those who love the beautiful yet understated things in life. The wool lining and contoured footbed create a feeling of comfort and support, while the premium felt upper ensures you'll always look stylish, wherever the day should take you. Iconic, understated design. Premium felt upper. 100% wool lining. Neoprene heel gently secures your foot in place. Contoured footbed for extra support. Eco-friendly packaging One tree planted for every pair bought",
      video: "",
      category: "",
      color: {
        clr1: "RED",
        clr2: "BLACK",
        clr3: "WHITE",
      },
      size: {
        sz1: "8",
        sz2: "9",
        sz3: "10",
      },
      image: {
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
      },
    },
  ];
  return (
    // <div className="prodDetCar">
    //   {product.map((el, index) => (
    //     <div key={index}>
    //       <h2>{el.title}</h2>
    //       <h3>{el.price}</h3>
    //       <div className="discountDiv">
    //         <p>{el.discount}</p>
    //       </div>
    //       <div className="colorDiv">
    //         <p>choose your upper colour | </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <Box>
      {product.map((el) => (
        <Box>
          <Box mt="1" mb="0" fontWeight="semibold" as="h1">
            {el.title}
          </Box>
          <Box fontWeight="semibold">{el.price}</Box>
          <Box
            mt="20"
            fontSize="12px"
            textAlign="center"
            backgroundColor="#f5f5f5">
            {el.discount}
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
      ))}
    </Box>
  );
}

export default ProductDetailCard;
