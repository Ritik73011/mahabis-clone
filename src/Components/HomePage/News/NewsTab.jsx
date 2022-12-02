import { Flex, Image } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import "./NewTab.css";

function NewsTab() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex justifyContent={"center"} margin="30px 0" bgColor={"#f9f9f8"}>
      <Box
        width={"100%"}
        maxWidth="800px"
        marginBottom={"10px"}
        padding={"10px 0"}
      >
        <Tabs align="center" colorScheme={"blackAlpha"}>
          <TabList color={"#111"}>
            <Tab
              fontWeight="600"
              fontSize={isLargerThan768 ? "16px" : "15px"}
              padding={
                isLargerThan768
                  ? "30px 60px 12px 60px"
                  : "15px 30pxpx 8pxpx 30px"
              }
              lineHeight={isLargerThan768 ? "1.5" : null}
              letterSpacing={isLargerThan768 ? "1px" : null}
            >
              <Image
                mixBlendMode={"multiply"}
                src="https://cdn.shopify.com/s/files/1/0238/5795/files/logo-independent.png?v=7161839044843993605"
              />
            </Tab>
            <Tab
              fontWeight="600"
              fontSize={isLargerThan768 ? "16px" : "15px"}
              padding={
                isLargerThan768
                  ? "30px 60px 12px 60px"
                  : "15px 30pxpx 8pxpx 30px"
              }
              lineHeight={isLargerThan768 ? "1.5" : null}
              letterSpacing={isLargerThan768 ? "1px" : null}
            >
              <Image
                mixBlendMode={"multiply"}
                src="https://cdn.shopify.com/s/files/1/0238/5795/files/logo-gq.jpg?v=1634169349500010309"
              />
            </Tab>
            <Tab
              fontWeight="600"
              fontSize={isLargerThan768 ? "16px" : "15px"}
              padding={
                isLargerThan768
                  ? "30px 60px 12px 60px"
                  : "15px 30pxpx 8pxpx 30px"
              }
              lineHeight={isLargerThan768 ? "1.5" : null}
              letterSpacing={isLargerThan768 ? "1px" : null}
            >
              <Image
                mixBlendMode={"multiply"}
                src="https://cdn.shopify.com/s/files/1/0238/5795/files/logo-the-times.jpg?v=16818295277333601010"
              />
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="slideRight">
                <p>
                  "mahabis, an award-winning brand, has considered what it takes
                  to create the most wearable slipper"
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="slideRight">
                <p>
                  "mahabis classic slipper gains top points for its
                  well-considered construction... literal layers of pure comfort
                  here"
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="slideRight">
                <p>
                  "these days the brand to show off is mahabis. the hip slipper
                  of choice"
                </p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
export default NewsTab;
