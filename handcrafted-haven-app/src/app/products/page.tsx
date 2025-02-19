import ProductContainer from "../ui/products/product-container";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavBar from "@/app/ui/nav/navBar";

export default function Page() {
  return (
    <>
      <NavBar />

      <main className="pl-4 pr-4">
        <h1 className="text-center text-3xl font-bold mb-8 mt-8">
          Products Page
        </h1>
        <h2 className="text-2xl font-bold mb-8">Product Category Name</h2>
        <div className="relative flex flex-1 flex-shrink-0 mb-10">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            placeholder="Type a product..."
            className="peer block w-80 rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
        <div className="grid grid-cols-3 place-items-center gap-10 ">
          <ProductContainer />
        </div>
      </main>
    </>
  );
}
