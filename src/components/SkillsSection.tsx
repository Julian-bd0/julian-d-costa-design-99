import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, PenTool, Layers, Printer } from "lucide-react";

const skills = [
  { name: "Adobe Illustrator", icon: PenTool, description: "Vector graphics & illustration" },
  { name: "Adobe Photoshop", icon: Layers, description: "Photo editing & manipulation" },
  { name: "Branding", icon: Palette, description: "Visual identity systems" },
  { name: "Print Design", icon: Printer, description: "Brochures, banners & more" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center text-center p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <skill.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
