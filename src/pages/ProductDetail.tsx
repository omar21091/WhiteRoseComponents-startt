import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Tag, Phone, Mail, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { getProductById, products, collections } from "@/data/products";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email too long"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

type FormErrors = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || "");
  const [formState, setFormState] = useState({ name: "", company: "", email: "", phone: "", message: "", submitted: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Find the collection ID for this product's collection name
  const collectionId = product ? collections.find((c) => c.name === product.collection)?.id : null;

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary font-semibold hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  // Related products in same category
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = enquirySchema.safeParse(formState);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    setSubmitError(null);

    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/send-email' 
        : 'http://localhost:3001/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          message: `Product: ${product.title}\n\n${formState.message}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }

      setFormState({ name: "", company: "", email: "", phone: "", message: "", submitted: true });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to send your enquiry. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 font-body text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 mt-16 md:mt-0">
        {/* Back */}
        <Link
          to={collectionId ? `/collections/${collectionId}` : "/"}
          className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        {/* Product hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-secondary/30 aspect-square flex items-center justify-center shadow-hover">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-10"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-body text-xs font-bold tracking-widest uppercase text-primary">{product.category}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-3 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <span className="font-body text-sm text-muted-foreground">{product.sku}</span>
            </div>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Uses */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Typical Uses</h3>
              <div className="flex flex-wrap gap-2">
                {product.uses.map((u) => (
                  <span key={u} className="font-body text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                    {u}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:01924650833"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-body font-bold px-6 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-200 min-h-[44px]"
              >
                <Phone className="w-4 h-4" /> Call to Order
              </a>
              <a
                href="#enquire"
                className="flex items-center justify-center gap-2 bg-primary-gradient text-primary-foreground font-body font-bold px-8 py-3.5 rounded-full shadow-primary hover:opacity-90 transition-opacity min-h-[44px]"
                onClick={(e) => { e.preventDefault(); document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Enquire Online <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Enquiry form */}
        <div id="enquire" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">Get in Touch</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">Enquire About This Product</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Whether you need a sample, a bulk quote or just want to confirm stock availability — our team in Batley is ready to help you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Call us</p>
                  <a href="tel:01924650833" className="font-body font-semibold text-foreground hover:text-primary">01924 650833</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">Email us</p>
                  <a href="mailto:info@whiterosecomponents.co.uk" className="font-body font-semibold text-foreground hover:text-primary">info@whiterosecomponents.co.uk</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <CheckCircle className="w-14 h-14 text-primary mb-4" />
                <h3 className="font-display text-2xl font-black text-foreground mb-2">Enquiry Sent!</h3>
                <p className="font-body text-muted-foreground">Our team will be in touch within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {submitError && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-destructive font-body text-sm">
                    {submitError}
                  </div>
                )}
                
                <input type="hidden" value={product.title} name="product" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-semibold text-foreground block mb-1">Your Name <span className="text-primary">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      className={`w-full border rounded-xl px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition ${
                        errors.name ? "border-destructive" : "border-border"
                      }`}
                      value={formState.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="text-destructive font-body text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-foreground block mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      maxLength={100}
                      className="w-full border border-border rounded-xl px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-foreground block mb-1">Email Address <span className="text-primary">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={255}
                    className={`w-full border rounded-xl px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                    value={formState.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-destructive font-body text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-foreground block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={20}
                    className="w-full border border-border rounded-xl px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-foreground block mb-1">Message / Quantity Required <span className="text-primary">*</span></label>
                  <textarea
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    className={`w-full border rounded-xl px-4 py-2.5 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    placeholder={`I'm interested in ${product.title}...`}
                    value={formState.message}
                    onChange={handleChange}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? <p className="text-destructive font-body text-xs">{errors.message}</p> : <span />}
                    <span className="font-body text-xs text-muted-foreground">{formState.message.length}/1000</span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-primary-gradient text-primary-foreground font-body font-bold py-3 rounded-xl shadow-primary transition-opacity mt-2 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-black text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="bg-secondary/30 aspect-square overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-3">
                    <p className="font-body text-[10px] text-muted-foreground mb-0.5">{item.sku}</p>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                    <div className="mt-2 flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                      View <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
