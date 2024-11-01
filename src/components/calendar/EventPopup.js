import React from "react";
import "./calendar.css";
import { typeEvents } from "../../constants";
import { formatDate } from "../../utils";
import PopupWrapper from "./PopupWrapper";

export const EventPopup = ({ events, onClose, position }) => {
  return (
    <PopupWrapper onClose={onClose} style={{ top: position.top, left: position.left }}>
      <div className="event_popup_content" onClick={(e) => e.stopPropagation()}>
        <h3 className="event_popup_title">Events</h3>
        <div className="events_list">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div className="event_item" key={index}>
                <h4 className="event_item_title">{event.title}</h4>
                <p className="event_item_description">{event.description}</p>
                <p className="event_item_location">{event.location}</p>
                <div className="event_type_date">
                  <p className={`date ${event.type}`}>{formatDate(event.date)}</p>
                  <p className={`event ${event.type}`}>
                    {typeEvents.filter((ev) => ev.slug === event.type)[0].title}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="noevents">No events for this day.</p>
          )}
        </div>
        <div className="button_wrapper">
          <button className="add_event">Add event</button>
        </div>
      </div>
    </PopupWrapper>
  );
};
