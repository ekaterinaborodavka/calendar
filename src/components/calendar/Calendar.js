import React, { useState } from "react";
import { events, typeEvents } from "../../constants";
import { getMonths } from "../../utils";
import "./calendar.css";
import { Month } from "./Month";

export const Calendar = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const months = getMonths(currentMonth, currentYear);

  const toggleType = (type) => {
    setSelectedTypes((prevSelected) => {
      if (prevSelected.includes(type)) {
        return prevSelected.filter((selectedType) => selectedType !== type);
      } else {
        return [...prevSelected, type];
      }
    });
  };

  const filteredEvents =
    selectedTypes.length === 0 ? events : events.filter((event) => selectedTypes.includes(event.type));

  return (
    <div className="calendar_section">
      <h2 className="calendar_title">Calendar</h2>
      <div className="events_wrapper">
        {typeEvents.map((type, index) => (
          <p
            key={index}
            className={`event ${selectedTypes.includes(type.slug) ? "checked" : ""} ${type.slug}`}
            onClick={() => toggleType(type.slug)}
          >
            {type.title}
          </p>
        ))}
      </div>
      <div className="calendar_wrapper">
        {months.map((month, index) => (
          <Month key={index} month={month} events={filteredEvents} />
        ))}
      </div>
    </div>
  );
};
