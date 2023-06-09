import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Check() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  var [selectedDate, setSelectedDate] = useState(new Date());
  var [cycleLength, setCycleLength] = useState(28);
  var [periodLength, setPeriodLength] = useState(5);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCycleLengthChange = (e) => {
    setCycleLength(e.target.value);
  };

  const handlePeriodLengthChange = (e) => {
    setPeriodLength(e.target.value);
  };

  const calculateNextPeriodDate = () => {
    const ovulationDate = new Date(
      selectedDate.getTime() + (cycleLength - 14) * 24 * 60 * 60 * 1000
    );
    const nextPeriodDate = new Date(
      ovulationDate.getTime() + periodLength * 24 * 60 * 60 * 1000
    );
    return nextPeriodDate;
  };

  const nextPeriodDate = calculateNextPeriodDate();

  const calendarTileContent = ({ date, view }) => {
    if (view === "month") {
      if (date.toDateString() === nextPeriodDate.toDateString()) {
        return <div className="bg-red-500 rounded-full h-6 w-6 mx-auto"></div>;
      } else if (
        date >= nextPeriodDate &&
        date <=
          new Date(
            nextPeriodDate.getTime() + (periodLength - 1) * 24 * 60 * 60 * 1000
          )
      ) {
        return <div className="bg-red-500 rounded-full h-6 w-6 mx-auto"></div>;
      }
      //  else if (date > nextPeriodDate && date < new Date(nextPeriodDate.getTime() + (cycleLength * 24 * 60 * 60 * 1000))) {
      //   return <div className="bg-gray-300 rounded-full h-6 w-6 mx-auto"></div>;
      // }
    }
  };

  return (
    <>
      <div className="max-w-screen-lg py-28 mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Check Your Next Period</h1>

        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <label htmlFor="cycle-length" className="block font-medium mb-2">
              Cycle Length (in days)
            </label>
            <input
              type="number"
              id="cycle-length"
              name="cycle-length"
              value={cycleLength}
              onChange={handleCycleLengthChange}
              className="w-full p-2 rounded border border-gray-400 mb-4"
            />

            <label htmlFor="period-length" className="block font-medium mb-2">
              Period Length (in days)
            </label>
            <input
              type="number"
              id="period-length"
              name="period-length"
              value={periodLength}
              onChange={handlePeriodLengthChange}
              className="w-full p-2 rounded border border-gray-400 mb-4"
            />

            <button className="bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Check
            </button>
            <button onClick={() => openInNewTab('https://hercycleqwerty.onrender.com/')} className="ml-10 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  Predict Cycle
              </button>
          </div>
          <div className="w-1/2 pl-4">
            <label className="block font-medium mb-2">
              Select the first day of your last period
            </label>
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              tileContent={calendarTileContent}
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="font-medium">Next Period Date:</p>
          <p>{nextPeriodDate.toDateString()}</p>
        </div>
      </div>
    </>
  );
}

export default Check;
