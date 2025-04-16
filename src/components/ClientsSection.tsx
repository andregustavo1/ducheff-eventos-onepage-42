
import { useEffect, useRef } from "react";

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    "São João",
    "Sultech Agro",
    "Corteva",
    "Sicredi",
    "Cresol",
    "Bradesco",
    "Banco do Brasil",
    "Rede Construutil"
  ];

  return (
    <section id="clientes" className="section-container" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Grandes Nomes que Confiam em Nosso Trabalho</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-32 bg-white rounded-lg shadow-sm card-hover animate-on-scroll"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <span className="text-xl font-playfair text-ducheff-black">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
