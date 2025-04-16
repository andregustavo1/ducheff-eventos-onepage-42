
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="section-container bg-ducheff-gray-light" ref={aboutRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center animate-on-scroll">Sobre a Ducheff</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left column - Image */}
          <div className="animate-on-scroll">
            <div className="h-full w-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe Ducheff em ação" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-8 animate-on-scroll">
              A Ducheff Gastronomia e Eventos é especialista na realização de experiências 
              gastronômicas inesquecíveis e na gestão completa de eventos. Com nosso 
              atendimento itinerante e cozinha móvel, levamos excelência culinária e 
              serviço impecável para qualquer localidade.
            </p>
            <p className="text-lg mb-8 animate-on-scroll" style={{ animationDelay: "200ms" }}>
              Nossa versatilidade nos permite atender desde jantares íntimos até 
              grandes eventos corporativos com mais de 5 mil convidados, sempre 
              mantendo o mesmo padrão de qualidade e atenção aos detalhes.
            </p>
            
            {/* Diferencials */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: "300ms" }}>
                <div className="w-16 h-16 bg-ducheff-black text-white rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Serviço Itinerante</h3>
                <p className="text-sm">Cozinha móvel para qualquer localidade</p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: "400ms" }}>
                <div className="w-16 h-16 bg-ducheff-black text-white rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Eventos de Qualquer Porte</h3>
                <p className="text-sm">De pequenos jantares a grandes eventos corporativos</p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: "500ms" }}>
                <div className="w-16 h-16 bg-ducheff-black text-white rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Equipe Qualificada</h3>
                <p className="text-sm">Profissionais uniformizados e bem treinados</p>
              </div>
              
              <div className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: "600ms" }}>
                <div className="w-16 h-16 bg-ducheff-black text-white rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Lounge Exclusivo</h3>
                <p className="text-sm">Espaço para até 50 convidados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
