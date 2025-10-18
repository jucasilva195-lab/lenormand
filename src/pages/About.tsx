import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CherryBlossomPetals } from "@/components/CherryBlossomPetals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutPhoto from "@/assets/sobre.jpeg";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Chamado Espiritual",
      description:
        "O ano em que o Baralho Cigano me escolheu. Guiado por sinais e pela presença constante da minha Cigana, iniciei minha jornada de estudo e devoção ao Lenormand, buscando compreender o poder simbólico por trás de cada carta.",
    },
    {
      year: "2023",
      title: "Iniciação e Primeiras Leituras",
      description:
        "Após meses de estudo intenso, comecei a realizar minhas primeiras leituras. Cada tiragem revelou mais do que respostas — revelou propósito. Descobri que minha missão era usar as cartas como canal de clareza e fé.",
    },
    {
      year: "2024",
      title: "Aprofundamento e Formação",
      description:
        "Participei de cursos e mentorias com profissionais experientes, consolidando técnicas de interpretação e práticas espirituais. Desenvolvi um método pessoal de leitura que une intuição, energia e autoconhecimento.",
    },
    {
      year: "2024",
      title: "Nascimento da Flor de Cerejeira 🌸",
      description:
        "Criei o projeto Flor de Cerejeira como expressão da minha fé e propósito. A marca nasceu para unir beleza, espiritualidade e sabedoria cigana, levando mensagens de esperança e força a quem busca respostas.",
    },
    {
      year: "2025",
      title: "Atuação Profissional e Expansão",
      description:
        "Iniciei atendimentos profissionais com foco em consultas transformadoras. Hoje, trabalho para que cada leitura seja um espelho da alma — guiando pessoas rumo à clareza, prosperidade e reconexão com o próprio destino.",
    },
  ];

  const testimonials = [
    {
      name: "Edmara Silva",
      text: "A leitura foi incrivelmente precisa e me deu clareza sobre decisões importantes. Recomendo de coração, ameei muito!",
      rating: 5,
      location: "São Paulo, SP",
    },
    {
      name: "Vitoria silva",
      text: "Profissional, empático e muito sábio. As cartas revelaram e ele consegue passar de um jeitinho que eu consegui entender tudo que imaginava sobre minha situação.",
      rating: 5,
      location: "Rio de Janeiro, RJ",
    },
    {
      name: "Ana Costa",
      text: "Melhor consulta que já tive. Senti uma conexão genuína e as orientações foram oque eu precisava para abrir meus olhos.",
      rating: 5,
      location: "Rio de janeiro, RJ",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <CherryBlossomPetals />
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Minha jornada com o Baralho Cigano e a arte da orientação espiritual
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <div className="relative animate-fade-in">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-glow border-9 border-primary/30 bg-black p-8 flex items-center justify-center">
                <img
                  src={aboutPhoto}
                  alt="Sobre mim"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-2 -right-6 text-6xl opacity-30">
                🌸
              </div>
            </div>

            {/* Text */}
            <div className="animate-fade-in-up space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Conduzido pela Força da Fé e pela Sabedoria da minha Cigana✨
              </h2>
              <p className="text-secondary leading-relaxed">
                Não leio cartas. <strong>Traduzo o que o Universo sussurra.</strong>
                Cada tiragem é um portal onde o invisível ganha voz, e a dúvida se transforma em direção.
                A energia que guia minhas leituras vem da <strong>Força ancestral da minha Cigana</strong> —
                ela é a ponte entre o plano espiritual e o despertar de quem busca respostas.
              </p>
              <p className="text-secondary leading-relaxed">
                Trabalho com o <strong>Baralho Lenormand</strong> como quem segura um espelho da alma.
                Através dele, revelo não apenas o que está por vir, mas o que sua alma precisa ouvir
                para reencontrar o próprio poder. Aqui, o espiritual e o terreno se encontram
                — e o destino se manifesta com <strong>clareza, propósito e prosperidade</strong>.
              </p>
              <p className="text-secondary leading-relaxed">
                Acredito que nada é acaso. Cada carta é uma chave,
                e cada leitura é um chamado para a <strong>ação consciente</strong>.
                Meu propósito é ser um canal de <strong>clareza, proteção e transformação</strong>,
                conduzindo você do caos à lucidez, do medo à força, da dúvida à fé.
              </p><br />
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Minha <span className="text-primary">Filosofia</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border bg-gradient-card hover-scale transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🌙</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Intuição
                </h3>
                <p className="text-secondary text-sm">
                  Confio na sabedoria ancestral das cartas combinada com intuição
                  desenvolvida através de anos de prática dedicada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card hover-scale transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">💫</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Empoderamento
                </h3>
                <p className="text-secondary text-sm">
                  Acredito que você tem o poder de criar seu próprio destino. As
                  cartas são ferramentas de autoconhecimento e orientação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card hover-scale transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🌸</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Compaixão
                </h3>
                <p className="text-secondary text-sm">
                  Cada consulta é realizada com respeito, confidencialidade e
                  profundo cuidado pela sua jornada única.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Minha <span className="text-primary">Jornada</span>
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row gap-8 items-start animate-fade-in-up ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                >
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-heading font-bold mb-3">
                    {item.year}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full shadow-glow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            <span className="text-primary">Depoimentos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border bg-gradient-card hover-scale transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4 justify-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-primary text-xl">
                        🌙
                      </span>
                    ))}
                  </div>
                  <p className="text-secondary text-center mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-lg shadow-glow">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronta para Iniciar Sua Jornada?
            </h2>
            <p className="text-secondary text-lg mb-8">
              Agende uma consulta e descubra o que as cartas têm a revelar sobre
              seu caminho. Vamos juntas desvendar os mistérios do seu destino.
            </p>
            <a
              href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg px-10 hover-scale">
                Agendar Consulta via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
