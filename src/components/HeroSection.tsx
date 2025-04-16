
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Function to open WhatsApp with a message
  const handleOpenWhatsApp = () => {
    window.open(
      "https://wa.me/5554991012380?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20os%20serviços%20da%20Ducheff%20Gastronomia%20e%20Eventos.",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      ref={heroRef}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/a635f3ec-9a6b-405b-a73b-014050519fe5.png')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-16 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
          Experiências Gastronômicas Memoráveis
        </h1>
        
        <p className="text-xl md:text-2xl text-ducheff-silver mb-10 max-w-3xl mx-auto">
          Do planejamento à execução perfeita de eventos de todos os portes
        </p>
        
        <button
          onClick={handleOpenWhatsApp}
          className="button-cta bg-white text-ducheff-black hover:bg-ducheff-silver flex items-center gap-2 mx-auto"
        >
          Conheça Nossos Serviços
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Scrolldown Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
