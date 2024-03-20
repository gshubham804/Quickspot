/* eslint-disable react/prop-types */
import { useState } from "react";
import { Circle } from "phosphor-react";
import DatePickerUtility from "../utils/DatePicker";
import TimePicker from "../utils/TimePicker";
import { useDispatch, useSelector } from "react-redux";
import { slotAvailability } from "../utils/slotAvailability";
import { savebookingDetailsOfUser } from "../redux/bookingSlice";
import { hideAlert, showAlert } from "../redux/alertSlice";
import Alert from "../Alert";
import { emptyAlertSliceData } from "../utils/EmptyAlertSliceData";
import { useNavigate } from "react-router-dom";

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
     border-emerald-300 my-2 mx-1 cursor-pointer hover:bg-emerald-300"
    ></div>
  );
};

const Unavailable = () => {
  return (
    <div
      className="h-12 w-8 bg-rose-200 rounded-lg border-2
     border-rose-300 my-2 mx-1 cursor-pointer hover:bg-red-300"
    ></div>
  );
};

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { zones, _id, companyName } = useSelector(
    (state) => state.productData.productDetailsData
  );
  const alert = useSelector((state) => state.alertData);
  const { user_id } = useSelector((state) => state.authentication);
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

  const handleAlertClose = () => {
    dispatch(hideAlert());
  };

  const handleSubmit = () => {
    if (!values.date || !values.from || !values.to) {
      dispatch(
        showAlert({
          type: "error",
          message: "Select date, start and end time",
        })
      );
      emptyAlertSliceData(dispatch);
      return;
    }
    // check "from" and "to" should not be same >> if same then show error using react-toastify
    if (values.from === values.to) {
      dispatch(
        showAlert({
          type: "error",
          message: "Start and End time should not be same",
        })
      );
      emptyAlertSliceData(dispatch);
      return;
    }
    // check the slots provided by user that is booked or not.
    const { date, from, to } =
      zones[values.zoneNumber].slots[values.slotNumber];
    if (!slotAvailability(date, from, to)) {
      dispatch(
        showAlert({
          type: "error",
          message: "Selected slot is already booked",
        })
      );
      emptyAlertSliceData(dispatch);
      return;
    }

    dispatch(
      savebookingDetailsOfUser({
        userId: user_id,
        from: values.from,
        to: values.to,
        date: values.date,
        companyId: _id,
        zoneNumber: values.zoneNumber,
        SlotNumbers: values.slotNumber,
        companyName: companyName,
      })
    );
    navigate(`/productdetails/${_id}/booking/bookingconfirmationpage`);
  };

  return (
    <div className="p-8">
      <div className="flex justify-end mb-8">
        <div className="flex items-center space-x-4">
          <AvailabilityIndicator color="#A7F3D0" label="Available" />
          <AvailabilityIndicator color="#FECDD3" label="Non-Available" />
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
          {zones.map((zone, cardIndex) => (
            <div
              key={cardIndex}
              className="border-2 border-red-300 rounded-md p-4"
            >
              <div className="text-center font-semibold text-lg">
                Zone {cardIndex + 1}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {zone.slots.map((slot, slotIndex) => (
                  <p
                    key={slotIndex}
                    onClick={() =>
                      setValues({
                        ...values,
                        zoneNumber: cardIndex,
                        slotNumber: slotIndex,
                      })
                    }
                  >
                    {slotAvailability(slot.date, slot.from, slot.to) ? (
                      <Available />
                    ) : (
                      <Unavailable />
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-right">
        <button
          className="mt-6 text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-red-600 focus:border-red-300 mb-2 md:mb-0 md:mr-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {alert?.type && alert?.message && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={handleAlertClose}
        />
      )}
    </div>
  );
};

export default Booking;
