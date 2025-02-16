import {products} from "@/app/lib/data";
import ProductCard from "./product-card";
import Link from "next/link";

export default function ProductContainer() {
    return (
      <>
        {products.map((product) => (
          <Link  href={`/product/${product.id}`} key={product.id}>
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              rating={product.rating}
            />
          </Link>
        ))}
      </>
    );
  }