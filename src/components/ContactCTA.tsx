import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Frost glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
            Ready to Build Something{" "}
            <span className="text-gradient">That Matters?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Whether you're launching your first MVP or scaling to your next
            milestone — we're the engineering team that gets you there. No
            fluff. No equity. Just results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@frostcodex.com"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all frost-glow"
            >
              <Calendar size={18} />
              Book a Discovery Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@frostcodex.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-medium text-base hover:bg-secondary transition-colors"
            >
              Hire Developers Now
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground/60">
            Response within 24 hours · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
