import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  Stethoscope, 
  Waves, 
  Baby, 
  UserCheck, 
  Home, 
  Bug,
  Droplet,
  Eye,
  Zap,
  HandHeart,
  Flame
} from "lucide-react";

const iconMap = {
  stethoscope: Stethoscope,
  spa: Waves,
  baby: Baby,
  'user-md': UserCheck,
  home: Home,
  bug: Bug,
  'hand-holding-water': HandHeart,
  walking: Zap,
  eye: Eye,
  hands: HandHeart,
  fire: Flame,
  droplet: Droplet
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  variant?: 'default' | 'mint' | 'white';
  size?: 'default' | 'compact';
  serviceId: string;
  onLearnMore?: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  variant = 'default',
  size = 'default',
  serviceId,
  onLearnMore 
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Waves;
  const [, setLocation] = useLocation();
  
  const cardClasses = {
    default: "bg-white border-2 border-[var(--ayurveda-forest)]/20 shadow-lg",
    mint: "ayurveda-mint-bg border-2 border-[var(--ayurveda-forest)]/10",
    white: "bg-white border-2 border-[var(--ayurveda-forest)]/20 shadow-lg"
  };

  const padding = size === 'compact' ? 'p-6' : 'p-8';

  return (
    <Card className={`${cardClasses[variant]} ${padding} rounded-xl card-hover`}>
      <CardContent className={size === 'compact' ? 'p-0' : 'pt-0'}>
        <div className="text-center">
          <IconComponent className="ayurveda-forest text-4xl mb-4 mx-auto" size={size === 'compact' ? 32 : 48} />
          <h3 className={`font-bold ayurveda-forest mb-4 ${size === 'compact' ? 'text-lg' : 'text-xl'}`}>
            {title}
          </h3>
          <p className={`text-gray-700 mb-6 ${size === 'compact' ? 'text-sm' : ''}`}>
            {description}
          </p>
          <Button 
            className="ayurveda-forest-bg text-white hover:bg-green-800 transition-colors"
            size={size === 'compact' ? 'sm' : 'default'}
            onClick={() => setLocation(`/service/${serviceId}`)}
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
