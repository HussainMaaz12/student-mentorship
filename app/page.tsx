import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyStudentsStruggle from "@/components/WhyStudentsStruggle";
import Services from "@/components/Services";
import Roadmap from "@/components/Roadmap";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import AssessmentCTA from "@/components/AssessmentCTA";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import ConsultationPopup from "@/components/ConsultationPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyStudentsStruggle />
      <Services />
      <Process />
      <WhyUs />
      <Roadmap />
      <AssessmentCTA />
      <LeadForm />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <ConsultationPopup />
    </>
  );
}
