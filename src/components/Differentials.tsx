
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Differentials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const differentials = [
    {
      title: "Lounge Exclusivo",
      description: "Espaço reservado para recepções de até 50 convidados, ideal para grupos seletos",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Especialistas em Agronegócio",
      description: "Experiência em feiras e eventos voltados ao setor rural",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2016&auto=format&fit=crop"
    },
    {
      title: "Expertise Corporativa",
      description: "Soluções customizadas para eventos empresariais de todos os portes",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Valores Competitivos",
      description: "Orçamentos transparentes e coerentes com o mercado",
      image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=2070&auto=format&fit=crop"
    }
  ];
  
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === differentials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? differentials.length - 1 : prev - 1));
  };

  return (
    <section id="diferenciais" className="section-container" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Nossos Diferenciais</h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex gap-8">
          {differentials.map((diff, index) => (
            <div 
              key={index} 
              className="flex-1 bg-white rounded-lg overflow-hidden shadow-md animate-on-scroll card-hover"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={diff.image} 
                  alt={diff.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                <p className="text-ducheff-gray-dark">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden relative animate-on-scroll">
          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="h-64 overflow-hidden">
              <img 
                src={differentials[currentSlide].image} 
                alt={differentials[currentSlide].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-3">{differentials[currentSlide].title}</h3>
              <p className="text-ducheff-gray-dark">{differentials[currentSlide].description}</p>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={prevSlide}
              className="bg-ducheff-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-ducheff-silver transition-colors duration-300"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {differentials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === index ? "bg-ducheff-black" : "bg-ducheff-silver"
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-ducheff-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-ducheff-silver transition-colors duration-300"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
