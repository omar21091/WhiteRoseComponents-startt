import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}
