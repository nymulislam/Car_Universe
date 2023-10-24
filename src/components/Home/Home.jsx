import BrandCard from "../BrandCard/BrandCard";
import Carousel from "../Carousel/Carousel";
import Featured from "../Featured/Featured";
import AdExtra from "../AdExtra/AdExtra";

const Home = () => {
  return (
    <>
      <Carousel></Carousel>
      <div className="mt-56">
        <BrandCard></BrandCard>
        <Featured></Featured>
        <AdExtra></AdExtra>

      </div>
    </>
  );
};

export default Home;
