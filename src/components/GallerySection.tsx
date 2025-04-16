
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryImages = [
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/8.png",
  "/img/9.png",
  "/img/10.png",
  "/img/11.png",
  "/img/12.png",
  "/img/13.png",
  "/img/14.png",
  "/img/15.png",
  "/img/16.png",
  "/img/17.png",
  "/img/18.png",
  "/img/19.png",
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
