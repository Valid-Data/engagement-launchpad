
import { Calendar } from "@/components/Calendar/Calendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="text-3xl text-calendar-text font-semibold">
              EGOV-KALENDER
            </div>
          </div>
          <button className="text-calendar-text hover:text-calendar-selected transition-colors">
            Contact
          </button>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default Index;
