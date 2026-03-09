import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/#about", isRoute: false },
  { label: "Products", href: "/products", isRoute: true },
  { label: "Sectors", href: "/sectors", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-auto md:h-16 px-4 py-3 md:py-0">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <img src={logo} alt="White Rose Components Ltd" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:01924650833"
            className="flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary-dark transition-colors px-3 py-2 rounded-full hover:bg-primary/10"
          >
            <Phone className="w-4 h-4" />
            01924 650833
          </a>
          <a
            href="/contact"
            className="bg-primary-gradient text-primary-foreground font-body text-sm font-bold px-6 py-2.5 rounded-full shadow-primary hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="block font-body text-base font-medium text-gray-700 hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-body text-base font-medium text-gray-700 hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="tel:01924650833"
            className="flex items-center gap-2 font-body text-base font-bold text-primary py-3 px-2 rounded-lg hover:bg-primary/5 mt-2"
          >
            <Phone className="w-4 h-4" />
            01924 650833
          </a>
        </div>
      )}
    </header>
  );
}
