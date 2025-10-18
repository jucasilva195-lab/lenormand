import { Link } from "react-router-dom";
import { Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t-2 border-primary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌸</span>
              <span className="font-heading text-xl font-semibold text-primary">
                Lenormand
              </span>
            </div>
            <p className="text-secondary text-sm">
              Desvende seu caminho com sabedoria ancestral do Baralho Cigano
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading text-foreground font-semibold mb-3">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-secondary text-sm hover:text-primary transition-smooth"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-secondary text-sm hover:text-primary transition-smooth"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-secondary text-sm hover:text-primary transition-smooth"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Posts Recentes */}
          <div>
            <h4 className="font-heading text-foreground font-semibold mb-3">
              Posts Recentes
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog/guia-iniciantes"
                  className="text-secondary text-sm hover:text-primary transition-smooth line-clamp-2"
                >
                  Entendendo o Baralho Lenormand
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/carta-trevo"
                  className="text-secondary text-sm hover:text-primary transition-smooth line-clamp-2"
                >
                  A Carta do Trevo
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/tiragem-3x3"
                  className="text-secondary text-sm hover:text-primary transition-smooth line-clamp-2"
                >
                  A Tiragem 3x3
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-heading text-foreground font-semibold mb-3">
              Newsletter
            </h4>
            <p className="text-secondary text-sm mb-3">
              Receba conteúdos exclusivos
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="default" className="bg-primary hover:bg-accent text-primary-foreground">
                Inscrever
              </Button>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
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
                <Button size="sm" variant="default" className="bg-primary hover:bg-accent text-primary-foreground">
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm text-center md:text-left">
            © {new Date().getFullYear()} Baralho Cigano Lenormand. Todos os
            direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-accent text-primary-foreground rounded-full p-2 hover-scale transition-smooth"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
