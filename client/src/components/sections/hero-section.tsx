import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold ayurveda-forest mb-6 font-serif">
              Authentic Ayurvedic Healing
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience traditional Panchakarma treatments and personalized Ayurvedic care at our fully equipped clinic with Dr. Asmita's 8+ years of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="ayurveda-forest-bg text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors"
                onClick={scrollToContact}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[var(--ayurveda-forest)] ayurveda-forest px-8 py-3 rounded-lg hover:bg-[var(--ayurveda-forest)] hover:text-white transition-colors"
                onClick={() => window.open('tel:8884726777')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call: 8884726777
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Ayurvedic treatment room with traditional elements and green plants"
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="ayurveda-forest text-2xl mr-3">👥</div>
                <div>
                  <div className="font-bold ayurveda-forest">8+ Years</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
