import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CherryBlossomPetals } from "@/components/CherryBlossomPetals";
import { BlogCard } from "@/components/BlogCard";
import { getRecentPosts } from "@/data/blogPosts";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const recentPosts = getRecentPosts(6);

  return (
    <div className="min-h-screen bg-background relative">
      <CherryBlossomPetals />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Desvende Seu Caminho com o{" "}
            <span className="text-primary">Baralho Cigano</span>
          </h1>
          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Orientação espiritual e autoconhecimento através da sabedoria
            ancestral do Lenormand. Encontre clareza, propósito e direção para
            sua jornada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a
              href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 hover-scale">
                Agendar Consulta
              </Button>
            </a>
            <Link to="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 hover-scale"
              >
                Ver Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-primary text-2xl">🌸</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Últimas Publicações
              </h2>
              <span className="text-primary text-2xl">🌸</span>
            </div>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Explore conhecimentos ancestrais, aprenda sobre as cartas e
              descubra insights para sua jornada espiritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <div key={post.slug} className="animate-fade-in-up">
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale"
              >
                Ver Todos os Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
