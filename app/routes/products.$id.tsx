import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { getProduct } from "~/models/products.server";
import { Container } from "~/components/Container";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const product = await getProduct(Number(params.id));
  if (!product) {
    throw new Error("Product not found");
  }
  return json({ product });
};

export default function PostsRoute() {
  const { product } = useLoaderData<typeof loader>();

  console.log(product, "id");

  return (
    <div className="flex justify-center items-center">
      <Container>
        <h2 className="text-xl text-gray-100">{product.title}</h2>
      </Container>
    </div>
  );
}
