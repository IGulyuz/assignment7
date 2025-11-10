import { sortProducts } from "@/sort-lib";

describe("sortProducts", () => {
  it("should sort products by name alphabetically", () => {
    // Prepare unsorted products
    const products = [
      { name: "Interstellar", stars: 5 },
      { name: "Inception", stars: 3 },
      { name: "Avatar", stars: 4 },
    ];
    const sortedByName = products
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

    // call the sort function
    const sortedProducts = sortProducts(products);

    // verify output
    expect(sortedProducts).toEqual(sortedByName);
  });
});
