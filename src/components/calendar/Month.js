import { useState } from "react";
import { daysOfWeek } from "../../constants";
import { getDaysInMonth, getDaysInPreviousMonth, getFirstDayOfMonth } from "../../utils";
import "./calendar.css";
import { EventPopup } from "./EventPopup";

export const Month = ({ month, events }) => {
  const { name, year } = month;
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const daysInMonth = getDaysInMonth(year, month.month);
  const firstDay = getFirstDayOfMonth(year, month.month);
  const days = [];
  const daysInPrevMonth = getDaysInPreviousMonth(year, month.month);

  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      number: daysInPrevMonth - i,
      isCurrentMonth: false,
    });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      number: day,
      isCurrentMonth: true,
      events: events.filter(
        (event) =>
          new Date(event.date).getFullYear() === year &&
          new Date(event.date).getMonth() === month.month &&
          new Date(event.date).getDate() === day
      ),
    });
  }

  const handleDayClick = (day, event) => {
    const dayEvents = days.find((d) => d.number === day)?.events || [];
    setSelectedDayEvents(dayEvents);
    setPopupPosition({ top: event.clientY, left: event.clientX });
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedDayEvents([]);
  };

  return (
    <div className="month">
      <div className="month_content">
        <h3 className="month_name">{name}</h3>
        <div className="days_of_week">
          {daysOfWeek.map((day, index) => (
            <div className="day_week" key={index}>
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {days.map((day, index) => (
            <div
              className={`day ${!day.isCurrentMonth ? "prev" : ""}`}
              key={index}
              onClick={(e) => handleDayClick(day.number, e)}
            >
              {day.number}
              <div className="day_indicators">
                {" "}
                {day.events &&
                  day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className={`day_indicator ${event.type}`} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupVisible && (
        <EventPopup events={selectedDayEvents} onClose={handleClosePopup} position={popupPosition} />
      )}
    </div>
  );
};
