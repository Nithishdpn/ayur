import { useState } from "react";
import { Menu, X, Leaf, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { coreServices, panchakarmaProceures, otherTreatments } from "@/data/clinic-data";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const scrollToSection = (href: string) => {
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      setLocation('/');
      // Wait for page to load then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navigateToService = (serviceId: string) => {
    setLocation(`/service/${serviceId}`);
    // Scroll to top of the page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setLocation('/')}>
            <Leaf className="text-[var(--ayurveda-forest)] text-2xl mr-3" />
            <span className="text-xl font-bold ayurveda-forest">Aarogyam Ayurveda</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => setLocation('/')}
              className="ayurveda-forest hover:text-green-600 transition-colors"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="ayurveda-forest hover:text-green-600 transition-colors flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="block w-full text-left px-4 py-2 text-sm ayurveda-forest hover:bg-[var(--ayurveda-mint)] font-medium"
                    >
                      View All Services
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    {coreServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[var(--ayurveda-mint)]"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Panchakarma Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('panchakarma')}
                className="ayurveda-forest hover:text-green-600 transition-colors flex items-center"
              >
                Panchakarma
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'panchakarma' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection('#panchakarma')}
                      className="block w-full text-left px-4 py-2 text-sm ayurveda-forest hover:bg-[var(--ayurveda-mint)] font-medium"
                    >
                      View All Procedures
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    {panchakarmaProceures.map((procedure) => (
                      <button
                        key={procedure.id}
                        onClick={() => navigateToService(procedure.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[var(--ayurveda-mint)]"
                      >
                        {procedure.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Treatments Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('treatments')}
                className="ayurveda-forest hover:text-green-600 transition-colors flex items-center"
              >
                Treatments
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'treatments' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection('#treatments')}
                      className="block w-full text-left px-4 py-2 text-sm ayurveda-forest hover:bg-[var(--ayurveda-mint)] font-medium"
                    >
                      View All Treatments
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    {otherTreatments.map((treatment) => (
                      <button
                        key={treatment.id}
                        onClick={() => navigateToService(treatment.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[var(--ayurveda-mint)]"
                      >
                        {treatment.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('#doctor')}
              className="ayurveda-forest hover:text-green-600 transition-colors"
            >
              Doctor
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="ayurveda-forest hover:text-green-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="ayurveda-forest-bg text-white hover:bg-green-800"
              onClick={() => window.open('tel:8884726777')}
            >
              <Phone className="mr-2 h-4 w-4" />
              8884726777
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ayurveda-forest hover:text-green-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => setLocation('/')}
                className="block w-full text-left px-3 py-2 ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded font-medium"
              >
                Home
              </button>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full px-3 py-2 ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-services' && (
                  <div className="ml-4 mt-1 space-y-1">
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="block w-full text-left px-3 py-1 text-sm ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
                    >
                      View All Services
                    </button>
                    {coreServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="block w-full text-left px-3 py-1 text-sm text-gray-700 hover:bg-[var(--ayurveda-mint)] rounded"
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Panchakarma */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-panchakarma')}
                  className="flex items-center justify-between w-full px-3 py-2 ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
                >
                  Panchakarma
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-panchakarma' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-panchakarma' && (
                  <div className="ml-4 mt-1 space-y-1">
                    <button
                      onClick={() => scrollToSection('#panchakarma')}
                      className="block w-full text-left px-3 py-1 text-sm ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
                    >
                      View All Procedures
                    </button>
                    {panchakarmaProceures.map((procedure) => (
                      <button
                        key={procedure.id}
                        onClick={() => navigateToService(procedure.id)}
                        className="block w-full text-left px-3 py-1 text-sm text-gray-700 hover:bg-[var(--ayurveda-mint)] rounded"
                      >
                        {procedure.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Treatments */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-treatments')}
                  className="flex items-center justify-between w-full px-3 py-2 ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
                >
                  Treatments
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-treatments' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-treatments' && (
                  <div className="ml-4 mt-1 space-y-1 max-h-40 overflow-y-auto">
                    <button
                      onClick={() => scrollToSection('#treatments')}
                      className="block w-full text-left px-3 py-1 text-sm ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
                    >
                      View All Treatments
                    </button>
                    {otherTreatments.map((treatment) => (
                      <button
                        key={treatment.id}
                        onClick={() => navigateToService(treatment.id)}
                        className="block w-full text-left px-3 py-1 text-sm text-gray-700 hover:bg-[var(--ayurveda-mint)] rounded"
                      >
                        {treatment.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('#doctor')}
                className="block w-full text-left px-3 py-2 ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
              >
                Doctor
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-3 py-2 ayurveda-forest hover:bg-[var(--ayurveda-mint)] rounded"
              >
                Contact
              </button>

              <div className="pt-2">
                <Button 
                  className="w-full ayurveda-forest-bg text-white hover:bg-green-800"
                  onClick={() => window.open('tel:8884726777')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  8884726777
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </nav>
  );
}
