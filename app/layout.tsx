import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import BranchBadge from "./branch-badge";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";
import { I18nProvider } from "@/lib/i18n/client";
import { getLocale } from "@/lib/i18n/get-locale";
import { messagesByLocale } from "@/lib/i18n/messages";
import { interpolate } from "@/lib/i18n/interpolate";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = messagesByLocale[locale];
  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = messagesByLocale[locale];

  const navItems = [
    { href: "/ideen", label: messages.nav.ideen },
    { href: "/analyse", label: messages.nav.analyse },
  ];

  return (
    <html lang={locale} data-theme="light" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("websurface:theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <I18nProvider locale={locale} messages={messages}>
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
              <div className="flex shrink-0 items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link href="/impressum" className="hover:text-slate-900 dark:hover:text-slate-100">
                  {messages.nav.impressum}
                </Link>
                <Link href="/datenschutz" className="hover:text-slate-900 dark:hover:text-slate-100">
                  {messages.nav.datenschutz}
                </Link>
                <span>{interpolate(messages.footer.copyright, { year: new Date().getFullYear() })}</span>
              </div>
            </div>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}
