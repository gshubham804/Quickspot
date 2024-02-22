import FilterTags from "../FilterTags";
import ProductCard from "../ProductCard";
import Search from "../Search";

const Home = () => {
  return (
    <>
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
          {[...Array(4)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        {/* Popular parking zone */}
        <div className="text-black font-bold text-2xl mb-4 mt-6">
          Popular parking zone
        </div>
        <div className="flex flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
