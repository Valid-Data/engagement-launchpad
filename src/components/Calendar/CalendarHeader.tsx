
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  view: "month" | "week";
  onViewChange: (view: "month" | "week") => void;
}

export const CalendarHeader = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
  view,
  onViewChange,
}: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 animate-fade-in">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold text-calendar-text">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
        <Button variant="outline" size="sm" onClick={onToday}>
          Today
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrevMonth}
            className="rounded-full w-8 h-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onNextMonth}
            className="rounded-full w-8 h-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex rounded-lg overflow-hidden border">
          <Button
            variant={view === "month" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewChange("month")}
            className="rounded-none"
          >
            Month
          </Button>
          <Button
            variant={view === "week" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewChange("week")}
            className="rounded-none"
          >
            Week
          </Button>
        </div>
      </div>
    </div>
  );
};
