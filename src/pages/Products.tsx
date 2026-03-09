import Navbar from "@/components/Navbar";
import ProductCategories from "@/components/ProductCategories";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Browse Our Range
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Our Products
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of upholstery and bedding components, organized by category.
          </p>
        </div>
      </div>

      <ProductCategories />
      <Footer />
    </div>
  );
}
