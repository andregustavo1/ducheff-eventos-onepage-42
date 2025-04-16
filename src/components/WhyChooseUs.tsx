
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
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

  const cards = [
    {
      title: "Flexibilidade e Mobilidade",
      description: "Serviço itinerante com cozinha móvel para qualquer localidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"></path><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"></path><circle cx="7" cy="18" r="2"></circle><path d="M15 18H9"></path><circle cx="17" cy="18" r="2"></circle></svg>
      )
    },
    {
      title: "Equipe Qualificada",
      description: "Profissionais uniformizados, bem humorados e pontuais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" x2="18" y1="17" y2="17"></line></svg>
      )
    },
    {
      title: "Experiência Completa",
      description: "Do planejamento à execução, cuidamos de todos os detalhes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
      )
    },
    {
      title: "Compromisso com a Excelência",
      description: "Entregamos exatamente o que prometemos, com profissionalismo e dedicação.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
      )
    }
  ];

  return (
    <section id="porque" className="section-container" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Por Que Nos Escolher?</h2>
          <p className="section-subtitle max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: "200ms" }}>
            Excelência em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md card-hover animate-on-scroll"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-ducheff-gray-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{card.title}</h3>
              <p className="text-ducheff-gray-dark text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
