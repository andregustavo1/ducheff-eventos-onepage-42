
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1519167673419-d28f67c3dbd5?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514034150297-088ba1585c5b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511173033906-9ad3cc2e21f3?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=2042&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
];

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="galeria" className="section-container bg-ducheff-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title animate-on-scroll">Nossa Galeria</h2>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="embla__slide flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                  <img 
                    src={image} 
                    alt={`Evento ${index + 1}`} 
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={scrollPrev}
              className="bg-ducheff-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-ducheff-silver transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              className="bg-ducheff-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-ducheff-silver transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
