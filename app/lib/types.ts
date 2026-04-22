import type { ReactNode } from "react";

// ─── Product ────────────────────────────────────────────────────────
export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Price in COP (Colombian Pesos) */
  price: number;
  /** Original price before discount, in COP */
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  benefits: string[];
  ingredients: string[];
  category: string;
}

// ─── Testimonial ────────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  age: number;
  location: string;
  text: string;
  product: string;
  rating: number;
}

// ─── Category ───────────────────────────────────────────────────────
export interface Category {
  name: string;
  slug: string;
}

// ─── Navigation ─────────────────────────────────────────────────────
export interface NavLink {
  name: string;
  href: string;
}

// ─── Footer ─────────────────────────────────────────────────────────
export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

// ─── Stat (trust bar) ───────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

// ─── Benefit card ───────────────────────────────────────────────────
export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

// ─── How-it-works step ──────────────────────────────────────────────
export interface Step {
  num: string;
  title: string;
  desc: string;
}

// ─── Team member ────────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

// ─── Company value ──────────────────────────────────────────────────
export interface CompanyValue {
  title: string;
  description: string;
}

// ─── Contact info ───────────────────────────────────────────────────
export interface ContactInfo {
  icon: ReactNode;
  title: string;
  value: string;
}

// ─── Form select option ─────────────────────────────────────────────
export interface SelectOption {
  value: string;
  label: string;
}
