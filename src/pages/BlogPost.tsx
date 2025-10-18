import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CherryBlossomPetals } from "@/components/CherryBlossomPetals";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        <CherryBlossomPetals />
        <Navigation />
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Post não encontrado
          </h1>
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Voltar ao Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background relative">
      <CherryBlossomPetals />
      <Navigation />

      {/* Hero with Image */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          <Badge className="bg-primary text-primary-foreground border-0 mb-4">
            {post.category}
          </Badge>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de leitura</span>
            </div>
            <button className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Share2 className="w-4 h-4" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="font-heading text-4xl font-bold text-foreground mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-heading text-3xl font-semibold text-foreground mt-12 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-secondary leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="text-secondary space-y-2 mb-6 list-disc list-inside">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="text-secondary space-y-2 mb-6 list-decimal list-inside">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-primary">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-muted text-foreground px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-muted text-foreground p-4 rounded-lg overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 gradient-card rounded-lg shadow-card text-center">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Gostou do conteúdo?
            </h3>
            <p className="text-secondary mb-6">
              Agende uma consulta personalizada e descubra o que as cartas têm
              a revelar sobre seu caminho.
            </p>
            <a
              href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground hover-scale">
                Agendar Consulta
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
              Posts Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="animate-fade-in-up">
                  <BlogCard {...relatedPost} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
