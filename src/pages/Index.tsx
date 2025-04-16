
import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import Differentials from "../components/Differentials";
import HowWeWork from "../components/HowWeWork";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    // Configure o Intersection Observer para detectar quando os elementos entram na viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Somente adicione a classe de animação quando o elemento estiver visível
          if (entry.isIntersecting) {
            // Adiciona a classe de animação e não remove a observação
            // para que o elemento permaneça visível
            entry.target.classList.add("animate-fade-in");
            // Garantimos que o elemento não perde a visibilidade removendo o observer
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Aciona quando pelo menos 20% do elemento está visível
    );

    // Observe todos os elementos com a classe animate-on-scroll
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Limpar o observer quando o componente for desmontado
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <Differentials />
      <HowWeWork />
      <ClientsSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
