interface ProductProps {
    name: string;
    price: number;
    description: string;
    image: string;
    rating: number;
  }


export default function ProductCard( { name, price, description, image, rating }: ProductProps) {
    return (
            <div className="bg-white rounded-lg shadow-lg border border-[--gray] p-4 transition-all duration-300 hover:scale-105">
                <img className="mx-auto" src={image} alt="Product Image Placeholder" />
                <div className="p-1">
                    <p className="mt-4 text-xl font-bold">{name}</p>
                    <p className="mt-2 text-lg text-[--green] font-bold">{price}</p>
                    <p className="mt-6">{description}</p>
                    <div className="flex items-center mt-2">
                        <span className="mr-3 text-[--orange] font-bold">
                        {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
                        </span>
                        <span className="text-[--orange] font-bold">({rating.toFixed(1)})</span>
                    </div>
                </div>
            </div>
    )
}