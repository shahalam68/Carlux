import { InventoryState, SortOrder, ViewType } from "@/types/inventory.types";
import { create } from "zustand";

export const useInventoryStore = create<InventoryState>((set) => ({
    searchQuery: "",
    sortBy: "none",
    viewType: "grid",
    isSidebarOpen: false,
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSortBy: (sort: SortOrder) => set({ sortBy: sort }),
    setViewType: (view: ViewType) => set({ viewType: view }),
    setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
