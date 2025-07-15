import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { panchakarmaProceures } from "@/data/clinic-data";

export default function PanchakarmaTreatments() {
  const [, setLocation] = useLocation();
  
  const handleLearnMore = (procedureId: string) => {
    setLocation(`/service/${procedureId}`);
  };

  return (
    <section id="panchakarma" className="py-20 gradient-reverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ayurveda-forest mb-4 font-serif">Panchakarma Procedures</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five specialized detoxification procedures for complete body purification and rejuvenation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panchakarmaProceures.map((procedure, index) => (
            <Card 
              key={procedure.id}
              className={`${index % 2 === 0 ? 'ayurveda-forest-bg text-white' : 'bg-white border-2 border-[var(--ayurveda-forest)]/20 shadow-lg'} p-8 rounded-xl card-hover`}
            >
              <CardContent className="p-0">
                <div className="text-center">
                  <div className={`text-4xl mb-4 ${index % 2 === 0 ? 'text-white' : 'ayurveda-forest'}`}>
                    🧘‍♀️
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${index % 2 === 0 ? 'text-white' : 'ayurveda-forest'}`}>
                    {procedure.title}
                  </h3>
                  <p className={`mb-6 ${index % 2 === 0 ? 'text-gray-200' : 'text-gray-700'}`}>
                    {procedure.description}
                  </p>
                  <img 
                    src={procedure.image} 
                    alt={`${procedure.title} treatment`}
                    className="rounded-lg w-full h-40 object-cover mb-4" 
                  />
                  <Button 
                    className={`${index % 2 === 0 ? 'bg-white text-[var(--ayurveda-forest)] hover:bg-gray-100' : 'ayurveda-forest-bg text-white hover:bg-green-800'} transition-colors`}
                    onClick={() => handleLearnMore(procedure.id)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
