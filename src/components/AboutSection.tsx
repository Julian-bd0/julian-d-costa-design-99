import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profilePhoto from "@/assets/profile-photo.jpg";
import { GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-16" />

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img src={profilePhoto} alt="Julian D Costa" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Julian is a <strong className="text-primary">Graphics Designer</strong> experienced in logo design, brochures, banners, certificates, and social media design. He currently serves as a Graphics Designer at{" "}
              <strong className="text-primary">Chattogram Catholic Archdiocese</strong> (2023–Present), contributing to organizational branding and youth initiatives.
            </p>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent">
              <Briefcase className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Current Role</h4>
                <p className="text-sm text-muted-foreground">Graphics Designer at Chattogram Catholic Archdiocese</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent">
              <GraduationCap className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Education</h4>
                <p className="text-sm text-muted-foreground">Honours in Management — National University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
