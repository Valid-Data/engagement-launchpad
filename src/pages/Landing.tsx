
import { Calendar } from "@/components/Calendar/Calendar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl text-calendar-text font-semibold">
              EGOV-KALENDER
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => navigate('/calendar')}
            >
              Open Calendar <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-calendar-text">
                Modern Event Management for Government Organizations
              </h1>
              <p className="text-lg text-gray-600">
                EGOV-KALENDER is designed specifically for government organizations 
                looking to streamline their event management and improve community 
                engagement. Our solution offers an intuitive interface while 
                maintaining the highest standards of accessibility and security.
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-calendar-text">
                  Key Features
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    • Fully WCAG 2.1 compliant for maximum accessibility
                  </li>
                  <li className="flex items-start gap-2">
                    • Seamless integration with existing government websites
                  </li>
                  <li className="flex items-start gap-2">
                    • Advanced security features for sensitive data
                  </li>
                  <li className="flex items-start gap-2">
                    • Customizable views for different departments
                  </li>
                </ul>
                <Button className="mt-6 flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Column - Calendar */}
            <div className="glass-effect p-4 rounded-xl">
              <div className="transform scale-90 origin-top">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 EGOV-KALENDER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
