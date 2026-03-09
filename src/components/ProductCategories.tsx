import { Link } from "react-router-dom";
import catFabrics from "@/assets/cat-fabrics.jpg";
import catFeet from "@/assets/cat-feet.jpg";
import catButtoning from "@/assets/cat-buttoning.jpg";
import catAerosols from "@/assets/cat-aerosols.jpg";
import catWebbing from "@/assets/cat-webbing.jpg";
import catTools from "@/assets/cat-tools.jpg";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "fabrics",
    title: "Fabrics",
    description: "Chenille, velvet, faux leather and more. Extensive range for all upholstery projects.",
    image: catFabrics,
    tag: "Most Popular",
  },
  {
    id: "feet-castors",
    title: "Feet & Castors",
    description: "Chrome, brass and black sofa feet, gliders and castors in all sizes.",
    image: catFeet,
    tag: null,
  },
  {
    id: "buttoning-finishing",
    title: "Buttoning & Finishing",
    description: "Decorative buttons, nails, gimp pins and all your trimming essentials.",
    image: catButtoning,
    tag: null,
  },
  {
    id: "aerosols",
    title: "Aerosols",
    description: "Fabric adhesives, fire retardant and upholstery care sprays.",
    image: catAerosols,
    tag: null,
  },
  {
    id: "spunbond-webbing",
    title: "Spunbond & Webbing",
    description: "Non-woven linings, sofa webbing and dust cover materials.",
    image: catWebbing,
    tag: null,
  },
  {
    id: "accessories-tools",
    title: "Accessories & Tools",
    description: "Staple guns, needles, scissors and everything the professional needs.",
    image: catTools,
    tag: null,
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Our Range
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Explore Our Collections
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything a trade professional needs — from raw materials to finishing touches — all under one roof in Batley.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/collections/${cat.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "var(--gradient-card-hover)" }} />

                {/* Tag */}
                {cat.tag && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-body text-xs font-bold px-3 py-1 rounded-full">
                    {cat.tag}
                  </div>
                )}

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{cat.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="bg-card p-5">
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                <div className="flex items-center gap-1 text-primary font-body text-sm font-semibold group-hover:gap-2 transition-all">
                  View Range
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
