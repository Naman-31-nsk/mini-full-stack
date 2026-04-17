import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic"; // IMPORTANT RULE

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {data.products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
