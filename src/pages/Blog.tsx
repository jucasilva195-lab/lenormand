import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CherryBlossomPetals } from "@/components/CherryBlossomPetals";
import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Search } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Todos",
    "Primeira Consulta",
    "Significados das Cartas",
    "Tiragens",
    "Previsão Mensal",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background relative">
      <CherryBlossomPetals />
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
            Blog do <span className="text-primary">Lenormand</span>
          </h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Sabedoria ancestral, insights profundos e guias práticos para sua
            jornada espiritual
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md shadow-card py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground hover:bg-accent"
                      : "border-border text-secondary hover:bg-muted"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.slug} className="animate-fade-in-up">
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Nenhum post encontrado. Tente outra busca.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sidebar Info */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center gradient-card p-8 rounded-lg shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Newsletter Exclusiva 🌸
            </h3>
            <p className="text-secondary mb-6">
              Receba conteúdos exclusivos, previsões mensais e dicas de leitura
              diretamente no seu e-mail.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-background border-border text-foreground"
              />
              <Button className="bg-primary hover:bg-accent text-primary-foreground">
                Inscrever-se Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
