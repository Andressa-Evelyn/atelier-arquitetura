import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import heroImg from "@/assets/hero-architecture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier — Projetos de Arquitetura" },
      { name: "description", content: "Plataforma de estudos para alunos de projetos de arquitetura." },
      { property: "og:title", content: "Atelier — Projetos de Arquitetura" },
      { property: "og:description", content: "Plataforma de estudos para alunos de projetos de arquitetura." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-40" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-40">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Semestre 2026.1 · Turma A · Andressa</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] text-foreground max-w-4xl">
            Pensar o espaço,<br />
            <span className="italic text-primary">desenhar</span> a ideia.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Um ateliê digital para alunos de Projetos de Arquitetura. Cronograma, entregas,
            galeria de trabalhos e referências reunidos em um só lugar.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/cronograma"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent transition-colors"
            >
              Ver cronograma →
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-3 border border-border px-7 py-4 text-xs uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
            >
              Projetos da turma
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-3 gap-px bg-border">
        {[
          { n: "01", t: "Sobre", d: "Conheça a proposta pedagógica e o professor do ateliê.", to: "/sobre" },
          { n: "02", t: "Cronograma", d: "Fases do projeto, prazos e materiais de cada entrega.", to: "/cronograma" },
          { n: "03", t: "Recursos", d: "Bibliografia, downloads e referências de arquitetos.", to: "/recursos" },
        ].map((c) => (
          <Link
            key={c.n}
            to={c.to}
            className="group bg-background p-10 hover:bg-card transition-colors"
          >
            <span className="text-xs text-primary tracking-[0.3em]">{c.n}</span>
            <h3 className="font-serif text-3xl mt-4 group-hover:text-primary transition-colors">{c.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            <span className="block mt-8 text-xs uppercase tracking-[0.25em] text-primary">Acessar →</span>
          </Link>
        ))}
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <blockquote className="font-serif text-3xl md:text-4xl leading-snug italic text-foreground">
            "A arquitetura é o jogo sábio, correto e magnífico dos volumes reunidos sob a luz."
            <footer className="mt-6 text-sm not-italic uppercase tracking-[0.3em] text-primary">— Le Corbusier</footer>
          </blockquote>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Cada semestre é uma oportunidade de transformar uma intuição em forma construída.
              Aqui você encontra tudo o que precisa para conduzir seu projeto do conceito à entrega final.
            </p>
            <Link to="/sobre" className="inline-block text-primary text-xs uppercase tracking-[0.25em] mt-4 border-b border-primary pb-1">
              Sobre o ateliê
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
