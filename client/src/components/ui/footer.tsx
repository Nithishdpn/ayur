import { Leaf, Facebook, Instagram, Youtube } from "lucide-react";
import { clinicInfo } from "@/data/clinic-data";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="ayurveda-forest-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="text-2xl mr-3" />
              <span className="text-xl font-bold">Aarogyam Ayurveda</span>
            </div>
            <p className="text-gray-300 mb-4">
              Authentic Ayurvedic treatments with traditional healing methods for complete wellness.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-xl hover:text-[var(--ayurveda-mint)] cursor-pointer transition-colors" />
              <Instagram className="text-xl hover:text-[var(--ayurveda-mint)] cursor-pointer transition-colors" />
              <Youtube className="text-xl hover:text-[var(--ayurveda-mint)] cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#panchakarma')}
              >
                Panchakarma
              </li>
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#services')}
              >
                Nadi Pariksha
              </li>
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#services')}
              >
                Consultation
              </li>
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#services')}
              >
                Home Visits
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Treatments</h4>
            <ul className="space-y-2 text-gray-300">
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#treatments')}
              >
                Shirodhara
              </li>
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#treatments')}
              >
                Massage Therapy
              </li>
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#treatments')}
              >
                Steam Therapy
              </li>
              <li 
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => scrollToSection('#treatments')}
              >
                Herbal Medicine
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                {clinicInfo.contact}
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕐</span>
                10AM-1PM, 5:30PM-8:30PM
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                {clinicInfo.email}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Aarogyam Ayurveda & Panchakarma Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
