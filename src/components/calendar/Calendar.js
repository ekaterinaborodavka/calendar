import { typeEvents } from "../../constants";
import { getMonths } from "../../utils";
import "./calendar.css";
import { Month } from "./Month";

export const Calendar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const months = getMonths(currentMonth, currentYear);

  return (
    <div className="calendar_section">
      <h2 className="calendar_title">Calendar</h2>
      <div className="events_wrapper">
        {typeEvents.map((type, index) => (
          <p key={index} className={`event ${type.slug}`}>{type.title}</p>
        ))}
      </div>
      <div className="calendar_wrapper">
        {months.map((month, index) => (
          <Month key={index} month={month} />
        ))}
      </div>
    </div>
  );
};
