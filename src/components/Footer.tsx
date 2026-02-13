const Footer = () => (
  <footer className="py-8 bg-foreground">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-background/60">
        © {new Date().getFullYear()} Julian D Costa. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
