import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Examples from "@/components/Examples";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Examples />
      <Cases />
      <Process />
      <Pricing />
      <ContactForm />
    </div>
  );
};

export default Index;
