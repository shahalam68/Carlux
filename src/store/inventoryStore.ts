"use client";

import { create } from "zustand";

interface InventoryState {
    searchQuery: string;
    sortBy: "price_asc" | "price_desc" | "none";
    setSearchQuery: (query: string) => void;
    setSortBy: (sort: "price_asc" | "price_desc" | "none") => void;
}

export const useInventoryStore = create<InventoryState>((set) => ({
    searchQuery: "",
    sortBy: "none",
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSortBy: (sort) => set({ sortBy: sort }),
}));
