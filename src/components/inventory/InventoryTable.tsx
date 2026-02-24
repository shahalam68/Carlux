"use client";

import { Product } from "@/types/inventory.types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InventoryTableProps {
    products: Product[];
}

export default function InventoryTable({ products }: InventoryTableProps) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/5">
            <table className="w-full text-left text-sm text-white">
                <thead className="border-b border-white/5 bg-white/5 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
                    <tr>
                        <th className="px-2 md:px-6 py-4">Vehicle</th>
                        <th className="px-6 py-4 hidden md:table-cell">Brand</th>
                        <th className="px-6 py-4 hidden md:table-cell">Rating</th>
                        <th className="px-2 md:px-6 py-4">Price</th>
                        <th className="px-2 md:px-6 py-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {products.map((product) => (
                        <tr key={product.id} className="group hover:bg-white/5 transition-colors">
                            <td className="px-2 md:px-6 py-4">
                                <div className="flex items-center gap-2 md:gap-4">
                                    <div className="h-8 w-12 md:h-12 md:w-20 flex-shrink-0 overflow-hidden rounded-lg bg-black/40">
                                        <Image
                                            src={product.thumbnail}
                                            alt={product.title}
                                            width={80}
                                            height={48}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <span className="font-bold text-xs md:text-sm group-hover:text-primary transition-colors line-clamp-1 max-w-[80px] md:max-w-none">
                                        {product.title}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                                <span className="text-[#A8F5E8] font-medium">{product.brand}</span>
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell">
                                <div className="flex items-center gap-1 text-[#FF7A5C]">
                                    <Star className="h-3 w-3 fill-current" />
                                    {product.rating}
                                </div>
                            </td>
                            <td className="px-2 md:px-6 py-4">
                                <span className="text-sm md:text-lg font-black">${product.price.toLocaleString()}</span>
                            </td>
                            <td className="px-2 md:px-6 py-4 text-right">
                                <Link
                                    href={`/inventory/${product.id}`}
                                    className="rounded-lg bg-white/5 border border-white/10 px-2 md:px-4 py-2 text-[10px] md:text-xs font-bold text-white transition-all hover:bg-primary hover:border-primary/50 whitespace-nowrap"
                                >
                                    Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
