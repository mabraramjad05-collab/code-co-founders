const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-lg font-bold tracking-tight">
              <span className="text-gradient">Frost</span>
              <span className="text-foreground">Codex</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Your Technical Co-Founders with 0% Equity.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#why-us" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#tech-stack" className="hover:text-foreground transition-colors">Tech Stack</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} FrostCodex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
