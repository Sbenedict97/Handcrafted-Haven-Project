
export default function ProductContainer() {
    return (
            <div className="bg-white rounded-lg shadow-lg border border-[--gray] p-4 transition-all duration-300 hover:scale-105">
                <img className="mx-auto" src="https://placehold.co/350x200" alt="Product Image Placeholder" />
                <div className="p-1">
                    <p className="mt-4 text-xl font-bold">Product Name</p>
                    <p className="mt-2 text-lg text-[--green] font-bold">$3.00</p>
                    <p className="mt-6">This is a brief description of the product. It highlights the key features and benefits.</p>
                    <div className="flex items-center mt-2">
                        <span className="mr-3 text-[--orange] font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <span className="text-[--orange] font-bold">(5.0)</span>
                    </div>
                </div>
            </div>
    )
}