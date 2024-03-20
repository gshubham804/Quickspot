import ProductData from "../models/productData.models.js";

export const updateSlotsToTrue = async (
  companyId,
  date,
  from,
  to,
  zone,
  SlotNumbers
) => {
  try {
    // Find the product data by company ID
    const product = await ProductData.findById(companyId);

    if (!product) {
      throw new Error("Product not found");
    }

    // Find the zone in the product data
    if (isNaN(zone) || zone < 0 || zone >= product.zones.length) {
      throw new Error("Invalid zone index");
    }

    // Update the slots to true
      // Ensure the slot index is valid
      if (parseInt(SlotNumbers) < 0 || parseInt(SlotNumbers) >= product.zones[zone].slots.length) {
        throw new Error(`Invalid slot index ${SlotNumbers} for zone ${zone}`);
      }

      // Update the slot properties
      product.zones[zone].slots[parseInt(SlotNumbers) ].date = date;
      product.zones[zone].slots[parseInt(SlotNumbers) ].from = from;
      product.zones[zone].slots[parseInt(SlotNumbers) ].to = to;

    // Save the updated product data
    await product.save();
    return true; // Slots updated successfully
  } catch (error) {
    console.error("Error updating slots:", error);
    throw error;
  }
};
