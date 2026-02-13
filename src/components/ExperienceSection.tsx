import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Professional <span className="text-primary">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-16" />

        <div className={`max-w-2xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary shadow-lg shadow-primary/30" />

            <div className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">2023 – Present</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Graphics Designer</h3>
              <p className="text-primary font-medium mb-3">Chattogram Catholic Archdiocese</p>
              <p className="text-muted-foreground leading-relaxed">
                Working on branding materials, youth organization visuals, event banners, certificates, and promotional designs. Contributing to organizational branding and community-driven visual communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
