import ServiceCard from "@/components/ui/service-card";
import { otherTreatments, clinicInfo } from "@/data/clinic-data";

export default function TreatmentsSection() {
  const handleLearnMore = (treatmentId: string) => {
    console.log(`Learning more about: ${treatmentId}`);
  };

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ayurveda-forest mb-4 font-serif">Other Ayurvedic Treatments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized therapeutic treatments for holistic healing and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherTreatments.map((treatment, index) => (
            <ServiceCard
              key={treatment.id}
              title={treatment.title}
              description={treatment.description}
              icon={treatment.icon as any}
              variant={index % 2 === 0 ? 'mint' : 'white'}
              size="compact"
              serviceId={treatment.id}
              onLearnMore={() => handleLearnMore(treatment.id)}
            />
          ))}
        </div>

        {/* Treatment Images Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicInfo.images.treatments.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Ayurvedic treatment ${index + 1}`}
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
