import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import BranchBadge from "./branch-badge";
import ThemeToggle from "./theme-toggle";

export const metadata: Metadata = {
  title: "WebSurface — App-Ideen für den Mittelstand",
  description:
    "WebSurface findet passende App-Konzepte für mittelständische Unternehmen — branchenbasiert oder per Analyse anonymisierter Geschäftsdaten.",
};

const navItems = [
  { href: "/onboarding", label: "Branchen wählen" },
  { href: "/ideen", label: "App-Ideen" },
  { href: "/analyse", label: "Datenanalyse" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" data-theme="light" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("websurface:theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
            <div>
              <Link href="/" className="text-lg font-semibold tracking-tight">
                WebSurface
              </Link>
              <BranchBadge />
            </div>
            <nav className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-slate-900 dark:hover:text-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/impressum" className="hover:text-slate-900 dark:hover:text-slate-100">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-slate-900 dark:hover:text-slate-100">
                Datenschutz
              </Link>
              <span>© {new Date().getFullYear()} WebSurface — Prototyp, kein produktives Angebot</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
