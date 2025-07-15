import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import PanchakarmaTreatments from "@/components/sections/panchakarma-section";
import TreatmentsSection from "@/components/sections/treatments-section";
import DoctorSection from "@/components/sections/doctor-section";
import ClinicInfoSection from "@/components/sections/clinic-info-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  useEffect(() => {
    // Scroll to top when home page loads
    window.scrollTo(0, 0);
    
    document.title = "Aarogyam Ayurveda & Panchakarma Clinic - Authentic Ayurvedic Treatments";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic Ayurvedic treatments and Panchakarma procedures at Aarogyam Ayurveda Clinic. Dr. Asmita offers 8+ years of expertise in traditional healing methods. Book your consultation today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience authentic Ayurvedic treatments and Panchakarma procedures at Aarogyam Ayurveda Clinic. Dr. Asmita offers 8+ years of expertise in traditional healing methods. Book your consultation today.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.property = 'og:title';
    ogTitle.content = 'Aarogyam Ayurveda & Panchakarma Clinic - Authentic Ayurvedic Treatments';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.property = 'og:description';
    ogDescription.content = 'Experience traditional Panchakarma treatments and personalized Ayurvedic care with Dr. Asmita\'s 8+ years of expertise.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.property = 'og:type';
    ogType.content = 'website';
    document.head.appendChild(ogType);
  }, []);

  return (
    <div className="min-h-screen ayurveda-bg-primary">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PanchakarmaTreatments />
        <TreatmentsSection />
        <DoctorSection />
        <ClinicInfoSection />
      </main>
      <Footer />
    </div>
  );
}
