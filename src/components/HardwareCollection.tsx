import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";
import { products, categories } from "@/data/products";
import { useState } from "react";

export default function HardwareCollection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="hardware" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Hardware & Fixings
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Bed & Sofa Components
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Sourced directly from trusted manufacturers — all held in stock at our Batley warehouse. Click any product to view full details and enquire.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filtered.map((item, i) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {/* Image */}
              <div className="relative bg-secondary/30 aspect-square overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                />
                {item.tag && (
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground font-body text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="font-body text-[10px] text-muted-foreground mb-1 flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {item.sku}
                </p>
                <h3 className="font-display text-sm font-bold text-foreground leading-tight mb-1">{item.title}</h3>
                <p className="font-body text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{item.shortDesc}</p>
                <div className="mt-2 flex items-center gap-1 text-primary font-body text-[11px] font-semibold group-hover:gap-2 transition-all">
                  View & Enquire <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-body text-sm text-muted-foreground mt-10">
          Don't see what you need?{" "}
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Contact us
          </a>{" "}
          — we stock over 1,500 products and can source to order.
        </p>
      </div>
    </section>
  );
}
