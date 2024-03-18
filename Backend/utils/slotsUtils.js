import ProductData from "../models/productData.models.js";

export const updateSlotsToTrue = async (companyName, zone, slotNumbers) => {
  try {
    const filter = { companyName, "zones.name": zone, "slots.value": false };
    const update = { $set: { "zones.$[zone].slots.$[slot].value": true } };
    const options = {
      arrayFilters: [
        { "zone.name": { $exists: true } },
        { "slot.value": false, "slotNumbers": { $in: slotNumbers } },
      ],
    };

    await ProductData.updateOne(filter, update, options);
  } catch (error) {
    console.error("Error updating slots:", error);
    throw error;
  }
};
