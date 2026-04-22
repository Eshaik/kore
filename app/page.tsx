import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import NewsletterForm from "@/app/components/NewsletterForm";
import { products, testimonials } from "@/app/lib/data";
import { TRUST_STATS, HOW_IT_WORKS_STEPS, STAR_RANGE } from "@/app/lib/constants";
import type { Benefit } from "@/app/lib/types";

// ─── Benefits (contain JSX, so they live in the page file) ──────────
const BENEFITS: Benefit[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Mejor oxigenación",
    description:
      "Los nitratos de remolacha se convierten en óxido nítrico, dilatando los vasos sanguíneos y mejorando el flujo de oxígeno a tus músculos.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Formato práctico",
    description:
      "Barra de gelatina fácil de llevar y consumir. Sin agua, sin preparación. Ideal antes de cualquier entrenamiento o competencia.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Ciencia comprobada",
    description:
      "Formulados con dosis clínicamente efectivas de nitratos, basados en estudios publicados sobre rendimiento deportivo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Sabor increíble",
    description:
      "No parece un suplemento. Nuestras gelatinas de remolacha tienen un sabor delicioso que hace que quieras repetir.",
  },
];

// ─── Sections ───────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-darker via-primary-dark to-primary overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5" />
        <svg viewBox="0 0 20 20" fill="currentColor" className="absolute top-20 right-[15%] w-8 h-8 text-accent/20 rotate-12">
          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
        </svg>
        <svg viewBox="0 0 20 20" fill="currentColor" className="absolute bottom-32 left-[10%] w-6 h-6 text-accent/15 -rotate-12">
          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-white/90 text-sm font-medium rounded-full mb-6 border border-accent/30">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent-light">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            Nitratos de Remolacha Bioactivados
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Rendimiento que nace{" "}
            <span className="text-accent-light">desde adentro</span>
          </h1>
          <p className="text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            Alimento deportivo a base de nitratos de remolacha bioactivados.
            Mejora tu oxigenación muscular, reduce la fatiga y lleva tu
            rendimiento al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-colors text-lg"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              Ver productos
            </Link>
            <Link
              href="/nosotros#ciencia"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors text-lg border border-white/20"
            >
              La ciencia detrás
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
          Productos destacados
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Lo más elegido por los atletas
        </h2>
        <p className="text-muted mt-4 max-w-2xl mx-auto">
          Gelatinas en barra, jugos y packs con nitratos de remolacha
          bioactivados para optimizar tu rendimiento deportivo de forma natural.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-colors"
        >
          Ver todos los productos
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-secondary to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Por qué Kore
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            La diferencia Kore
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-16 h-16 mx-auto bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Protocolo
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Así de fácil funciona
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div key={step.num} className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">{step.num}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Lo que dicen los atletas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {STAR_RANGE.map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= t.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.age} años, {t.location}
                  </p>
                </div>
                <span className="text-xs text-primary font-medium bg-accent/10 px-3 py-1 rounded-full">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary-darker via-wine to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-accent mx-auto mb-4">
          <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
        </svg>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Activa tu rendimiento
        </h2>
        <p className="text-white/75 mb-8 max-w-xl mx-auto">
          Suscríbete y recibe un 10% de descuento en tu primera compra,
          además de consejos de nutrición deportiva y protocolos de carga.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
