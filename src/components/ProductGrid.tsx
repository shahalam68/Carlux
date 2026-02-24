"use client";

import { useInventoryStore } from "@/store/inventoryStore";
import { useQuery } from "@tanstack/react-query";
import ProductCard, { Product } from "./ProductCard";

const fetchVehicles = async (): Promise<Product[]> => {
    const response = await fetch("https://dummyjson.com/products/category/vehicle");
    if (!response.ok) throw new Error("Failed to fetch vehicles");
    const data = await response.json();
    return data.products;
};

export default function ProductGrid() {
    const { searchQuery, sortBy, setSortBy } = useInventoryStore();

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["vehicles"],
        queryFn: fetchVehicles,
    });

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-[380px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center text-red-500">
                <h3 className="text-xl font-bold">Error Loading Inventory</h3>
                <p className="mt-2 text-sm text-red-500/70">
                    We couldn't reach the database. Please check your connection and try again.
                </p>
            </div>
        );
    }

    const filteredProducts = products
        ?.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "price_asc") return a.price - b.price;
            if (sortBy === "price_desc") return b.price - a.price;
            return 0;
        });

    return (
        <div>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">
                        AVAILABLE <span className="text-[#6B5CE6]">INVENTORY</span>
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">Explore our high-performance vehicle fleet</p>
                </div>

                <div className="flex items-center gap-4">
                    <select
                        className="rounded-lg bg-[#0B0F19] border border-white/5 px-4 py-2 text-xs font-medium text-white outline-none focus:border-[#6B5CE6]/50 transition-colors cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                    >
                        <option value="none" className="bg-[#0B0F19]">Sort by: Default</option>
                        <option value="price_asc" className="bg-[#0B0F19]">Price: Low to High</option>
                        <option value="price_desc" className="bg-[#0B0F19]">Price: High to Low</option>
                    </select>

                    <span className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                        {filteredProducts?.length} Results
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts?.length === 0 && (
                <div className="mt-20 text-center">
                    <p className="text-xl text-gray-500">No vehicles matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
}
