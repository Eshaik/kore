import Link from "next/link";
import { TEAM_MEMBERS, COMPANY_VALUES } from "@/app/lib/constants";
import { getInitials } from "@/app/lib/utils";

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-darker via-primary-dark to-wine py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-accent">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rendimiento desde adentro
          </h1>
          <p className="text-white/75 max-w-3xl mx-auto text-xl leading-relaxed">
            Somos una marca de nutrición deportiva enfocada en el poder natural
            de la remolacha. Creemos que el verdadero rendimiento viene de
            adentro, de nutrir tu cuerpo con lo que la ciencia ha comprobado.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nuestra historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              De la ciencia a la pista
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Kore nació de una obsesión: ¿cómo mejorar el rendimiento
                deportivo de forma natural, sin químicos ni sustancias
                artificiales? La respuesta estaba en la remolacha.
              </p>
              <p>
                Estudios científicos han demostrado que los nitratos presentes
                en la remolacha se convierten en óxido nítrico en el cuerpo,
                un potente vasodilatador que mejora el flujo sanguíneo, la
                oxigenación muscular y reduce el consumo de oxígeno durante
                el ejercicio.
              </p>
              <p>
                Desarrollamos un proceso de bioactivación que maximiza la
                concentración y biodisponibilidad de estos nitratos,
                creando productos que realmente marcan la diferencia en tu
                rendimiento. Kore viene del griego &ldquo;corazón&rdquo; —
                el motor que impulsa cada paso, cada kilómetro, cada meta.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-dark to-wine rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="absolute text-white"
                  style={{
                    width: `${20 + i * 10}px`,
                    top: `${15 + i * 18}%`,
                    left: `${10 + i * 20}%`,
                    transform: `rotate(${i * 30}deg)`,
                  }}
                >
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
              ))}
            </div>
            <div className="text-center relative z-10">
              <svg viewBox="0 0 100 100" fill="none" className="w-28 h-28 mx-auto">
                <ellipse cx="50" cy="56" rx="30" ry="28" fill="#AD2831" opacity="0.5" />
                <path d="M55 38L45 54h10l-7.5 20 20-25h-12.5l7.5-15z" fill="#ffffff" opacity="0.8" />
                <path d="M40 28C40 28 43 15 50 10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                <path d="M60 28C60 28 57 15 50 10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
              <p className="mt-4 text-white/60 font-medium">Kore - Desde 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="ciencia" className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nuestros valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Lo que nos define
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {COMPANY_VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Las personas detrás de Kore
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="text-center bg-white border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  {getInitials(member.name)}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
              <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-darker via-wine to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-accent mx-auto mb-4">
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
          <h2 className="text-3xl font-bold text-white mb-4">
            Activa tu rendimiento
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Descubre nuestros productos con nitratos de remolacha
            bioactivados.
          </p>
          <Link
            href="/productos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-colors text-lg"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            Ver productos
          </Link>
        </div>
      </section>
    </>
  );
}
