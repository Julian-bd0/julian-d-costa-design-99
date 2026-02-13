import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, Layers, Share2 } from "lucide-react";

const services = [
  {
    title: "Logo Design",
    description: "Professional and memorable logo creation tailored to brand identity.",
    icon: Sparkles,
  },
  {
    title: "Branding",
    description: "Complete branding solutions including visual identity systems.",
    icon: Layers,
  },
  {
    title: "Social Media Design",
    description: "Creative and engaging designs for social media platforms.",
    icon: Share2,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Services I <span className="text-primary">Offer</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-16" />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl bg-card border border-border card-shadow hover:card-shadow-hover hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
