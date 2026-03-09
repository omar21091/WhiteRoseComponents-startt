import { Award, Users, Truck, Handshake } from "lucide-react";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Product Lines" },
  { value: "1000+", label: "Trade Customers" },
  { value: "Same", label: "Day Dispatch" },
];

const values = [
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Every product we stock meets the high standards demanded by professional tradespeople across the UK.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Same-day dispatch on orders placed before noon. Nationwide delivery to keep your projects moving.",
  },
  {
    icon: Users,
    title: "Trade Specialists",
    desc: "Our knowledgeable team understands your industry. We speak your language and stock what you need.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    desc: "Serving Yorkshire's upholstery and bedding trade for over a decade. Your success is our priority.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Yorkshire's Trusted
              <br />
              <span className="text-primary">Trade Wholesaler</span>
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              White Rose Components Ltd has been the go-to wholesale supplier for upholstery and bedding professionals across the North of England for over a decade. Based on Bradford Road in Batley, we stock an extensive range of fabrics, components, tools and accessories.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              Whether you're a solo craftsperson, a small workshop or a large manufacturer, we have the products, knowledge and service to keep your business running at its best.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-black text-primary mb-1">{s.value}</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-shadow duration-300 border border-border"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
