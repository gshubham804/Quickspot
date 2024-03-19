import { useState } from "react";
import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";

const DatePickerUtility = ({ onChange, field}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectDate, setSelectDate] = useState(null);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const handleDateChange = (date) => {
    const dateString = new Date(date).toLocaleDateString();
    setSelectDate(dateString);
    onChange(field, dateString);
    setIsOpen(false);
  };

  return (
    <div>
      <label className="block text-lg font-medium mb-1">
        Select Date
        <input
          type="text"
          className="border border-gray-300 text-gray-900
          text-sm rounded-lg block w-full p-2.5"
          placeholder="DD-MM-YYYY"
          value={selectDate || ""}
          onClick={() => setIsOpen(true)}
          readOnly
        />
      </label>
      <DatePicker
        onChange={handleDateChange}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date(currentYear, currentMonth, currentDay)}
        minDate={new Date(currentYear, currentMonth, currentDay)}
        maxDate={new Date(currentYear + 1, currentMonth, currentDay)}
        headerFormat="DD, MM dd"
        colorScheme="#EF4444"
      />
    </div>
  );
};

export default DatePickerUtility;
