import Carousel from "../Carousel";
import FilterTags from "../FilterTags";
import ProductCard from "../ProductCard";
import Search from "../Search";
import {
  carImagesForHomePageSlider,
} from "../data/images";

const Home = () => {
  return (
    <>
      <Carousel images={carImagesForHomePageSlider} />
      <div>
        {/* search component */}
        <Search />
        {/* Filter tags */}
        <FilterTags />
        {/* Product cards  */}
        <div className="px-6 text-black font-bold text-2xl mb-4 mt-6">
          Recommended
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <ProductCard />
        </div>

        {/* Popular parking zone */}
        <div className="px-6 text-black font-bold text-2xl mb-4 mt-6">
          Popular parking zone
        </div>
        <div className="flex flex-wrap items-center justify-center">
            <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Home;
