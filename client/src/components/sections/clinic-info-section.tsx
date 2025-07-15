import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Hospital, 
  Pill, 
  Shield, 
  Clock, 
  Phone, 
  MapPin, 
  Mail,
  CalendarPlus,
  Map
} from "lucide-react";
import { clinicInfo } from "@/data/clinic-data";

export default function ClinicInfoSection() {
  const handleBookAppointment = () => {
    window.open('tel:8884726777');
  };

  const handleGetDirections = () => {
    // This would typically open a maps application
    console.log('Getting directions to clinic');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ayurveda-forest mb-4 font-serif">Clinic Information</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities with authentic Ayurvedic treatments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="ayurveda-mint-bg p-8 rounded-xl">
            <CardContent className="text-center p-0">
              <Hospital className="ayurveda-forest text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold ayurveda-forest mb-4">Modern Facilities</h3>
              <p className="text-gray-700">
                Fully equipped clinic with modern amenities for all Panchakarma treatments and procedures
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white p-8 rounded-xl border-2 border-[var(--ayurveda-forest)]/20 shadow-lg">
            <CardContent className="text-center p-0">
              <Pill className="ayurveda-forest text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold ayurveda-forest mb-4">Trusted Medicines</h3>
              <p className="text-gray-700">
                Authentic medicines sourced from renowned pharmacies like Nagarjuna and Baidyanath
              </p>
            </CardContent>
          </Card>
          
          <Card className="ayurveda-mint-bg p-8 rounded-xl">
            <CardContent className="text-center p-0">
              <Shield className="ayurveda-forest text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold ayurveda-forest mb-4">Safe Environment</h3>
              <p className="text-gray-700">
                Sterile and peaceful environment ensuring patient safety and comfort during treatments
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold ayurveda-forest mb-6">Visit Our Clinic</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Clock className="ayurveda-forest text-xl mr-4" />
                <div>
                  <div className="font-bold ayurveda-forest">Clinic Timings</div>
                  <div className="text-gray-700">{clinicInfo.timings.morning}</div>
                  <div className="text-gray-700">{clinicInfo.timings.evening} ({clinicInfo.timings.note})</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="ayurveda-forest text-xl mr-4" />
                <div>
                  <div className="font-bold ayurveda-forest">Contact Number</div>
                  <div className="text-gray-700">{clinicInfo.contact}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="ayurveda-forest text-xl mr-4" />
                <div>
                  <div className="font-bold ayurveda-forest">Location</div>
                  <div className="text-gray-700">{clinicInfo.name}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="ayurveda-forest text-xl mr-4" />
                <div>
                  <div className="font-bold ayurveda-forest">Email</div>
                  <div className="text-gray-700">{clinicInfo.email}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="ayurveda-forest-bg text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
                onClick={handleBookAppointment}
              >
                <CalendarPlus className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[var(--ayurveda-forest)] ayurveda-forest px-8 py-3 rounded-lg hover:bg-[var(--ayurveda-forest)] hover:text-white transition-colors"
                onClick={handleGetDirections}
              >
                <Map className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={clinicInfo.images.clinic} 
              alt="Modern Ayurvedic clinic interior"
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Operating hours badge */}
            <div className="absolute top-4 left-4 ayurveda-forest-bg text-white p-3 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="font-bold text-sm">Open Daily</div>
                <div className="text-xs">10AM-1PM, 5:30PM-8:30PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
