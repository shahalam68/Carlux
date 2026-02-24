"use client";

import { Product } from "@/types/inventory.types";
import { Star } from "lucide-react";
import Image from "next/image";

interface InventoryTableProps {
    products: Product[];
}

export default function InventoryTable({ products }: InventoryTableProps) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/5">
            <table className="w-full text-left text-sm text-white">
                <thead className="border-b border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <tr>
                        <th className="px-6 py-4">Vehicle</th>
                        <th className="px-6 py-4">Brand</th>
                        <th className="px-6 py-4">Rating</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {products.map((product) => (
                        <tr key={product.id} className="group hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-black/40">
                                        <Image
                                            src={product.thumbnail}
                                            alt={product.title}
                                            width={80}
                                            height={48}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <span className="font-bold group-hover:text-[#6B5CE6] transition-colors">
                                        {product.title}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-[#A8F5E8] font-medium">{product.brand}</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-1 text-[#FF7A5C]">
                                    <Star className="h-3 w-3 fill-current" />
                                    {product.rating}
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-lg font-black">${product.price.toLocaleString()}</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#6B5CE6] hover:border-[#6B5CE6]/50">
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
