/**
 * Sorts products by name alphabetically
 */
export function sortProducts(
  items: Array<{ name: string; stars: number }>
): Array<{ name: string; stars: number }> {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}
