// Renders every route of the built TanStack Start server into static HTML
// files so the app can be hosted on GitHub Pages (which only serves static
// files, no Node runtime). Runs after `vite build` (nitro preset: node-server).
import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import path from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BASE_PATH = "/atelier-arquitetura";
const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const OUT_DIR = path.join(ROOT, "gh-pages-dist");

const ROUTES = ["/", "/sobre", "/cronograma", "/projetos", "/recursos"];

async function waitForServer(url, attempts = 50) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 404) return;
    } catch {
      // not up yet
    }
    await sleep(200);
  }
  throw new Error(`Server at ${url} did not respond in time`);
}

async function saveRoute(routePath, destFile, { allow404 = false } = {}) {
  const url = `${ORIGIN}${BASE_PATH}${routePath}`;
  const res = await fetch(url);
  if (!res.ok && !(allow404 && res.status === 404)) {
    throw new Error(`GET ${url} -> ${res.status}`);
  }
  const html = await res.text();
  await mkdir(path.dirname(destFile), { recursive: true });
  await writeFile(destFile, html, "utf8");
  console.log(`✔ ${routePath || "/"} -> ${path.relative(ROOT, destFile)}`);
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const server = spawn(process.execPath, [path.join(ROOT, ".output/server/index.mjs")], {
    env: { ...process.env, PORT: String(PORT), NITRO_PORT: String(PORT) },
    stdio: "inherit",
  });

  const stopServer = () => {
    server.kill();
  };

  try {
    await waitForServer(`${ORIGIN}${BASE_PATH}/`);

    for (const route of ROUTES) {
      const dest = route === "/"
        ? path.join(OUT_DIR, "index.html")
        : path.join(OUT_DIR, route.slice(1), "index.html");
      await saveRoute(route, dest);
    }

    // 404.html: GitHub Pages serves this for any unmatched path.
    await saveRoute("/__not-found__", path.join(OUT_DIR, "404.html"), { allow404: true });
  } finally {
    stopServer();
  }

  await cp(path.join(ROOT, ".output/public/assets"), path.join(OUT_DIR, "assets"), {
    recursive: true,
  });

  // Prevents GitHub Pages from running Jekyll over the output.
  await writeFile(path.join(OUT_DIR, ".nojekyll"), "");

  console.log(`\nStatic site ready at ${path.relative(ROOT, OUT_DIR)}/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
