import { useState } from "react";

const ProductDataForm = () => {
  const [productData, setProductData] = useState({
    rating: "",
    price: "",
    companyName: "",
    stars: "",
    location: "",
    description: "",
    ownerName: "",
    ownerPicture: "",
    pincode: "",
    city: "",
    nearest: [],
    images: [],
  });

  const handleChange = (field, value) => {
    setProductData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleNearestChange = (index, value) => {
    const updatedNearest = [...productData.nearest];
    updatedNearest[index] = value;

    setProductData((prevData) => ({
      ...prevData,
      nearest: updatedNearest,
    }));
  };

  const handleImagesChange = (index, value) => {
    const updatedImages = [...productData.images];
    updatedImages[index] = value;

    setProductData((prevData) => ({
      ...prevData,
      images: updatedImages,
    }));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Data Form</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Rating
          </label>
          <input
            type="text"
            id="rating"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.rating}
            onChange={(e) => handleChange("rating", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="stars"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Stars
          </label>
          <input
            type="text"
            id="stars"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.stars}
            onChange={(e) => handleChange("stars", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ownerName"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.ownerName}
            onChange={(e) => handleChange("ownerName", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="ownerPicture"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Owner Picture
          </label>
          <input
            type="text"
            id="ownerPicture"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.ownerPicture}
            onChange={(e) => handleChange("ownerPicture", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="pincode"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.pincode}
            onChange={(e) => handleChange("pincode", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nearest"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Nearest
          </label>
          <input
            type="text"
            id="nearest"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.nearest[0] || ""}
            onChange={(e) => handleNearestChange(0, e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-600 text-sm font-medium mb-1"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            value={productData.images[0] || ""}
            onChange={(e) => handleImagesChange(0, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDataForm;
