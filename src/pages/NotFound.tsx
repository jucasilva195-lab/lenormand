import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CherryBlossomPetals } from "@/components/CherryBlossomPetals";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
      <CherryBlossomPetals />
      <div className="relative z-20 text-center px-4">
        <div className="text-8xl mb-6">🌸</div>
        <h1 className="mb-4 text-6xl font-heading font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-secondary">
          Ops! Esta página não foi encontrada
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-accent text-primary-foreground hover-scale">
            Voltar para Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
