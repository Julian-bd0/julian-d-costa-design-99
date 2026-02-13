import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const categories = ["All", "Logo", "Branding", "Print", "Social Media"];

const portfolioItems = [
  { title: "Church Branding Identity", category: "Branding", color: "from-primary to-primary-glow" },
  { title: "Youth Organization Logo", category: "Logo", color: "from-primary-glow to-primary" },
  { title: "Event Certificate Design", category: "Print", color: "from-primary to-blue-400" },
  { title: "Social Media Campaign", category: "Social Media", color: "from-blue-400 to-primary-glow" },
  { title: "Archdiocese Brochure", category: "Print", color: "from-primary-glow to-primary" },
  { title: "Community Event Banner", category: "Branding", color: "from-primary to-primary-glow" },
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
              <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center p-6`}>
                <div className="text-center text-primary-foreground">
                  <div className="w-16 h-16 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">{item.title.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="text-xs text-primary-foreground/70">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
            <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors">
                <X size={20} />
              </button>
              <div className={`aspect-[4/3] bg-gradient-to-br ${filtered[lightbox].color} flex items-center justify-center p-8`}>
                <div className="text-center text-primary-foreground">
                  <div className="w-24 h-24 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold">{filtered[lightbox].title.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{filtered[lightbox].title}</h3>
                  <span className="text-primary-foreground/70">{filtered[lightbox].category}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
