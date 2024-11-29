import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Container } from "~/components/Container";
import { getProducts } from "~/models/products.server";
export async function loader() {
  const { products } = await getProducts();
  return json({ products });
}
export default function PostsRoute() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div>
      <Container>
        <section className="my-4">
          <h1 className="text-xl font-semibold mb-4">Posts</h1>
          <ul aria-label="Product Listing" className="list-none">
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <article
                    className="space-y-4 outline outline-lime-200 mb-4 p-4 rounded-sm"
                    aria-labelledby={`product-${product.title}`}
                  >
                    <h2 id={`product-${product.title}`}>{product.title}</h2>
                    <p>{product.description}</p>
                    <small className="italic">{product.brand}</small>
                    <Link to={`/products/${product.id}`}>View Prodcut</Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </div>
  );
}
