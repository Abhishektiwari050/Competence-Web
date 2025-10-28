import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Competence Consulting Logo" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4">
              India's Trusted Alibaba Channel Partner. Helping businesses go global with expert e-commerce consulting.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Promote Local. Sell Global.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#alibaba" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Alibaba Membership
                </Link>
              </li>
              <li>
                <Link to="/services#export" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Export Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#digital" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#partner" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Delhi NCR, India<br />Pan-India Presence</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@competenceconsulting.in" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                  info@competenceconsulting.in
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Competence Consulting E-Commerce LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
