import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sectorSofa from "@/assets/sector-sofa.jpg";
import sectorBed from "@/assets/sector-bed.jpg";
import sectorUpholstery from "@/assets/sector-upholstery.jpg";
import sectorRetail from "@/assets/sector-retail.jpg";
import { CheckCircle, ArrowRight, Factory, Bed, Scissors, Store } from "lucide-react";

const sectors = [
  {
    id: "sofa",
    icon: Factory,
    title: "Sofa Manufacturers",
    tagline: "The complete supply partner for sofa production",
    image: sectorSofa,
    description:
      "White Rose Components is a proud supply partner to sofa manufacturers across the UK. We understand the fast-paced demands of sofa production lines — from frame stage through to final finishing — and we stock everything you need to keep operations running without interruption.",
    services: [
      "Extensive fabric range — chenille, velvet, faux leather & more",
      "Feet, castors and gliders in all finishes and sizes",
      "Buttoning & decorative finishing supplies",
      "Staple guns, adhesives and assembly tools",
      "Customer-driven product development & custom ordering",
      "Bulk trade pricing and flexible account terms",
    ],
    highlight: "Over 1,500 products maintained in stock — no waiting, no delays.",
    reversed: false,
  },
  {
    id: "bed",
    icon: Bed,
    title: "Bed Manufacturers",
    tagline: "Everything the bedding industry needs, all in one place",
    image: sectorBed,
    description:
      "From divan bases to headboard finishing, White Rose Components supplies bed and mattress manufacturers with a comprehensive range of high-quality components. Our close relationships with leading manufacturers mean we always carry the right products at the right price.",
    services: [
      "Spunbond & non-woven linings for divan bases",
      "Sofa and divan webbing in all widths",
      "Headboard buttons — fabric covered, tufted and decorative",
      "Personalised packaging and labelling solutions",
      "Tufting assembly components and supplies",
      "Reliable, next-day stock availability",
    ],
    highlight: "We work closely with clients to develop bespoke solutions tailored to your production.",
    reversed: true,
  },
  {
    id: "upholstery",
    icon: Scissors,
    title: "Upholsterers & Craftspeople",
    tagline: "Supporting the skilled trade, one project at a time",
    image: sectorUpholstery,
    description:
      "Independent upholsterers are the backbone of the furniture trade. Whether you're restoring an antique chair or finishing a bespoke commission, White Rose Components stocks everything the professional craftsperson needs — all at trade prices from our Batley warehouse.",
    services: [
      "Fabrics by the metre — hundreds of patterns and textures",
      "Upholstery tacks, gimp pins and decorative nails",
      "Quality foam, wadding and stuffing materials",
      "Professional hand tools and staple guns",
      "Button covering and finishing accessories",
      "Expert advice from our knowledgeable team",
    ],
    highlight: "Walk-in trade welcome Mon–Fri, 9am–5pm at our Batley showroom.",
    reversed: false,
  },
  {
    id: "retail",
    icon: Store,
    title: "Furniture Retailers",
    tagline: "Stocking what your customers demand",
    image: sectorRetail,
    description:
      "Furniture retailers trust White Rose Components for fast, reliable supply of accessories and replacement parts. Our broad catalogue and same-day dispatch means your customers are never left waiting for the components that keep their furniture looking and performing at its best.",
    services: [
      "Replacement feet, castors and gliders",
      "Fabric care and protection aerosols",
      "Custom packaging and branded solutions",
      "Rapid fulfillment on high-volume orders",
      "Dedicated trade account management",
      "Nationwide delivery across the UK",
    ],
    highlight: "Trusted by furniture retailers across Yorkshire and beyond.",
    reversed: true,
  },
];

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      
      {/* Hero banner */}
      <div className="bg-hero py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-primary-light mb-4 block">
            Who We Serve
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-black text-primary-foreground mb-5">
            Our Sectors
          </h1>
          <p className="font-body text-primary-foreground/75 text-xl max-w-2xl mx-auto leading-relaxed">
            White Rose Components proudly serves the furniture industry — from large-scale manufacturers to skilled independent craftspeople — with over 1,500 products always in stock.
          </p>
        </div>
      </div>

      {/* Sector strips */}
      <div className="py-8">
        {sectors.map((sector, i) => (
          <section
            key={sector.id}
            id={sector.id}
            className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-secondary/30"}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${sector.reversed ? "lg:flex lg:flex-row-reverse" : ""}`}>
                {/* Image side */}
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden shadow-hover">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-80 lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-border pointer-events-none" />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-primary">
                    <div className="flex items-center gap-3">
                      <sector.icon className="w-6 h-6" />
                      <span className="font-display font-bold text-lg">{sector.title.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className={sector.reversed ? "lg:pr-8" : "lg:pl-4"}>
                  <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
                    {sector.tagline}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight">
                    {sector.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-lg leading-relaxed mb-7">
                    {sector.description}
                  </p>

                  {/* Services list */}
                  <ul className="space-y-3 mb-8">
                    {sector.services.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-foreground">{s}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight callout */}
                  <div className="bg-primary/8 border-l-4 border-primary rounded-r-xl px-5 py-4 mb-8">
                    <p className="font-body text-sm font-semibold text-foreground italic">
                      "{sector.highlight}"
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground font-body font-bold px-7 py-3.5 rounded-full shadow-primary hover:opacity-90 hover:scale-105 transition-all duration-200"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-black text-primary-foreground mb-5">
            Don't See Your Sector?
          </h2>
          <p className="font-body text-primary-foreground/75 text-lg max-w-xl mx-auto mb-8">
            We supply a wide range of industries. If you're in the furniture trade and need a reliable components partner, get in touch — we'd love to work with you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground font-body font-bold px-8 py-4 rounded-full shadow-primary hover:opacity-90 transition-opacity"
          >
            Talk to Our Team <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
