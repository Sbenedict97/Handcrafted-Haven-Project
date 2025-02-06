import {products} from "@/app/lib/data";
import ProductCard from "./product-card";

export default function ProductContainer() {
    return (
      <>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </>
    );
  }