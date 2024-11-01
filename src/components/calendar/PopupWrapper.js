import React, { useEffect, useRef } from "react";
import "./calendar.css";

const PopupWrapper = ({ children, onClose, style }) => {
  const popupRef = useRef();

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="event_popup" onClick={onClose} style={style} ref={popupRef}>
      {children}
    </div>
  );
};

export default PopupWrapper;
