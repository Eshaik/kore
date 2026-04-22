"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import { products } from "@/app/lib/data";
import { PRODUCT_CATEGORIES } from "@/app/lib/constants";

export default function ProductosPage() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filtered =
    activeCategory === "todos"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === activeCategory
        );

  return (
    <>
      <section className="bg-gradient-to-r from-primary-darker via-primary-dark to-wine py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros productos
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg">
            Gelatinas en barra, jugos y packs con nitratos de remolacha bioactivados.
            Alimento deportivo para atletas que buscan un rendimiento natural.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-accent/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-16">
            No hay productos en esta categoría aún.
          </p>
        )}
      </section>
    </>
  );
}
