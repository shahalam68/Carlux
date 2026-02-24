"use client";

import { useInventory } from "@/hooks/useInventory";
import InventoryGrid from "./InventoryGrid";
import InventoryTable from "./InventoryTable";
import ViewToggle from "./ViewToggle";

export default function InventoryView() {
    const {
        items,
        isLoading,
        isError,
        viewType,
        setViewType,
        sortBy,
        setSortBy,
        totalCount,
        filteredCount,
        searchQuery
    } = useInventory();

    if (isLoading) {
        return (
            <div className="space-y-6">
                <div className="h-10 w-full animate-pulse rounded-lg bg-white/5"></div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-[380px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center text-red-500">
                <h3 className="text-xl font-bold italic">ENGINE FAILURE</h3>
                <p className="mt-2 text-sm text-red-500/70">
                    We couldn't connect to the inventory database. Please check your connection.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Inventory Header / Toolbar */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-black text-white tracking-tight uppercase italic">
                        AVAILABLE <span className="text-[#6B5CE6]">INVENTORY</span>
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">Showing {filteredCount} of {totalCount} performance vehicles</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <ViewToggle viewType={viewType} onViewChange={setViewType} />

                    <div className="h-6 w-px bg-white/10 hidden sm:block"></div>

                    <select
                        className="rounded-lg bg-[#0B0F19] border border-white/5 px-4 py-2 text-xs font-medium text-white outline-none focus:border-[#6B5CE6]/50 transition-colors cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                    >
                        <option value="none">Sort by: Default</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Main Content View */}
            {filteredCount > 0 ? (
                viewType === "grid" ? (
                    <InventoryGrid products={items} />
                ) : (
                    <InventoryTable products={items} />
                )
            ) : (
                <div className="mt-20 text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <p className="text-xl text-gray-500 italic">No vehicles matching "{searchQuery}" in our garage.</p>
                </div>
            )}
        </div>
    );
}
