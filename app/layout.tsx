import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebSurface — App-Ideen für den Mittelstand",
  description:
    "WebSurface findet passende App-Konzepte für mittelständische Unternehmen — branchenbasiert oder per Analyse anonymisierter Geschäftsdaten.",
};

const navItems = [
  { href: "/onboarding", label: "Branche wählen" },
  { href: "/ideen", label: "App-Ideen" },
  { href: "/analyse", label: "Datenanalyse" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              WebSurface
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/impressum" className="hover:text-slate-900">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-slate-900">
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
