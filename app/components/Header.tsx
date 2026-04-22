import Link from "next/link";
import { NAV_LINKS, BRAND, TOP_BAR_MESSAGE } from "@/app/lib/constants";

function KoreLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <circle cx="20" cy="22" r="14" fill="#800E13" />
          <ellipse cx="20" cy="22" rx="14" ry="13" fill="#AD2831" />
          <path
            d="M22 14L17 22h4l-3 8 8-10h-5l3-6z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          <path d="M16 10C16 10 17 5 20 4" stroke="#640D14" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 10C24 10 23 5 20 4" stroke="#640D14" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 11C20 11 20 6 20 4" stroke="#800E13" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tight text-primary-dark leading-none">
          {BRAND.name}
        </span>
        <span className="text-[10px] text-muted tracking-widest uppercase leading-none mt-0.5">
          {BRAND.tagline}
        </span>
      </div>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="bg-gradient-to-r from-primary-dark via-primary to-wine text-white text-center text-sm py-2 px-4">
        <p className="flex items-center justify-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
          {TOP_BAR_MESSAGE}
        </p>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <KoreLogo />

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/70 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Buscar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              className="relative p-2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Carrito"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <details className="md:hidden group">
              <summary
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer text-foreground/70 active:text-primary list-none [&::-webkit-details-marker]:hidden"
                aria-label="Menú"
              >
                <svg className="w-6 h-6 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </summary>
              <div className="absolute left-0 right-0 bg-white border-t border-border shadow-lg">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-foreground/70 hover:text-primary hover:bg-secondary font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
}
