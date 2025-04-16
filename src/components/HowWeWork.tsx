
import { useEffect, useRef } from "react";

const HowWeWork = () => {
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

  const steps = [
    {
      title: "Briefing Inicial",
      description: "Conhecemos suas necessidades e expectativas",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
      )
    },
    {
      title: "Proposta Personalizada",
      description: "Desenvolvemos um projeto exclusivo para seu evento",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
      )
    },
    {
      title: "Planejamento",
      description: "Organizamos cada detalhe com antecedência",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
      )
    },
    {
      title: "Execução",
      description: "Nossa equipe realiza o evento com precisão e excelência",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
      )
    },
    {
      title: "Pós-evento",
      description: "Garantimos que tudo seja finalizado com a mesma qualidade",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.95 0l1.14-1.14a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.95L12 17"></path></svg>
      )
    }
  ];

  return (
    <section id="processo" className="section-container bg-ducheff-gray-light" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Como Funcionamos</h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative mt-20 animate-on-scroll">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-ducheff-silver -translate-y-1/2"></div>
          
          {/* Timeline Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center relative"
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                {/* Icon */}
                <div className="bg-ducheff-black text-white w-16 h-16 rounded-full flex items-center justify-center z-10 mb-6">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="text-center max-w-[200px]">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-ducheff-gray-dark">{step.description}</p>
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-10 text-ducheff-silver font-bold text-3xl opacity-30">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden relative animate-on-scroll">
          {/* Vertical Line */}
          <div className="absolute top-0 left-8 w-0.5 h-full bg-ducheff-silver"></div>
          
          {/* Timeline Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 relative pl-16 animate-on-scroll"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="absolute left-0 top-0 bg-ducheff-black text-white w-16 h-16 rounded-full flex items-center justify-center z-10">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-ducheff-gray-dark">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
