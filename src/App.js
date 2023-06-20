import React, { useState } from "react";
import DatePicker, {
  Calendar,
  getAllDatesInRange
} from "react-multi-date-picker";
import "./styles.css";

export default function App() {
  let [inputValue, setInputValue] = useState("");
  let [inputValue2, setInput2Value] = useState("");
  let [value, setValue] = useState([]);

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInput2Value(e.target.value)}
      />
      <h1>Hello CodeSandbox</h1>
      <Calendar
        multiple
        /**
         * set "onlyShowInRangeDates" to false,
         * if you want to see selected dates that
         * are not in range of min and max date
         */
        onlyShowInRangeDates={true}
        minDate={inputValue}
        maxDate={inputValue2}
        value={value}
        onChange={setValue}
      />
      <hr />
      <h1>Displaying all dates between start and end date in the date panel</h1>
      <DatePicker
        range
        /**
         * Keep in mind that activating this prop
         * may cause slow rendering at
         * big ranges of Dates
         */
        eachDaysInRange
        onChange={(dateObjects) => {
          let allDates = getAllDatesInRange(dateObjects, true);

          if (allDates.length < 2) return;

          alert("you selected \n" + allDates.join(",\n"));
        }}
      />
    </div>
  );
}
