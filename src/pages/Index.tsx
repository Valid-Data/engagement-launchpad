
import { Calendar } from "@/components/Calendar/Calendar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Globe2, Users2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl text-calendar-text font-semibold">
                EGOV-KALENDER
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-calendar-text hover:text-calendar-selected transition-colors">
                  Features
                </a>
                <a href="#about" className="text-calendar-text hover:text-calendar-selected transition-colors">
                  About
                </a>
                <a href="#contact" className="text-calendar-text hover:text-calendar-selected transition-colors">
                  Contact
                </a>
              </nav>
              <Button className="flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-calendar-text mb-4">
                Simplified Event Management
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The most intuitive calendar solution for government organizations. 
                Streamline your event planning and boost community engagement.
              </p>
            </div>

            {/* Calendar Section (Placeholder for WordPress Plugin) */}
            <div className="glass-effect p-6 rounded-2xl mb-16">
              <Calendar />
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16" id="features">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
                <p className="text-gray-600">
                  Engage with your community through easy-to-access event schedules.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Government Ready</h3>
                <p className="text-gray-600">
                  Built specifically for government organizations and their unique needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessible</h3>
                <p className="text-gray-600">
                  WCAG 2.1 compliant and optimized for all users and devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-calendar-highlight py-16" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join other government organizations already using EGOV-KALENDER
            </p>
            <Button size="lg" className="animate-fade-in">
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 EGOV-KALENDER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
