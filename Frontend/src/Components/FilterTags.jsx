import { useState } from "react";

const FilterTags = () => {
  const filters = [
    "All",
    "Nearest by me",
    "Car wash",
    "Near metro station",
    "Near hospitals",
    "Near bus stand",
    "Having CCTV",
  ];

  const [selectedFilters, setSelectedFilters] = useState(["All"]);

  const toggleFilter = (filter) => {
    if (filter === "All") {
      setSelectedFilters(["All"]);
    } else if (selectedFilters.includes("All")) {
      setSelectedFilters([filter]);
    } else {
      if (selectedFilters.includes(filter)) {
        setSelectedFilters(
          selectedFilters.filter((selected) => selected !== filter)
        );
      } else {
        setSelectedFilters([...selectedFilters, filter]);
      }
    }
  };

  return (
    <div className="flex space-x-4 justify-center my-6">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => toggleFilter(filter)}
          className={`${
            selectedFilters.includes(filter)
              ? "bg-red-500 text-white hover:bg-red-400"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          } py-2 px-4 rounded-full focus:outline-none`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
