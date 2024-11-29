import type { Product } from "~/types";

type Products = {
  products: Product[];
};
export async function getProducts(): Promise<Products> {
  const data = await fetch("https://dummyjson.com/products?limit=10");
  return data.json();
}
export async function getProduct(id: number): Promise<Product> {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  return data.json();
}
