import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Ateliê — Atelier" },
      { name: "description", content: "Proposta pedagógica do ateliê de Projetos de Arquitetura e apresentação do professor." },
      { property: "og:title", content: "Sobre o Ateliê — Atelier" },
      { property: "og:description", content: "Proposta pedagógica e apresentação do professor." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Apresentação</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          O ateliê como <span className="italic text-primary">laboratório</span> do pensar.
        </h1>

        <div className="mt-16 grid md:grid-cols-[1fr_2fr] gap-12">
          <aside className="space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Disciplina</p>
              <p className="text-foreground">Projetos de Arquitetura IV</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Carga horária</p>
              <p className="text-foreground">120h · 8 créditos</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Professor</p>
              <p className="text-foreground">Arq. Helena Marques</p>
              <p className="text-muted-foreground text-xs mt-1">Doutora em Urbanismo (FAU-USP)</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Encontros</p>
              <p className="text-foreground">Ter & Qui · 14h–18h</p>
            </div>
          </aside>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              O ateliê é o lugar onde se aprende a projetar projetando. Mais do que
              transmitir técnicas, propomos uma prática reflexiva: cada exercício é uma
              investigação sobre o lugar, o programa e a matéria.
            </p>
            <p>
              Durante o semestre, os alunos desenvolvem um projeto único — do diagnóstico
              urbano ao detalhamento construtivo — em diálogo contínuo com o professor e
              colegas. A discussão coletiva é parte essencial do método.
            </p>
            <p className="text-foreground font-serif italic text-2xl border-l-2 border-primary pl-6">
              "Desenhar é antes de tudo pensar com as mãos."
            </p>
            <p>
              Esperamos de cada aluno disponibilidade para o erro produtivo, escuta atenta
              e o desejo sincero de transformar o espaço habitado em algo melhor.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}