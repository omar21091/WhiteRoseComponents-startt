import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  phone: z.string().trim().max(20, "Phone number too long").optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

type FormData = { name: string; phone: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

const hours = [
  { day: "Monday", time: "9am – 5pm" },
  { day: "Tuesday", time: "9am – 5pm" },
  { day: "Wednesday", time: "9am – 5pm" },
  { day: "Thursday", time: "9am – 5pm" },
  { day: "Friday", time: "9am – 5pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactSection() {
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
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
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "" });
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
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-body text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Find Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Visit us in Batley, call ahead, or drop us a message. We're here to help Mon–Fri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground text-lg mb-1">Address</h4>
                <p className="font-body text-muted-foreground">
                  231 Bradford Rd<br />
                  Batley, WF17 6JL<br />
                  West Yorkshire, England
                </p>
                <a
                  href="https://maps.google.com/?q=231+Bradford+Rd,+Batley+WF17+6JL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary font-body text-sm font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground text-lg mb-1">Phone</h4>
                <a href="tel:01924650833" className="font-body text-muted-foreground text-lg hover:text-primary transition-colors">
                  01924 650833
                </a>
                <a href="tel:07738960512" className="font-body text-muted-foreground text-lg hover:text-primary transition-colors block mt-2">
                  07738 960512
                </a>
                <p className="font-body text-xs text-muted-foreground mt-2">Available during opening hours</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground text-lg mb-1">Email</h4>
                <a href="mailto:info@whiterosecomponents.co.uk" className="font-body text-muted-foreground text-lg hover:text-primary transition-colors">
                  info@whiterosecomponents.co.uk
                </a>
                <p className="font-body text-xs text-muted-foreground mt-1">We'll respond within 24 hours</p>
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground text-lg self-center">Opening Hours</h4>
              </div>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className={`flex justify-between items-center py-1.5 border-b border-border last:border-0 ${h.day === today ? "text-primary font-semibold" : ""}`}
                  >
                    <span className="font-body text-sm">{h.day}</span>
                    <span className={`font-body text-sm ${h.time === "Closed" ? "text-destructive" : "text-foreground"}`}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map + enquiry */}
          <div className="flex flex-col gap-5">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-border h-60 sm:h-80 md:h-96">
              <iframe
                title="White Rose Components Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2359.5!2d-1.634!3d53.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be12b00000001%3A0x1!2s231+Bradford+Rd%2C+Batley+WF17+6JL!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Enquiry form */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border flex-1">
              <h4 className="font-display font-bold text-foreground text-xl mb-5">Send an Enquiry</h4>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h5 className="font-display font-bold text-foreground text-xl">Thank you!</h5>
                  <p className="font-body text-muted-foreground text-sm max-w-xs">
                    We've received your enquiry and will be in touch shortly during business hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit} noValidate>
                  {submitError && (
                    <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-destructive font-body text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        maxLength={100}
                        className={`w-full rounded-xl border bg-background px-4 py-3.5 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${errors.name ? "border-destructive" : "border-input"}`}
                      />
                      {errors.name && <p className="text-destructive font-body text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        maxLength={20}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3.5 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5 block">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      maxLength={255}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${errors.email ? "border-destructive" : "border-input"}`}
                    />
                    {errors.email && <p className="text-destructive font-body text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5 block">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you?"
                      maxLength={1000}
                      className={`w-full rounded-xl border bg-background px-4 py-3.5 font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none ${errors.message ? "border-destructive" : "border-input"}`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? <p className="text-destructive font-body text-xs">{errors.message}</p> : <span />}
                      <span className="font-body text-xs text-muted-foreground">{form.message.length}/1000</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-primary-gradient text-primary-foreground font-body font-bold text-base px-6 py-4 rounded-xl shadow-primary transition-opacity mt-2 ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                  >
                    {isLoading ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
