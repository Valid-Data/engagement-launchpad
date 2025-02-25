
import { Calendar } from "@/components/Calendar/Calendar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe2, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-2xl text-calendar-text font-semibold">
                EGOV-KALENDER
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/#features" className="text-calendar-text hover:text-calendar-selected transition-colors">
                  Features
                </Link>
                <Link to="/#about" className="text-calendar-text hover:text-calendar-selected transition-colors">
                  About
                </Link>
                <Link to="/#contact" className="text-calendar-text hover:text-calendar-selected transition-colors">
                  Contact
                </Link>
              </nav>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                asChild
              >
                <Link to="/">
                  Back to Home <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Calendar Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Calendar />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 EGOV-KALENDER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
