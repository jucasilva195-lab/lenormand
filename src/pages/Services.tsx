import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CherryBlossomPetals } from "@/components/CherryBlossomPetals";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      icon: "🔮",
      title: "Leitura Completa Lenormand",
      duration: "60 até 120 minutos | Online ou Presencial",
      price: "R$ 80",
      description:
        "Grande Tableau completo com 40 cartas. Análise profunda de todas as áreas da vida: amor, trabalho, família, saúde e espiritualidade. Ideal para momentos de grandes decisões.",
    },
    {
      icon: "🌙",
      title: "Leitura de 3 Cartas",
      duration: "20 minutos | Online",
      price: "R$ 35",
      description:
        "Tiragem rápida de Passado, Presente e Futuro. Perfeita para obter clareza sobre uma situação específica ou pergunta pontual. Objetiva e esclarecedora.",
    },
    {
      icon: "💕",
      title: "Leitura Amor & Relacionamentos",
      duration: "45 minutos | Online ou Presencial",
      price: "R$ 44",
      description:
        "Focada exclusivamente em questões amorosas e relacionamentos. Descubra os sentimentos da outra pessoa, obstáculos no relacionamento e caminhos para harmonia.",
    },
    {
      icon: "💼",
      title: "Leitura Carreira & Finanças",
      duration: "45 minutos | Online ou Presencial",
      price: "R$ 44",
      description:
        "Orientação profissional e financeira. Momentos favoráveis para mudanças, oportunidades de crescimento e conselhos práticos para prosperidade.",
    },
    {
      icon: "🌸",
      title: "Orientação Mensal",
      duration: "30 minutos | Online",
      price: "R$ 53",
      description:
        "Previsão para o mês seguinte com foco nas principais energias e oportunidades. Receba orientações para aproveitar ao máximo cada fase lunar.",
    },
    {
      icon: "✨",
      title: "Pergunta Personalizada",
      duration: "60 minutos | Online",
      price: "R$ 71",
      description:
        "Leitura focada em uma pergunta específica sua. Análise detalhada da situação com conselhos práticos e acionáveis. Atende qualquer área da vida.",
    },
  ];

  const faqs = [
    {
      question: "Como funciona a consulta online?",
      answer:
        "As consultas online são realizadas via WhatsApp ou videochamada. Você recebe fotos das cartas dispostas e explicação detalhada de cada posição. É tão efetiva quanto presencial!",
    },
    {
      question: "Preciso fazer alguma preparação antes?",
      answer:
        "Apenas venha com mente aberta e, se possível, formule sua pergunta ou área de interesse previamente. Não é necessário nenhum preparo especial.",
    },
    {
      question: "Quanto tempo leva para agendar?",
      answer:
        "Geralmente consigo agendar dentro de 2-3 dias úteis. Em períodos mais movimentados pode levar até uma semana. Entre em contato para verificar disponibilidade.",
    },
    {
      question: "As leituras são confidenciais?",
      answer:
        "Absolutamente! Tudo o que é compartilhado durante a consulta é mantido em estrita confidencialidade. Sua privacidade é sagrada.",
    },
    {
      question: "Posso gravar a consulta?",
      answer:
        "Sim! Encorajo que você grave ou faça anotações. Muitas vezes as mensagens das cartas se revelam com mais profundidade depois.",
    },
    {
      question: "O que acontece se eu precisar remarcar?",
      answer:
        "Compreendo imprevistos! Apenas avise com 24h de antecedência e reagendaremos sem problemas. Cancelamentos de última hora têm taxa de 50%.",
    },
    {
      question: "Você faz leitura para menores de idade?",
      answer:
        "Para menores de 18 anos, necessito autorização expressa de um responsável legal que deve estar presente (presencial) ou na chamada (online).",
    },
    {
      question: "Qual a diferença entre Lenormand e Tarot?",
      answer:
        "O Lenormand é mais direto e prático, com 40 cartas focadas em situações cotidianas. O Tarot tem 78 cartas e trabalha mais com arquétipos profundos. Lenormand é excelente para perguntas específicas!",
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
            <span className="text-primary">Serviços</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-secondary text-lg leading-relaxed mb-6">
            O Mapa da Clareza para Sua Jornada
            Cansado(a) de dúvidas e incertezas? Você está a um passo de acessar a clareza prática e direta que o Baralho Cigano Lenormand (Petit Lenormand de 40 Cartas) oferece.
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            🔮 O que você encontra aqui:<br />
            Clareza Imbatível: Leituras 100% personalizadas com o Lenormand, sua bússola intuitiva. A sua jornada é única, a leitura também será.<br />

            Foco Prático e Direto: O Lenormand revela os fatos, tendências e influências que moldam seu presente e futuro imediato. Ideal para timing, carreira e relacionamentos. <br />

            Seu Plano de Ação: Receba mais que previsões! Nossas consultas incluem:

            Tempo para Perguntas (esgote suas dúvidas).<br />

            Conselhos Práticos baseados na simbologia das cartas.<br />

            Ações Magnéticas para você manifestar os melhores caminhos.<br />

            Sua vida em 40 símbolos. Sua clareza em 1 consulta.<br />

            Pronto(a) para transformar incerteza em estratégia e dúvida em ação? Escolha abaixo o serviço que melhor ressoa com o momento da sua jornada!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
            Formas de <span className="text-primary">Pagamento</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Cartão
              </h3>
              <p className="text-secondary text-sm">
                Débito ou crédito em até 3x sem juros
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                PIX
              </h3>
              <p className="text-secondary text-sm">
                Pagamento instantâneo com desconto de 5%
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💵</div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Dinheiro
              </h3>
              <p className="text-secondary text-sm">
                Apenas para consultas presenciais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-heading text-lg text-foreground hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center gradient-card p-12 rounded-lg shadow-glow">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronta para Agendar?
            </h2>
            <p className="text-secondary text-lg mb-8">
              Entre em contato via WhatsApp para verificar disponibilidade e
              agendar sua consulta. Estou aqui para iluminar seu caminho! 🌸
            </p>
            <a
              href="https://wa.me/5521966350386?text=Olá,%20gostaria%20de%20saber mais%20sobre%20a%20consulta?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg px-10 hover-scale">
                Agendar via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
