
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-ducheff-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Intro */}
          <div>
            <div className="text-3xl font-playfair font-bold mb-4">
              Ducheff
              <span className="text-ducheff-silver font-normal"> Gastronomia</span>
            </div>
            <p className="text-ducheff-gray-light mb-4 text-sm">
              Soluções completas e personalizadas para eventos, desde a gastronomia refinada até o planejamento completo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-ducheff-silver transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-ducheff-silver transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-ducheff-silver transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-ducheff-silver transition-colors">Clientes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-ducheff-silver transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-silver"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>(54) 99101-2380</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-silver"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <span>ducheffgastronomia@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-silver"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Vera Cruz, Rio Grande do Sul</span>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-4">
              <button 
                onClick={() => handleSocialClick("https://www.instagram.com/ducheffgastronomiaeeventos/")}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-ducheff-gray-medium">© 2025 Ducheff Gastronomia e Eventos. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
