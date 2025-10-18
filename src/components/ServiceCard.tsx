import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: string;
  title: string;
  duration: string;
  price: string;
  description: string;
}

export const ServiceCard = ({
  icon,
  title,
  duration,
  price,
  description,
}: ServiceCardProps) => {
  return (
    <Card className="h-full border-border bg-card hover-scale hover-glow transition-smooth">
      <CardHeader className="text-center pb-4">
        <div className="text-5xl mb-3">{icon}</div>
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{duration}</p>
      </CardHeader>
      <CardContent className="text-center">
        <div className="text-3xl font-heading font-bold text-primary mb-4">
          {price}
        </div>
        <p className="text-secondary text-sm mb-6">{description}</p>
        <a
          href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full bg-primary hover:bg-accent text-primary-foreground">
            Agendar Agora
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};
