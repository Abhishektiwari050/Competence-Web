import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
      >
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
        }`}
      >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Competence Consulting Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-primary">Competence Consulting</div>
              <div className="text-xs text-muted-foreground">E-Commerce LLP</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90">
              <a href="tel:+919257061439" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent px-2 py-3 min-h-[48px] flex items-center ${
                    location.pathname === link.path
                      ? "text-accent font-semibold bg-secondary/50 rounded"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" size="sm" className="bg-accent hover:bg-accent/90 w-full">
                <a href="tel:+919257061439" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
