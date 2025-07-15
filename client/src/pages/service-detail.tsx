import { useParams, Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, Phone, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { coreServices, panchakarmaProceures, otherTreatments } from "@/data/clinic-data";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  
  // Find the service in all data sources
  const service = coreServices.find(s => s.id === serviceId) ||
                 panchakarmaProceures.find(s => s.id === serviceId) ||
                 otherTreatments.find(s => s.id === serviceId);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    if (service) {
      document.title = `${service.title} - Aarogyam Ayurveda Clinic`;
      
      // Add meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      const description = `Learn about ${service.title} treatment at Aarogyam Ayurveda Clinic. ${service.description} Book consultation with Dr. Asmita.`;
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [service, serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen ayurveda-bg-primary">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold ayurveda-forest mb-4">Service Not Found</h1>
          <Link href="/">
            <Button className="ayurveda-forest-bg text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen ayurveda-bg-primary">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="ayurveda-forest border-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <div>
            <h1 className="text-4xl font-bold ayurveda-forest mb-6 font-serif">{service.title}</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{service.description}</p>
            
            {/* Benefits Section */}
            {'benefits' in service && service.benefits && (
              <Card className="ayurveda-mint-bg p-6 mb-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold ayurveda-forest mb-4">Benefits & Effects</h3>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="ayurveda-forest mr-3 h-5 w-5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Detailed Information based on service type */}
            <Card className="bg-white p-8 mb-8 border-2 border-[var(--ayurveda-forest)]/20">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold ayurveda-forest mb-4">Treatment Details</h3>
                {getServiceDetails(service)}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="ayurveda-forest-bg text-white px-8 py-3 hover:bg-green-800"
                onClick={() => window.open('tel:8884726777')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call: 8884726777
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[var(--ayurveda-forest)] ayurveda-forest px-8 py-3 hover:bg-[var(--ayurveda-forest)] hover:text-white"
                onClick={scrollToContact}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {'image' in service && service.image ? (
              <img 
                src={service.image} 
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            ) : (
              <div className="bg-gradient-to-br from-[var(--ayurveda-mint)] to-white rounded-2xl shadow-2xl p-12 text-center">
                <div className="text-6xl ayurveda-forest mb-4">🌿</div>
                <h3 className="text-xl font-bold ayurveda-forest">Traditional Ayurvedic Treatment</h3>
                <p className="text-gray-600 mt-2">Authentic healing methods with natural herbs</p>
              </div>
            )}

            {/* Treatment Info Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="font-bold ayurveda-forest">Dr. Asmita</div>
                <div className="text-sm text-gray-600">Expert Practitioner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="gradient-bg p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold ayurveda-forest mb-4">What to Expect</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Personalized consultation with Dr. Asmita</p>
                <p>• Assessment of your unique constitution (Prakriti)</p>
                <p>• Customized treatment plan based on your needs</p>
                <p>• Follow-up sessions to monitor progress</p>
                <p>• Dietary and lifestyle recommendations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white p-8 border-2 border-[var(--ayurveda-forest)]/20">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold ayurveda-forest mb-4">Clinic Timings</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Morning:</span>
                  <span>10:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Evening:</span>
                  <span>5:30 PM - 8:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Days:</span>
                  <span>Daily</span>
                </div>
                <div className="mt-4 p-3 ayurveda-mint-bg rounded">
                  <p className="text-sm">📞 Call ahead to book your appointment and avoid waiting</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function getServiceDetails(service: any) {
  const serviceDetails: { [key: string]: JSX.Element } = {
    'nadi-pariksha': (
      <div className="space-y-4 text-gray-700">
        <p>Nadi Pariksha is an ancient Ayurvedic diagnostic technique that involves reading the pulse to understand your body's constitution and current health status.</p>
        <p><strong>Duration:</strong> 30-45 minutes</p>
        <p><strong>Process:</strong> Dr. Asmita will carefully examine your pulse at three different levels to assess the functioning of your doshas (Vata, Pitta, Kapha).</p>
        <p><strong>Results:</strong> You'll receive a detailed analysis of your constitution, current imbalances, and personalized recommendations for treatment and lifestyle modifications.</p>
      </div>
    ),
    'panchakarma': (
      <div className="space-y-4 text-gray-700">
        <p>Panchakarma is a comprehensive detoxification and rejuvenation program consisting of five specialized procedures designed to cleanse the body of toxins.</p>
        <p><strong>Duration:</strong> 7-21 days (depending on individual needs)</p>
        <p><strong>Includes:</strong> Vamana, Virechana, Vasti, Raktamokshana, and Nasya procedures</p>
        <p><strong>Preparation:</strong> Pre-treatment preparation (Purvakarma) and post-treatment care (Paschatkarma) are included</p>
      </div>
    ),
    'suvarnaprashana': (
      <div className="space-y-4 text-gray-700">
        <p>Suvarnaprashana is an ancient Ayurvedic practice for children, involving the administration of gold bhasma (ash) mixed with honey and ghee.</p>
        <p><strong>Age Group:</strong> Suitable for children from birth to 16 years</p>
        <p><strong>Schedule:</strong> Best administered on Pushya Nakshatra days</p>
        <p><strong>Benefits:</strong> Enhances immunity, improves intelligence, memory, and overall physical and mental development</p>
      </div>
    ),
    'consultation': (
      <div className="space-y-4 text-gray-700">
        <p>Comprehensive Ayurvedic consultation includes detailed health assessment, constitution analysis, and personalized treatment planning.</p>
        <p><strong>Duration:</strong> 60-90 minutes for initial consultation</p>
        <p><strong>Includes:</strong> Medical history review, physical examination, pulse diagnosis, and tongue examination</p>
        <p><strong>Outcome:</strong> Personalized treatment plan, dietary guidelines, and lifestyle recommendations</p>
      </div>
    ),
    'home-visits': (
      <div className="space-y-4 text-gray-700">
        <p>Special home visit services designed for senior citizens and patients with mobility limitations who cannot visit the clinic.</p>
        <p><strong>Service Area:</strong> Within city limits</p>
        <p><strong>Includes:</strong> Full consultation, basic treatments, and medicine delivery</p>
        <p><strong>Advance Booking:</strong> 24-48 hours notice required</p>
      </div>
    ),
    'vamana': (
      <div className="space-y-4 text-gray-700">
        <p>Vamana is a controlled therapeutic vomiting procedure that helps eliminate excess Kapha dosha and accumulated toxins from the upper respiratory and digestive tract.</p>
        <p><strong>Best for:</strong> Respiratory disorders, skin conditions, diabetes, and digestive issues</p>
        <p><strong>Duration:</strong> 1 day procedure with 3-7 days preparation</p>
        <p><strong>Contraindications:</strong> Pregnancy, severe heart conditions, and acute illness</p>
      </div>
    ),
    'virechana': (
      <div className="space-y-4 text-gray-700">
        <p>Virechana is a medicated purgation therapy that eliminates excess Pitta dosha and toxins from the small intestine, liver, and gallbladder.</p>
        <p><strong>Best for:</strong> Liver disorders, skin diseases, chronic fever, and digestive problems</p>
        <p><strong>Duration:</strong> 1 day procedure with 3-7 days preparation</p>
        <p><strong>Post-care:</strong> Special diet and lifestyle guidelines for 7-14 days</p>
      </div>
    ),
    'vasti': (
      <div className="space-y-4 text-gray-700">
        <p>Vasti involves medicated enemas using herbal decoctions or oils. It's considered the most important Panchakarma procedure for Vata disorders.</p>
        <p><strong>Types:</strong> Kashaya Vasti (decoction enema) and Sneha Vasti (oil enema)</p>
        <p><strong>Best for:</strong> Neurological disorders, joint problems, chronic constipation, and back pain</p>
        <p><strong>Course:</strong> Usually administered in cycles of 8, 16, or 30 days</p>
      </div>
    ),
    'raktamokshana': (
      <div className="space-y-4 text-gray-700">
        <p>Raktamokshana is bloodletting therapy used to purify blood and treat disorders caused by vitiated blood.</p>
        <p><strong>Methods:</strong> Leech therapy (Jalaukavacharana) or controlled bloodletting</p>
        <p><strong>Best for:</strong> Skin diseases, localized inflammation, high blood pressure, and certain blood disorders</p>
        <p><strong>Safety:</strong> Performed with strict sterile conditions and safety protocols</p>
      </div>
    ),
    'nasya': (
      <div className="space-y-4 text-gray-700">
        <p>Nasya involves administration of medicated oils or powders through the nasal passages to treat head and neck disorders.</p>
        <p><strong>Types:</strong> Cleansing Nasya, Nutritive Nasya, and Sedative Nasya</p>
        <p><strong>Best for:</strong> Sinus problems, headaches, hair loss, premature graying, and mental stress</p>
        <p><strong>Duration:</strong> 7-14 days depending on the condition</p>
      </div>
    ),
    'shirodhara': (
      <div className="space-y-4 text-gray-700">
        <p>Shirodhara involves continuous pouring of warm medicated oil on the forehead in a specific pattern to induce deep relaxation.</p>
        <p><strong>Duration:</strong> 45-60 minutes per session</p>
        <p><strong>Best for:</strong> Stress, insomnia, anxiety, depression, and hypertension</p>
        <p><strong>Course:</strong> 7-14 sessions for optimal results</p>
      </div>
    ),
    'jalaukavacharana': (
      <div className="space-y-4 text-gray-700">
        <p>Jalaukavacharana is leech therapy used for localized blood purification and treatment of various skin and blood-related disorders.</p>
        <p><strong>Benefits:</strong> Improves blood circulation, reduces inflammation, and promotes healing</p>
        <p><strong>Best for:</strong> Eczema, psoriasis, varicose veins, and localized infections</p>
        <p><strong>Safety:</strong> Uses medical leeches in sterile conditions</p>
      </div>
    ),
    'manya-basti': (
      <div className="space-y-4 text-gray-700">
        <p>Manya Basti is a specialized treatment for neck and cervical spine issues using warm medicated oil pooling.</p>
        <p><strong>Duration:</strong> 30-45 minutes per session</p>
        <p><strong>Best for:</strong> Cervical spondylosis, neck stiffness, and chronic neck pain</p>
        <p><strong>Course:</strong> 7-14 sessions for lasting relief</p>
      </div>
    ),
    'janu-basti': (
      <div className="space-y-4 text-gray-700">
        <p>Janu Basti involves creating a reservoir of warm medicated oil over the knee joint to treat knee-related problems.</p>
        <p><strong>Duration:</strong> 30-45 minutes per session</p>
        <p><strong>Best for:</strong> Knee arthritis, joint stiffness, and chronic knee pain</p>
        <p><strong>Benefits:</strong> Improves joint mobility and reduces inflammation</p>
      </div>
    ),
    'netra-basti': (
      <div className="space-y-4 text-gray-700">
        <p>Netra Basti is an eye treatment where medicated ghee is pooled over the eyes using a dough boundary.</p>
        <p><strong>Duration:</strong> 20-30 minutes per session</p>
        <p><strong>Best for:</strong> Dry eyes, eye strain, vision problems, and eye infections</p>
        <p><strong>Benefits:</strong> Nourishes eye tissues and improves vision</p>
      </div>
    ),
    'snehana': (
      <div className="space-y-4 text-gray-700">
        <p>Snehana includes various oil massage therapies for full body rejuvenation and localized treatment.</p>
        <p><strong>Types:</strong> Abhyanga (full body), localized massage, and therapeutic oil applications</p>
        <p><strong>Duration:</strong> 45-90 minutes depending on the type</p>
        <p><strong>Benefits:</strong> Improves circulation, relieves stress, and nourishes tissues</p>
      </div>
    ),
    'swedana': (
      <div className="space-y-4 text-gray-700">
        <p>Swedana is herbal steam therapy that induces therapeutic sweating to eliminate toxins and improve circulation.</p>
        <p><strong>Duration:</strong> 15-30 minutes per session</p>
        <p><strong>Best for:</strong> Arthritis, muscle stiffness, respiratory issues, and weight management</p>
        <p><strong>Benefits:</strong> Detoxification, improved flexibility, and stress relief</p>
      </div>
    )
  };

  return serviceDetails[service.id] || (
    <div className="text-gray-700">
      <p>This is a specialized Ayurvedic treatment offered at our clinic. Please contact us for detailed information about this service.</p>
    </div>
  );
}