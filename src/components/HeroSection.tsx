import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8 pt-24">
          {/* Photo - Top Center */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Julian D Costa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-primary-foreground/10 blur-xl" />
            </div>
          </div>

          {/* Text - Centered below */}
          <div className="text-center max-w-2xl">
            <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Creative Branding & Print Design Specialist
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Julian D Costa
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4 font-light animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Professional Graphics Designer
            </p>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 leading-relaxed text-justify animate-fade-up" style={{ animationDelay: "0.35s" }}>
              A dedicated Graphics Designer specializing in logo design, branding, and print materials. Creating clean, impactful, and purpose-driven visual identities for organizations and youth communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
