import { CheckCircle, Truck, Users, Shield, Zap } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our knowledgeable team in Batley has decades of experience in the furniture industry and is ready to help with any questions or technical advice.",
  },
  {
    icon: Truck,
    title: "Fast Dispatch",
    description: "Same-day dispatch on orders placed before 2pm. We maintain over 1,500 products in stock, so you won't be left waiting.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description: "Wholesale pricing on bulk orders. Whether you're a large manufacturer or independent craftsperson, we offer fair trade pricing.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All products are sourced from trusted suppliers and quality-checked before dispatch. Your reputation is our priority.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            The White Rose Difference
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're more than just a supplier — we're your partner in the furniture trade. Here's what sets us apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-border">
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-black text-primary mb-2">1,500+</p>
            <p className="font-body text-sm text-muted-foreground">Products in Stock</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-black text-primary mb-2">Same-Day</p>
            <p className="font-body text-sm text-muted-foreground">Dispatch Available</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-black text-primary mb-2">UK-Wide</p>
            <p className="font-body text-sm text-muted-foreground">Nationwide Delivery</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-black text-primary mb-2">20+</p>
            <p className="font-body text-sm text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
