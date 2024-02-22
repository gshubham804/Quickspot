import Carousel from "../Carousel";
import FilterTags from "../FilterTags";
import ProductCard from "../ProductCard";
import Search from "../Search";
import {
  carImagesForHomePageSlider,
  carImagesForProductCards,
} from "../data/images";

const Home = () => {
  return (
    <>
      <Carousel images={carImagesForHomePageSlider} />
      <div className="p-6">
        {/* search component */}
        <Search />
        {/* Filter tags */}
        <FilterTags />
        {/* Product cards  */}
        <div className="text-black font-bold text-2xl mb-4 mt-6">
          Recommended
        </div>
        <div className="flex flex-row items-center justify-center">
          {carImagesForProductCards.map((el, index) => (
            <ProductCard key={index} images={el} />
          ))}
        </div>
        {/* Popular parking zone */}
        <div className="text-black font-bold text-2xl mb-4 mt-6">
          Popular parking zone
        </div>
        <div className="flex flex-row items-center">
          {carImagesForProductCards.map((el, index) => (
            <ProductCard key={index} images={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
