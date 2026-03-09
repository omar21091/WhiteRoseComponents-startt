import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Established Yorkshire Wholesaler",
  "Same-Day Dispatch Available",
  "Over 1,500 Products in Stock",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Upholstery components and fabrics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Decorative rose motif */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-16 md:pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-foreground rounded-full px-4 py-1.5 mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-xs font-semibold tracking-wider uppercase">
              Yorkshire's Leading Wholesaler
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground leading-[1.05] mb-6 animate-fadeInUp">
            Premium Bedding &{" "}
            <span className="text-gradient bg-gradient-to-r from-primary-light to-gold bg-clip-text text-transparent">
              Upholstery
            </span>{" "}
            Components
          </h1>

          <p className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed animate-fadeInUp delay-100">
            White Rose Components Ltd — your trusted trade supplier for fabrics, feet, castors, tools and more. 
            Based in Batley, serving the UK since our founding.
          </p>

          {/* Highlights */}
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 animate-fadeInUp delay-200">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-4 h-4 text-primary-light flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm sm:text-base font-medium">{h}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-300">
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary-gradient text-primary-foreground font-body font-bold px-8 py-4 rounded-full shadow-primary hover:opacity-90 hover:scale-105 transition-all duration-200 min-h-[48px]"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all duration-200 min-h-[48px]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="hsl(40 30% 97%)" />
        </svg>
      </div>
    </section>
  );
}
