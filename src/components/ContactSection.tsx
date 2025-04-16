
import { ArrowRight, Mail, MapPin, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = (phoneNumber: string, message: string) => {
    window.open(
      `https://wa.me/55${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ducheffgastronomiaeeventos/", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:ducheffgastronomia@gmail.com", "_blank");
  };

  return (
    <section id="contato" className="section-container bg-ducheff-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Transforme seu evento em uma experiência inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 animate-on-scroll" style={{ animationDelay: "200ms" }}>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="text-ducheff-black">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp (Comercial/Orçamentos)</h3>
                  <p className="text-ducheff-gray-dark mb-3">(54) 99101-2380 - Tiago Icle</p>
                  <button 
                    onClick={() => handleWhatsAppClick("5499101-2380", "Olá, tenho interesse em um orçamento para um evento.")}
                    className="text-ducheff-black font-medium hover:text-ducheff-silver flex items-center gap-2"
                  >
                    Enviar mensagem
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="text-ducheff-black">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <p className="text-ducheff-gray-dark mb-3">(54) 99139-8964</p>
                  <button 
                    onClick={() => handleWhatsAppClick("5499139-8964", "Olá, estou entrando em contato a respeito dos serviços da Ducheff.")}
                    className="text-ducheff-black font-medium hover:text-ducheff-silver flex items-center gap-2"
                  >
                    Enviar mensagem
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="text-ducheff-black">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                  <p className="text-ducheff-gray-dark mb-3">ducheffgastronomia@gmail.com</p>
                  <button 
                    onClick={handleEmailClick}
                    className="text-ducheff-black font-medium hover:text-ducheff-silver flex items-center gap-2"
                  >
                    Enviar e-mail
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="text-ducheff-black">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Instagram</h3>
                  <p className="text-ducheff-gray-dark mb-3">@ducheffgastronomiaeeventos</p>
                  <button 
                    onClick={handleInstagramClick}
                    className="text-ducheff-black font-medium hover:text-ducheff-silver flex items-center gap-2"
                  >
                    Visitar perfil
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Service Areas */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="text-ducheff-black mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Localização</h3>
                  <p className="text-ducheff-gray-dark">
                    Rua Moacir da Motta Fortes 400, Vera Cruz, RS
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
              <h3 className="text-lg font-semibold mb-4">Áreas de Atendimento</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-black"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
                  <span>Rio Grande do Sul</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-black"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
                  <span>Santa Catarina</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-black"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
                  <span>Paraná</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ducheff-black"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
                  <span>Outros estados (mediante consulta)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
