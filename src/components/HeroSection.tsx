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
        <div className="flex flex-col md:flex-row items-center gap-12 pt-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Creative Branding & Print Design Specialist
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Julian D Costa
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4 font-light animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Professional Graphics Designer
            </p>
            <p className="text-primary-foreground/70 max-w-lg mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              A dedicated Graphics Designer specializing in logo design, branding, and print materials. Creating clean, impactful, and purpose-driven visual identities for organizations and youth communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Julian D Costa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-primary-foreground/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
