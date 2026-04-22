/**
 * Format a number as Colombian Pesos (COP).
 *
 * @example formatCOP(12500) → "$12.500"
 * @example formatCOP(149900) → "$149.900"
 */
export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Get the initials from a full name (first two words).
 *
 * @example getInitials("Dr. Eduardo Martínez") → "DE"
 */
export function getInitials(name: string, count = 2): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, count)
    .join("");
}
