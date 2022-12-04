import Banner from "./Banner/Banner";
import BannerExplore from "./BannerExplore/BannerExplore";
import GridImage from "./GridImage/GridImage";
import "./HomePage.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import NewsTab from "./News/NewsTab";
import Rating from "./Rating/Rating";
import TabLayout from "./TabLayout/TabLayout";
import VideoBanner from "./VideoBanner/VideoBanner";
import {Footer} from '../Footer/Footer'
function HomePage() {
  return (
    <div>
      <Banner />
      <TabLayout />
      <ImageSlider />
      <VideoBanner />
      <BannerExplore />
      <GridImage />
      <NewsTab />
      <Rating />
    </div>
  );
}
export default HomePage;
