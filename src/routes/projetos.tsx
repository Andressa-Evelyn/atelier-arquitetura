import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos da Turma — Atelier" },
      { name: "description", content: "Galeria de projetos desenvolvidos pelos alunos do ateliê." },
      { property: "og:title", content: "Projetos da Turma — Atelier" },
      { property: "og:description", content: "Galeria de projetos dos alunos." },
    ],
  }),
  component: ProjetosPage,
});

const projetos = [
  { img: p1, autor: "Marina Coelho", titulo: "Casa Pátio em Olinda", tipo: "Residencial", alt: "Planta baixa em linhas douradas sobre fundo escuro" },
  { img: p2, autor: "João Vasconcelos", titulo: "Centro Cultural na Lapa", tipo: "Institucional", alt: "Maquete física de edifício institucional" },
  { img: p3, autor: "Beatriz Almeida", titulo: "Refúgio na Serra", tipo: "Habitação isolada", alt: "Perspectiva aquarelada de residência contemporânea" },
];

function ProjetosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Mostra 2026.1</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
          Trabalhos da <span className="italic text-primary">turma</span>.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
          Uma seleção dos projetos em desenvolvimento neste semestre.
        </p>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projetos.map((p) => (
            <article key={p.titulo} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-card">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">{p.tipo}</p>
                <h3 className="font-serif text-2xl mt-2 group-hover:text-primary transition-colors">{p.titulo}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.autor}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}