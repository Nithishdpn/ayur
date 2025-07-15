import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Users, CalendarCheck } from "lucide-react";
import { doctorInfo } from "@/data/clinic-data";

export default function DoctorSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctor" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold ayurveda-forest mb-6 font-serif">Meet {doctorInfo.name}</h2>
            <p className="text-xl text-gray-700 mb-8">
              Experienced {doctorInfo.title} with {doctorInfo.experience} of dedicated service in traditional healing
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <GraduationCap className="ayurveda-forest text-xl mr-4 mt-1" />
                <div>
                  <h3 className="font-bold ayurveda-forest mb-2">Qualifications</h3>
                  <p className="text-gray-700">{doctorInfo.qualifications}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="ayurveda-forest text-xl mr-4 mt-1" />
                <div>
                  <h3 className="font-bold ayurveda-forest mb-2">Experience</h3>
                  <p className="text-gray-700">{doctorInfo.experience} of clinical practice in Ayurvedic medicine and therapeutic treatments</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Heart className="ayurveda-forest text-xl mr-4 mt-1" />
                <div>
                  <h3 className="font-bold ayurveda-forest mb-2">Specialization</h3>
                  <p className="text-gray-700">{doctorInfo.specializations.join(', ')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="ayurveda-forest text-xl mr-4 mt-1" />
                <div>
                  <h3 className="font-bold ayurveda-forest mb-2">Patient Care</h3>
                  <p className="text-gray-700">{doctorInfo.approach}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                className="ayurveda-forest-bg text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
                onClick={scrollToContact}
              >
                <CalendarCheck className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={doctorInfo.image} 
              alt={`${doctorInfo.name} - Ayurvedic Practitioner`}
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Certification badge */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
              <Award className="ayurveda-forest text-xl" />
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="font-bold ayurveda-forest text-lg">{doctorInfo.experience}</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
