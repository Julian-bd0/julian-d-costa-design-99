import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioLogo from "@/assets/portfolio-logo.jpg";
import portfolioCertificate from "@/assets/portfolio-certificate.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioBrochure from "@/assets/portfolio-brochure.jpg";
import portfolioBanner from "@/assets/portfolio-banner.jpg";

const categories = ["All", "Logo", "Branding", "Print", "Social Media"];

const portfolioItems = [
  { title: "Church Branding Identity", category: "Branding", image: portfolioBranding },
  { title: "Youth Organization Logo", category: "Logo", image: portfolioLogo },
  { title: "Event Certificate Design", category: "Print", image: portfolioCertificate },
  { title: "Social Media Campaign", category: "Social Media", image: portfolioSocial },
  { title: "Archdiocese Brochure", category: "Print", image: portfolioBrochure },
  { title: "Community Event Banner", category: "Branding", image: portfolioBanner },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Selected <span className="text-primary">Works</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:text-primary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((item, i) => (
            <div
              key={item.title + i}
              onClick={() => setLightbox(i)}
              className={`group cursor-pointer rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-sm text-primary-foreground/80">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
            <div className="relative max-w-3xl w-full rounded-2xl overflow-hidden animate-scale-in bg-card" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors">
                <X size={20} />
              </button>
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-foreground">{filtered[lightbox].title}</h3>
                <span className="text-sm text-muted-foreground">{filtered[lightbox].category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
