import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/lib/data";
import { STAR_RANGE } from "@/app/lib/constants";
import { formatCOP } from "@/app/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const savings = product.originalPrice
    ? formatCOP(product.originalPrice - product.price)
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-primary transition-colors">
              Productos
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gradient-to-br from-secondary via-secondary to-accent/5 rounded-3xl aspect-square flex items-center justify-center relative">
            <div className="text-center">
              <svg viewBox="0 0 120 120" fill="none" className="w-40 h-40 mx-auto">
                <ellipse cx="60" cy="68" rx="36" ry="34" fill="#AD2831" opacity="0.2" />
                <ellipse cx="60" cy="68" rx="28" ry="26" fill="#AD2831" opacity="0.3" />
                <path d="M66 48L54 66h12l-9 24 24-30h-15l9-18z" fill="#AD2831" opacity="0.5" />
                <path d="M48 36C48 36 52 20 60 14" stroke="#640D14" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                <path d="M72 36C72 36 68 20 60 14" stroke="#640D14" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
              </svg>
              <p className="mt-4 text-muted">Imagen del producto</p>
            </div>
            {product.badge && (
              <span className="absolute top-6 left-6 bg-accent text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="text-sm text-accent font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {STAR_RANGE.map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.rating} ({product.reviews} reseñas)
              </span>
            </div>

            <p className="text-lg text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">
                {formatCOP(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted line-through">
                    {formatCOP(product.originalPrice)}
                  </span>
                  <span className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
                    Ahorra {savings}
                  </span>
                </>
              )}
            </div>

            {/* Add to cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex-1 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-colors text-lg flex items-center justify-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
                Agregar al carrito
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-colors">
                Comprar ahora
              </button>
            </div>

            {/* Benefits */}
            {product.benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Beneficios</h3>
                <ul className="space-y-3">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Ingredientes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1.5 bg-secondary text-sm text-foreground rounded-full border border-border"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
