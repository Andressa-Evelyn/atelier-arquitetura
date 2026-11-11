import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/cronograma")({
  head: () => ({
    meta: [
      { title: "Cronograma e Entregas — Atelier" },
      { name: "description", content: "Fases, prazos e materiais de cada entrega do semestre." },
      { property: "og:title", content: "Cronograma e Entregas — Atelier" },
      { property: "og:description", content: "Fases, prazos e materiais de cada entrega." },
    ],
  }),
  component: CronogramaPage,
});

const fases = [
  {
    n: "Fase 01",
    titulo: "Leitura do território",
    data: "12 Fev – 05 Mar",
    entrega: "Caderno de análise urbana",
    items: ["Mapas em escala 1:2000", "Diagnóstico fotográfico", "Texto crítico (3.000 palavras)"],
  },
  {
    n: "Fase 02",
    titulo: "Partido e conceito",
    data: "08 Mar – 02 Abr",
    entrega: "Estudo preliminar",
    items: ["Croquis conceituais", "Maquete de estudo (1:500)", "Memorial descritivo"],
  },
  {
    n: "Fase 03",
    titulo: "Anteprojeto",
    data: "05 Abr – 21 Mai",
    entrega: "Pranchas técnicas",
    items: ["Plantas, cortes e elevações 1:200", "Implantação 1:500", "Perspectivas internas"],
  },
  {
    n: "Fase 04",
    titulo: "Detalhamento e entrega final",
    data: "24 Mai – 28 Jun",
    entrega: "Projeto executivo",
    items: ["Pranchas 1:50 e detalhes 1:20", "Maquete final 1:200", "Apresentação pública 15 min"],
  },
];

function CronogramaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Calendário 2026.1</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Quatro fases, um <span className="italic text-primary">projeto</span>.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
          O semestre é organizado em quatro fases sequenciais. Cada uma culmina em uma
          entrega avaliada coletivamente.
        </p>

        <div className="mt-20 space-y-px bg-border">
          {fases.map((f) => (
            <article key={f.n} className="bg-background grid md:grid-cols-[180px_1fr_1fr] gap-8 p-10 hover:bg-card transition-colors">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{f.n}</p>
                <p className="mt-2 text-sm text-muted-foreground">{f.data}</p>
              </div>
              <div>
                <h2 className="font-serif text-3xl">{f.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">Entrega: {f.entrega}</p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {f.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-2 h-px w-3 bg-primary block shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}