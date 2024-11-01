export const getMonths = (currentMonth, currentYear) => {
  const months = [];
  for (let i = 0; i < 6; i++) {
    const date = new Date(currentYear, currentMonth + i);
    months.push({
      name: date.toLocaleString("en", { month: "long" }),
      year: date.getFullYear(),
      month: date.getMonth(),
    });
  }
  return months;
};

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const getDaysInPreviousMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long" };
  const date = new Date(dateString);
  const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return `${date.toLocaleDateString("en-US", options)}, ${time}`;
};
