import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos e Referências — Atelier" },
      { name: "description", content: "Bibliografia, downloads e referências para o ateliê de projetos." },
      { property: "og:title", content: "Recursos e Referências — Atelier" },
      { property: "og:description", content: "Bibliografia e referências para o ateliê." },
    ],
  }),
  component: RecursosPage,
});

const bibliografia = [
  { autor: "Peter Zumthor", titulo: "Atmosferas", ano: "2006" },
  { autor: "Juhani Pallasmaa", titulo: "Os Olhos da Pele", ano: "1996" },
  { autor: "Kenneth Frampton", titulo: "Estudos sobre Cultura Tectônica", ano: "1995" },
  { autor: "Lina Bo Bardi", titulo: "Tempos de Grossura", ano: "1994" },
  { autor: "Aldo Rossi", titulo: "A Arquitetura da Cidade", ano: "1966" },
];

const downloads = [
  { nome: "Modelo de prancha A1 (.dwg)", peso: "2.4 MB" },
  { nome: "Guia de normas ABNT — entregas", peso: "680 KB" },
  { nome: "Checklist de detalhamento", peso: "120 KB" },
  { nome: "Templates de memorial descritivo", peso: "240 KB" },
];

const arquitetos = ["Lina Bo Bardi", "Paulo Mendes da Rocha", "Álvaro Siza", "SANAA", "Tadao Ando", "Carla Juaçaba"];

function RecursosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-6">Biblioteca</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          Recursos & <span className="italic text-primary">referências</span>.
        </h1>

        <div className="mt-20 grid lg:grid-cols-3 gap-16">
          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Bibliografia essencial</h2>
            <ul className="space-y-6">
              {bibliografia.map((b) => (
                <li key={b.titulo} className="border-b border-border/60 pb-4">
                  <p className="font-serif text-xl">{b.titulo}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {b.autor} · <span className="text-primary">{b.ano}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Downloads</h2>
            <ul className="space-y-3">
              {downloads.map((d) => (
                <li key={d.nome}>
                  <a
                    href="#"
                    className="flex items-start justify-between gap-4 border border-border p-5 hover:border-primary hover:bg-card transition-colors group"
                  >
                    <span className="text-sm group-hover:text-primary">{d.nome}</span>
                    <span className="text-xs text-muted-foreground shrink-0">{d.peso}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Arquitetos para estudar</h2>
            <ul className="flex flex-wrap gap-2">
              {arquitetos.map((a) => (
                <li key={a} className="border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-12 border-l-2 border-primary pl-6">
              <p className="font-serif italic text-xl text-foreground">
                "Ver é uma coisa; observar, outra. Projetar começa em observar."
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-4">— Álvaro Siza</p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}