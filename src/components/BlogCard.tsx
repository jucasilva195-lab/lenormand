import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const BlogCard = ({
  slug,
  title,
  excerpt,
  category,
  image,
  date,
  readTime,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="group">
      <Card className="h-full overflow-hidden border-border bg-card hover-scale hover-glow transition-smooth">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-0">
            {category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2">
            {title}
          </h3>
          <p className="text-secondary text-sm mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{date}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-smooth">
            Ler mais
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
