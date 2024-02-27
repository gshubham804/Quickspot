import React from "react";
import { Circle } from "phosphor-react";
import DatePickerUtility from "../utils/DatePicker";
import TimePicker from "../utils/TimePicker";

const AvailabilityIndicator = ({ color, label }) => (
  <div className="flex items-center space-x-2">
    <Circle size={24} color={color} weight="fill" />
    <p className="text-sm">{label}</p>
  </div>
);

const Booking = () => {
  return (
    <div className="p-8">
      <div className="flex justify-end mb-8">
        <div className="flex items-center space-x-4">
          <AvailabilityIndicator color="#00ff00" label="Available" />
          <AvailabilityIndicator color="#EB0F0F" label="Non-Available" />
        </div>
      </div>

      {/* Main container */}
      <div className="flex justify-between">
        {/* First Subcontainer */}
        <div className="rounded-md h-max py-8 border-red-300 px-4 flex flex-col border-2 mr-8">
          <div className="w-32">
            <DatePickerUtility />
            {/* Add your date picker component here */}
          </div>
          <div>
            <label className="text-lg font-semibold">From</label>
            {/* Add your time picker component here */}
            <TimePicker />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">To</label>
            {/* Add your time picker component here */}
            <TimePicker />
          </div>
        </div>

        {/* Second subContainer */}
        <div className="col-span-2 grid grid-cols-3 gap-9">
          {[...Array(5)].map((_, cardIndex) => (
            <>
              <div
                key={cardIndex}
                className="border-2 border-red-300 rounded-md p-4"
              >
                <div className="text-center font-semibold text-lg">
                  Zone {cardIndex + 1}
                </div>
                {/* 3x6 grid for cars */}
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(3)].map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {[...Array(6)].map((_, colIndex) => (
                        <img
                          src={
                            colIndex % 2 === 0
                              ? "https://w7.pngwing.com/pngs/545/134/png-transparent-car-pink-racing-driving-car-computer-car-grass.png"
                              : "https://iili.io/JGerz5Q.md.jpg"
                          }
                          className="cursor-pointer my-3 h-14 w-max"
                          key={colIndex}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
