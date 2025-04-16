
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleOpenWhatsApp = () => {
    window.open(
      "https://wa.me/5554991012380?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20evento.",
      "_blank"
    );
  };

  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('/img/3.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 animate-on-scroll">
          Pronto para Criar um Evento Memorável?
        </h2>
        
        <p className="text-lg md:text-xl text-ducheff-silver mb-10 max-w-3xl mx-auto animate-on-scroll" style={{ animationDelay: "200ms" }}>
          Entre em contato e vamos planejar juntos sua próxima experiência
        </p>
        
        <button
          onClick={handleOpenWhatsApp}
          className="bg-white text-ducheff-black py-4 px-8 rounded-md font-semibold hover:bg-ducheff-silver transition-colors duration-300 flex items-center gap-2 mx-auto animate-on-scroll"
          style={{ animationDelay: "400ms" }}
        >
          Solicitar Orçamento
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
