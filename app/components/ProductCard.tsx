import Link from "next/link";
import type { Product } from "@/app/lib/types";
import { formatCOP } from "@/app/lib/utils";
import { STAR_RANGE } from "@/app/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {STAR_RANGE.map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-secondary via-secondary to-accent/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mx-auto opacity-30 group-hover:opacity-50 transition-opacity">
              <ellipse cx="40" cy="46" rx="24" ry="22" fill="#AD2831" />
              <path d="M44 32L36 44h8l-6 16 16-20h-10l6-12z" fill="#ffffff" opacity="0.8" />
              <path d="M32 24C32 24 34 14 40 10" stroke="#640D14" strokeWidth="3" strokeLinecap="round" />
              <path d="M48 24C48 24 46 14 40 10" stroke="#640D14" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="mt-2 text-sm text-muted">{product.category}</p>
          </div>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted mt-1 line-clamp-2">{product.tagline}</p>

        <div className="flex items-center gap-2 mt-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-xl font-bold text-primary">{formatCOP(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted line-through">
              {formatCOP(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
