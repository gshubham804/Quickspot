import  { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

const MyApp = ({ onChange, field}) => {
  const [value, setValue] = useState('10:00');

  const handleChange = (timeValue) => {
    setValue(timeValue);
    onChange(field, timeValue);
  }

  return (  
    <div>
      <TimePicker  onChange={handleChange} value={value} />
    </div>
  );
}

export default MyApp;
