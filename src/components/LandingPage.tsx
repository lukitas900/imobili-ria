import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, CheckCircle2, MapPin, Home, Users, Layers, Waves, Coffee, PartyPopper, Baby, Trophy, Dumbbell, ShieldCheck, Truck, Sun, UserCheck, ChevronLeft, ChevronRight, Menu, X, Maximize2 } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";

const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de receber mais informações sobre o Mood Jacarecica. Tenho interesse em conhecer as condições de lançamento e saber mais sobre a entrega prevista para Junho de 2029.");
const WHATSAPP_LINK = `https://wa.me/5582982323030?text=${WHATSAPP_MESSAGE}`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#conceito", label: "Conceito" },
    { href: "#caracteristicas", label: "Diferenciais" },
    { href: "#lazer", label: "Lazer" },
    { href: "#localizacao", label: "Localização" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`}>
              mood<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Falar com Corretor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${isScrolled || isMenuOpen ? 'bg-primary/10 text-primary' : 'bg-white/20 text-white'}`}
            >
              <MessageCircle size={20} />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-semibold text-gray-900 hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-white w-full py-4 rounded-2xl font-bold shadow-lg mt-4"
              >
                <MessageCircle size={20} />
                Falar com Corretor
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/fachadaaa.png"
          alt="Mood Jacarecica Fachada"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Lançamento Exclusivo em Jacarecica
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 tracking-tight">
            Viva o novo <br />
            <span className="text-primary-light italic font-serif">Mood</span> da sua vida.
          </h1>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-8 rounded-2xl mb-8 sm:mb-10 inline-block w-full sm:w-auto">
            <p className="text-base sm:text-xl font-light mb-2 text-gray-200">Condição especial de lançamento:</p>
            <p className="text-xl sm:text-3xl font-bold text-white">
              Parcelas a partir de <span className="text-primary-light">R$ 1.000,00</span> nos primeiros anos de financiamento.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 text-primary-light">
                <ShieldCheck size={18} />
                <span>Garantia Moura Dubeux</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Layers size={18} className="text-primary-light" />
                <span>Entrega: Junho/2029</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg font-bold hover:bg-primary-dark transition-all shadow-2xl shadow-primary/30 group"
            >
              Quero essa oportunidade!
              <MessageCircle className="ml-3 group-hover:scale-110 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Concept = () => {
  return (
    <section id="conceito" className="py-20 sm:py-32 bg-bg-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/images/mapa_aereo.jpg"
                alt="Localização Estratégica"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 sm:p-10 rounded-[2rem] text-white hidden sm:block shadow-2xl">
              <p className="text-4xl sm:text-5xl font-bold mb-1">100%</p>
              <p className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">Moderno & Sofisticado</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">O Empreendimento</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Um projeto pensado para quem valoriza o <span className="italic font-serif text-primary">essencial</span>.
            </h3>
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                O Mood Jacarecica nasce com o propósito de oferecer uma experiência de moradia contemporânea, onde o conforto e a praticidade se encontram em uma das regiões mais promissoras de Maceió.
              </p>
              <p>
                Com um design arquitetônico elegante e funcional, o projeto foi desenvolvido para proporcionar qualidade de vida e um alto potencial de valorização imobiliária.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Home size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">2 e 3 Quartos</p>
                  <p className="text-sm text-gray-500">Com opções Garden</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Layers size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">2 Torres</p>
                  <p className="text-sm text-gray-500">A e B exclusivas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Home />, title: "2 e 3 Quartos", desc: "Plantas inteligentes e funcionais" },
    { icon: <Sun />, title: "Opções com Garden", desc: "O seu quintal privativo no prédio" },
    { icon: <Layers />, title: "2 Torres Residenciais", desc: "Torre A e Torre B independentes" },
    { icon: <CheckCircle2 />, title: "19 Pavimentos Tipo", desc: "Vista privilegiada da região" },
    { icon: <Users />, title: "8 Unidades por Andar", desc: "Equilíbrio entre convívio e privacidade" },
    { icon: <Trophy />, title: "Alto Padrão", desc: "Acabamento e materiais de primeira" },
  ];

  return (
    <section id="caracteristicas" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Diferenciais</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Características do Empreendimento</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-pastel p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leisure = () => {
  const items = [
    { icon: <Waves />, label: "Piscina Adulto" },
    { icon: <Baby />, label: "Piscina Infantil" },
    { icon: <Coffee />, label: "Espaço Gourmet Piscina" },
    { icon: <UserCheck />, label: "Coworking" },
    { icon: <PartyPopper />, label: "Salão de Festas" },
    { icon: <Trophy />, label: "Brinquedoteca" },
    { icon: <Trophy />, label: "Quadra Esportiva" },
    { icon: <Coffee />, label: "Gourmet da Quadra" },
    { icon: <Dumbbell />, label: "Fitness Externo" },
    { icon: <Layers />, label: "Hall de Acesso" },
    { icon: <Truck />, label: "Área de Delivery" },
    { icon: <Sun />, label: "Terraço Descoberto" },
    { icon: <ShieldCheck />, label: "Guarita com Eclusa" },
    { icon: <Users />, label: "Acesso Pedestres" },
  ];

  return (
    <section id="lazer" className="py-20 sm:py-32 bg-bg-pastel overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Lazer & Comodidades</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-10 leading-tight">Uma experiência completa de moradia.</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="text-primary transition-transform group-hover:scale-110">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 sm:px-10 rounded-full text-lg font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
              >
                Quero saber mais
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/assets/images/piscina.jpg"
                alt="Piscina Mood"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <p className="text-primary font-bold flex items-center gap-2">
                <Waves size={20} /> Área de Lazer Premium
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("lazer");
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<null | { url: string; title: string }>(null);

  const categories = {
    lazer: [
      { url: "/assets/images/academia.png", title: "Fitness Center Moderno" },
      { url: "/assets/images/piscina.png", title: "Piscina" },
      { url: "/assets/images/acesso.png", title: "Acesso e Fachada" },
      { url: "/assets/images/fachadaaa.png", title: "Vista Geral" },
    ],
    apartamentos: [
      { url: "/assets/images/sala_65m2.png", title: "Sala de Estar Ampliada (65m²)" },
      { url: "/assets/images/quarto_65m2.jpg", title: "Suíte Master Aconchegante (65m²)" },
      { url: "/assets/images/gourmet_interno.png", title: "Espaço Gourmet Interno" },
      { url: "/assets/images/varanda_65m2.png", title: "Varanda Gourmet (65m²)" },
      { url: "/assets/images/sala_53m2.png", title: "Sala de Estar Integrada (53m²)" },
      { url: "/assets/images/varanda_53m2.png", title: "Varanda com Vista (53m²)" },
    ],
    plantas: [
      { url: "/assets/images/planta_tipo.jpg", title: "Pavimento Tipo (1º ao 19º)" },
      { url: "/assets/images/planta_terreo.jpg", title: "Pavimento Térreo (Áreas Comuns)" },
      { url: "/assets/images/planta_65m2.jpg", title: "Planta Comfort - 3 Quartos (65m²)" },
      { url: "/assets/images/planta_53m2.jpg", title: "Planta Smart - 2 Quartos (53m²)" },
    ]
  };

  // Preload all gallery images after initial load
  useEffect(() => {
    const allImages = [
      ...categories.lazer,
      ...categories.apartamentos,
      ...categories.plantas
    ];

    // Delay preloading to prioritize initial LCP
    const timer = setTimeout(() => {
      allImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.url;
        document.head.appendChild(link);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const currentImages = categories[activeTab as keyof typeof categories];
  const activeImageSafe = activeImage < currentImages.length ? activeImage : 0;
  const currentImage = currentImages[activeImageSafe];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setActiveImage((prev) => (prev + newDirection + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  useEffect(() => {
    setActiveImage(0);
    setDirection(0);
  }, [activeTab]);

  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Galeria</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Conheça cada detalhe</h3>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
            {Object.keys(categories).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveImage(0);
                  setDirection(0);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === tab
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-bg-pastel text-gray-500 hover:bg-gray-200"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[350px] sm:h-[600px] group">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${activeTab}-${activeImage}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 cursor-zoom-in"
              onClick={() => setSelectedImage(currentImage)}
            >
              <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img
                  src={currentImage.url}
                  alt={currentImage.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-8 sm:p-12 w-full flex justify-between items-end">
                    <p className="text-xl sm:text-3xl font-bold tracking-tight text-white">{currentImage.title}</p>
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden sm:block shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-4 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden sm:block shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Controls */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2 sm:hidden">
            <button onClick={(e) => { e.stopPropagation(); paginate(-1); }} className="p-2 bg-white/20 backdrop-blur-md text-white rounded-full"><ChevronLeft size={20} /></button>
            <button onClick={(e) => { e.stopPropagation(); paginate(1); }} className="p-2 bg-white/20 backdrop-blur-md text-white rounded-full"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2 sm:gap-3">
          {currentImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeImage ? 1 : -1);
                setActiveImage(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeImage === i ? 'w-10 sm:w-12 bg-primary' : 'w-2 sm:w-3 bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Expanded Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-xl sm:text-2xl font-bold">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Location = () => {
  return (
    <section id="localizacao" className="py-20 sm:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs sm:text-sm font-bold text-primary-light uppercase tracking-[0.2em] mb-4">Localização</h2>
            <h3 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight">Jacarecica: <br />O futuro de Maceió.</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Localizado em uma das regiões com maior potencial de valorização da cidade, o Mood Jacarecica oferece o equilíbrio perfeito entre a tranquilidade de estar próximo ao mar e a conveniência de fácil acesso aos principais pontos de Maceió.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 bg-primary/20 rounded-lg text-primary-light"><MapPin size={20} /></div>
                <span className="font-medium">Beira-mar na Praia de Jacarecica</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 bg-primary/20 rounded-lg text-primary-light"><MapPin size={20} /></div>
                <span className="font-medium">Acesso pela Av. Gal. Luiz de França Albuquerque</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 bg-primary/20 rounded-lg text-primary-light"><MapPin size={20} /></div>
                <span className="font-medium">Próximo ao Parque Shopping</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/assets/images/mapa_aereo2.jpg"
                alt="Localização Mood Aérea"
                className="w-full h-full object-cover scale-[1.17] origin-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-20 sm:py-32 bg-bg-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 sm:p-20 relative overflow-hidden shadow-xl border border-gray-100">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 opacity-50"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Oportunidade</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">Condições exclusivas de lançamento</h3>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Preparamos um fluxo de pagamento facilitado para que você garanta sua unidade ainda na fase de obra com a melhor valorização.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Unidade 1105 (Torre A) - 2 Quartos", value: "R$ 471.000,00" },
                  { label: "Entrada Facilitada", value: "R$ 1.316,67", highlight: true },
                  { label: "59 Mensais durante a obra", value: "R$ 1.316,67", highlight: true },
                  { label: "Financiamento Bancário", value: "R$ 392.000,00" },
                  { label: "Previsão de Entrega das Chaves", value: "Junho de 2029", highlight: true },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 text-sm sm:text-base">{item.label}</span>
                    <span className={`font-bold ${item.highlight ? 'text-primary' : 'text-gray-900'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg-pastel p-8 sm:p-12 rounded-[2.5rem] shadow-inner border border-gray-100">
              <div className="text-center mb-10">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-bold">Parcelas na Obra</p>
                <p className="text-5xl sm:text-6xl font-black text-primary tracking-tighter">R$ 1.316,67<span className="text-2xl">*</span></p>
                <p className="text-[10px] text-gray-400 mt-4">*Valor referente à unidade 1105. Consulte condições.</p>
              </div>

              <div className="space-y-4 mb-10">
                {["Aprovação de crédito facilitada", "Use seu FGTS na entrada", "Garantia de entrega Moura Dubeux"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <CheckCircle2 className="text-primary" size={18} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-primary text-white py-5 rounded-2xl text-lg font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 text-center"
              >
                Solicitar Tabela Completa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Garanta sua unidade antes da valorização do lançamento.
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
            Não perca a chance de morar ou investir no empreendimento que vai transformar Jacarecica.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-50 transition-all shadow-2xl group"
          >
            Quero essa oportunidade!
            <MessageCircle className="ml-3 group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <span className="text-3xl font-bold tracking-tighter text-gray-900">
            mood<span className="text-primary">.</span>
          </span>
          <div className="flex gap-8">
            <a href="#conceito" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Conceito</a>
            <a href="#caracteristicas" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Diferenciais</a>
            <a href="#lazer" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Lazer</a>
            <a href="#localizacao" className="text-sm font-medium text-gray-500 hover:text-primary transition-colors">Localização</a>
          </div>
        </div>
        <div className="text-center md:text-left border-t border-gray-100 pt-12">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Mood Jacarecica - Todos os direitos reservados. <br />
            Imagens meramente ilustrativas. Material preliminar sujeito a alteração. <br className="hidden sm:block" />
            Av. Gal. Luiz de França Albuquerque, Jacarecica, Maceió - AL.
          </p>
        </div>
      </div>
    </footer>
  );
};

const StickyMobileButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 left-0 right-0 z-50 px-4 transition-all duration-500 md:hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center bg-primary text-white py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 gap-3"
      >
        <MessageCircle />
        Quero essa oportunidade!
      </a>
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-900 selection:bg-primary/20 selection:text-primary-dark bg-white">
      <Navbar />
      <Hero />
      <Concept />
      <Features />
      <Leisure />
      <Gallery />
      <Location />
      <Pricing />
      <CTA />
      <Footer />
      <StickyMobileButton />
    </div>
  );
}
