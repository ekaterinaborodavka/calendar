import { daysOfWeek } from "../../constants";
import { getDaysInMonth, getDaysInPreviousMonth, getFirstDayOfMonth } from "../../utils";
import "./calendar.css";

export const Month = ({ month }) => {
  const { name, year } = month;

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
    });
  }

  return (
    <div className="month">
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
          <div className={`day ${!day.isCurrentMonth ? "prev" : "" }`} key={index}>
            {day.number}
          </div>
        ))}
      </div>
    </div>
  );
};
