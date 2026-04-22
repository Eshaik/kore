import Link from "next/link";
import {
  BRAND,
  FOOTER_LINK_GROUPS,
  SOCIAL_LINKS,
  PAYMENT_METHODS,
} from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <ellipse cx="20" cy="22" rx="14" ry="13" fill="#AD2831" />
                  <path
                    d="M22 14L17 22h4l-3 8 8-10h-5l3-6z"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                  />
                  <path d="M16 10C16 10 17 5 20 4" stroke="#AD2831" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 10C24 10 23 5 20 4" stroke="#AD2831" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 11C20 11 20 6 20 4" stroke="#800E13" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight leading-none">
                  {BRAND.name}
                </span>
                <p className="text-[10px] text-white/60 tracking-widest uppercase leading-none mt-0.5">
                  {BRAND.tagline}
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent/40 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-sm font-medium uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4 text-lg">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Kore. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">Pago seguro</span>
            <div className="flex gap-2">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-white/10 rounded text-xs text-white/60"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
