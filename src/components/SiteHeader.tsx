import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const linkCls =
    "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors";
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-primary leading-none">Atelier</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Projetos de Arquitetura
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
            Início
          </Link>
          <Link to="/sobre" className={linkCls} activeProps={{ className: "text-primary" }}>
            Sobre
          </Link>
          <Link to="/cronograma" className={linkCls} activeProps={{ className: "text-primary" }}>
            Cronograma
          </Link>
          <Link to="/projetos" className={linkCls} activeProps={{ className: "text-primary" }}>
            Projetos
          </Link>
          <Link to="/recursos" className={linkCls} activeProps={{ className: "text-primary" }}>
            Recursos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Atelier — Faculdade de Arquitetura</span>
        <span className="text-primary">contato@atelier.edu</span>
      </div>
    </footer>
  );
}