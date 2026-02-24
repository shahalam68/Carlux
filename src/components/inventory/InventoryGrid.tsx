"use client";

import { Product } from "@/types/inventory.types";
import InventoryCard from "./InventoryCard";

interface InventoryGridProps {
    products: Product[];
}

export default function InventoryGrid({ products }: InventoryGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <InventoryCard key={product.id} product={product} />
            ))}
        </div>
    );
}
