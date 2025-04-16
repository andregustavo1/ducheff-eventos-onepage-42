
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to open WhatsApp with a message
  const handleOpenWhatsApp = () => {
    window.open(
      "https://wa.me/5554991012380?text=Olá,%20tenho%20interesse%20em%20solicitar%20um%20orçamento%20para%20um%20evento.",
      "_blank"
    );
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 glass-header ${
        isScrolled ? "glass-header-scrolled" : ""
      }`}
    >
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <a href="#hero" className="text-ducheff-black text-2xl font-playfair font-bold">
          Ducheff
          <span className="text-ducheff-silver font-normal"> Gastronomia</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-ducheff-black hover:text-ducheff-silver transition-colors duration-300"
          >
            Início
          </a>
          <a
            href="#sobre"
            className="text-ducheff-black hover:text-ducheff-silver transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-ducheff-black hover:text-ducheff-silver transition-colors duration-300"
          >
            Serviços
          </a>
          <a
            href="#clientes"
            className="text-ducheff-black hover:text-ducheff-silver transition-colors duration-300"
          >
            Clientes
          </a>
          <a
            href="#contato"
            className="text-ducheff-black hover:text-ducheff-silver transition-colors duration-300"
          >
            Contato
          </a>
          <button 
            onClick={handleOpenWhatsApp}
            className="button-cta flex items-center gap-2"
          >
            Solicitar Orçamento
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={handleOpenWhatsApp}
            className="button-cta text-sm"
          >
            Solicitar Orçamento
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
