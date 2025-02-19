
interface CalendarGridProps {
  currentDate: Date;
  view: "month" | "week";
}

export const CalendarGrid = ({ currentDate, view }: CalendarGridProps) => {
  const getDaysInMonth = (date: Date) => {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const renderDayHeader = (day: string) => (
    <div
      key={day}
      className="text-sm font-medium text-calendar-text p-2 text-center border-b"
    >
      {day}
    </div>
  );

  const renderDay = (dayNumber: number, isToday: boolean = false) => (
    <div
      key={dayNumber}
      className={`min-h-[100px] p-2 border hover:bg-calendar-highlight transition-colors ${
        isToday ? "bg-calendar-highlight" : ""
      }`}
    >
      <span
        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
          isToday ? "bg-calendar-selected text-white" : ""
        }`}
      >
        {dayNumber}
      </span>
    </div>
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentDate);
  const today = new Date();

  return (
    <div className="bg-calendar-day rounded-lg shadow-sm animate-fade-in">
      <div className="grid grid-cols-7">
        {days.map((day) => renderDayHeader(day))}
      </div>
      <div className="grid grid-cols-7">
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div key={`empty-${index}`} className="min-h-[100px] p-2 border" />
        ))}
        {[...Array(daysInMonth)].map((_, index) => {
          const dayNumber = index + 1;
          const isToday =
            dayNumber === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();
          return renderDay(dayNumber, isToday);
        })}
      </div>
    </div>
  );
};
