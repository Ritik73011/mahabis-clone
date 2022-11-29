import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import GridLayout from "./GridLayout/GridLayout";
import "./TabLayout.css";

function TabLayout() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <h1 className="innovative">
        Innovative comfort that takes you everywhere
      </h1>

      <Box>
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
              BEST SELLERS
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
              PRE ORDER
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
              BACK IN STOCK
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <GridLayout category={"bestseller"} />
            </TabPanel>
            <TabPanel>
              <GridLayout category={"preorder"} />
            </TabPanel>
            <TabPanel>
              <GridLayout category={"backinstock"} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}
export default TabLayout;
