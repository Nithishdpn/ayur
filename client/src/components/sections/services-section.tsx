import ServiceCard from "@/components/ui/service-card";
import { coreServices } from "@/data/clinic-data";

export default function ServicesSection() {
  const handleLearnMore = (serviceId: string) => {
    // Handle service details navigation
    console.log(`Learning more about: ${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ayurveda-forest mb-4 font-serif">Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive Ayurvedic healthcare solutions tailored to your individual needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon as any}
              variant={index % 2 === 0 ? 'mint' : 'white'}
              serviceId={service.id}
              onLearnMore={() => handleLearnMore(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
