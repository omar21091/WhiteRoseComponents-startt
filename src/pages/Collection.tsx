import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Tag } from "lucide-react";
import { products, collections } from "@/data/products";
import { useEffect } from "react";

export default function Collection() {
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const collection = collections.find((c) => c.id === collectionId);
  const productsInCollection = products.filter((p) => p.collection === collection?.name);

  useEffect(() => {
    if (!collection) {
      navigate("/");
    } else {
      window.scrollTo(0, 0);
    }
  }, [collection, navigate, collectionId]);

  if (!collection) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 md:py-20 bg-gradient-to-b from-primary/10 to-transparent border-b border-border mt-16 md:mt-0">
        <div className="container mx-auto px-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="mb-8">
            {collection.tag && (
              <span className="inline-block bg-primary text-primary-foreground font-body text-xs font-bold px-3 py-1 rounded-full mb-4">
                {collection.tag}
              </span>
            )}
            <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              {collection.name}
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl">
              {collection.description}
            </p>
          </div>

          {/* Product count */}
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="font-body text-sm text-muted-foreground">
              {productsInCollection.length} {productsInCollection.length === 1 ? "product" : "products"} in this collection
            </span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-24 mt-16 md:mt-0">
        <div className="container mx-auto px-4">
          {productsInCollection.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {productsInCollection.map((item, i) => (
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
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="font-display text-sm font-bold text-foreground leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                      {item.shortDesc}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-primary font-body text-[11px] font-semibold group-hover:gap-2 transition-all">
                      View & Enquire <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground text-lg">
                No products found in this collection yet.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Collections
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            We stock over 1,500 products and can source to order. Get in touch with our team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all hover:gap-3"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
