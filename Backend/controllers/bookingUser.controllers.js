import BookingUser from "../models/bookingUser.models.js";
import { updateSlotsToTrue } from "../utils/slotsUtils.js";


// to save the booking details of user

export const bookTheParkingSlot = async (req, res, next) => {
  const { user, data, from, to, companyName, numberOfSlots, SlotNumbers } =
    req.body;

  try {
    if (!user || !user.id) {
      return res.status(400).json({
        status: "error",
        message: "Invalid user information",
      });
    }

    // Create a new booking entry
    const booking = await BookingUser.create({
      user: user.id,
      date: new Date(data),
      from: new Date(from),
      to: new Date(to),
      numberOfSlots,
      SlotNumbers,
      companyName,
    });

     // Update the corresponding slots to true 
     await updateSlotsToTrue(companyName, zone, SlotNumbers);

    return res.status(201).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    console.error("Error booking the slot:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// to get the booking details of user


export const getBookedParkingDetails = async (req, res, next) => {
  const userId = req.params.userId; // Assuming you are passing the user ID as a parameter

  try {
    // Fetch booked parking details for the specified user
    const bookedParkingDetails = await BookingUser.find({ user: userId }).populate('user');

    return res.status(200).json({
      status: "success",
      data: bookedParkingDetails,
    });
  } catch (error) {
    console.error("Error fetching booked parking details:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
