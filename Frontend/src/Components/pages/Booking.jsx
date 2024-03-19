import React, { useState } from "react";
import { Circle } from "phosphor-react";
import DatePickerUtility from "../utils/DatePicker";
import TimePicker from "../utils/TimePicker";
import { useSelector } from "react-redux";

const AvailabilityIndicator = ({ color, label }) => (
  <div className="flex items-center space-x-2">
    <Circle size={24} color={color} weight="fill" />
    <p className="text-sm">{label}</p>
  </div>
);

const Available = () => {
  return (
    <div
      className="h-12 w-8 bg-emerald-200 rounded-lg border-2
     border-emerald-300 my-2 mx-1 cursor-pointer"
    ></div>
  );
};

const Unavailable = () => {
  return (
    <div
      className="h-12 w-8 bg-rose-200 rounded-lg border-2
     border-rose-300 my-2 mx-1 cursor-pointer"
    ></div>
  );
};

const Booking = () => {
  const { numberOfZones, numberOfSlotsEachZone } = useSelector(
    (state) => state.productData.productDetailsData
  );
  const [values, setValues] = useState({
    date: "",
    from: "",
    to: "",
    zoneNumber: "",
    slotNumber: "",
  });

  const handleValueChange = (label, value) => {
    setValues((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <div className="p-8">
      <div className="flex justify-end mb-8">
        <div className="flex items-center space-x-4">
          <AvailabilityIndicator color="#00ff00" label="Available" />
          <AvailabilityIndicator color="#EB0F0F" label="Non-Available" />
        </div>
      </div>

      {/* Main container */}
      <div
        className="flex flex-col md:flex-row lg:flex-row justify-center md:justify-between
      lg:justify-between"
      >
        {/* First Subcontainer */}
        <div
          className="rounded-md h-max py-8 border-red-300 px-4 flex flex-col border-2
        mr-0 md:mr-8 lg:mr-8 mb-8 md:mb-0 lg:mb-0"
        >
          <div className="w-32">
            <DatePickerUtility onChange={handleValueChange} field="date" />
            {/* Add your date picker component here */}
          </div>
          <div>
            <label className="text-lg font-semibold">From</label>
            {/* Add your time picker component here */}
            <TimePicker onChange={handleValueChange} field="from" />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">To</label>
            {/* Add your time picker component here */}
            <TimePicker onChange={handleValueChange} field="to" />
          </div>
        </div>

        {/* Second subContainer */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9">
          {[...Array(numberOfZones)].map((_, cardIndex) => (
            <>
              <div
                key={cardIndex}
                className=" border-2 border-red-300 rounded-md p-4"
              >
                <div className="text-center font-semibold text-lg">
                  Zone {cardIndex + 1}
                </div>
                {/* 3x6 grid for cars */}
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(numberOfSlotsEachZone / 3)].map(
                    (row, rowIndex) => (
                      <React.Fragment key={rowIndex}>
                        {[...Array(numberOfSlotsEachZone / 5)].map(
                          (_, colIndex) => {
                            const index =
                              rowIndex * (numberOfSlotsEachZone / 5) + colIndex;
                            const handleClick = () => {
                              setValues((prevState) => ({
                                ...prevState,
                                zoneNumber: cardIndex,
                                slotNumber: index,
                              }));
                            };
                            return (
                              <React.Fragment key={colIndex}>
                                <p onClick={handleClick}>
                                  {colIndex % 2 === 0 ? (
                                    <Available />
                                  ) : (
                                    <Unavailable />
                                  )}
                                </p>
                              </React.Fragment>
                            );
                          }
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="text-right">
        <button
          className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-red-600 focus:border-red-300 mb-2 md:mb-0 md:mr-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Booking;
