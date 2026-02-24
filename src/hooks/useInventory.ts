"use client";

import { inventoryService } from "@/services/inventory.service";
import { useInventoryStore } from "@/store/inventoryStore";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useInventory = () => {
    const {
        searchQuery,
        sortBy,
        viewType,
        setViewType,
        setSortBy,
        setSearchQuery,
    } = useInventoryStore();

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["inventory", "vehicles"],
        queryFn: () => inventoryService.getVehicles(),
    });

    const filteredItems = useMemo(() => {
        if (!data) return [];

        let items = [...data];

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            items = items.filter(
                (item) =>
                    item.title.toLowerCase().includes(query) ||
                    item.brand.toLowerCase().includes(query)
            );
        }

        // Sorting logic
        if (sortBy === "price_asc") {
            items.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price_desc") {
            items.sort((a, b) => b.price - a.price);
        }

        return items;
    }, [data, searchQuery, sortBy]);

    return {
        items: filteredItems,
        totalCount: data?.length || 0,
        filteredCount: filteredItems.length,
        isLoading,
        isError,
        error,
        refetch,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        viewType,
        setViewType,
    };
};
