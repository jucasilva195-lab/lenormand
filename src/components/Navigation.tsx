import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "Sobre", path: "/sobre" },
    { label: "Serviços", path: "/servicos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover-scale">
            <span className="text-2xl">🌸</span>
            <span className="font-heading text-xl font-semibold text-primary">
              Lenormand
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-smooth hover:text-primary ${isActive(link.path) ? "text-primary" : "text-secondary"
                  } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-smooth hover:after:scale-x-100 hover:after:origin-left ${isActive(link.path) ? "after:scale-x-100" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@flordacerejeira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-smooth hover-glow"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="bg-primary hover:bg-accent text-primary-foreground">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-secondary hover:text-primary transition-smooth"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${isActive(link.path) ? "text-primary" : "text-secondary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="default" size="sm" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
