"use client";

import { Product } from "@/types/inventory.types";
import { Star } from "lucide-react";
import Image from "next/image";

interface InventoryCardProps {
    product: Product;
}

export default function InventoryCard({ product }: InventoryCardProps) {
    return (
        <div className="group relative rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-[#6B5CE6]/30 hover:bg-white/10">
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-black/40">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={400}
                    height={250}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A8F5E8]">
                        {product.brand}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#FF7A5C]">
                        <Star className="h-3 w-3 fill-current" />
                        {product.rating}
                    </div>
                </div>

                <h3 className="mt-2 text-lg font-bold text-white transition-colors group-hover:text-[#6B5CE6]">
                    {product.title}
                </h3>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <span className="text-xl font-black text-white">
                            ${product.price.toLocaleString()}
                        </span>
                    </div>
                    <button className="rounded-lg bg-[#6B5CE6] px-4 py-2 text-xs font-bold text-white transition-transform active:scale-95 hover:bg-[#6B5CE6]/90 shadow-[0_4px_10px_rgba(107,92,230,0.3)]">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
