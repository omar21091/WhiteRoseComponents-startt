import logo from "@/assets/logo.jpg";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="White Rose Components Ltd" className="h-10 w-auto object-contain brightness-0 invert" />
              <span className="font-body text-primary-foreground/60 text-xs tracking-widest uppercase block mt-1">Batley, Yorkshire</span>
            </div>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Your trusted trade wholesale supplier for upholstery & bedding components across the UK.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-body font-bold text-primary-foreground/80 text-xs uppercase tracking-widest mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-body font-bold text-primary-foreground/80 text-xs uppercase tracking-widest mb-4">Contact</h5>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              <li>231 Bradford Rd, Batley WF17 6JL</li>
              <li>
                <a href="tel:01924650833" className="hover:text-primary transition-colors">01924 650833</a>
              </li>
              <li>Mon–Fri: 9am – 5pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} White Rose Components Ltd. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
