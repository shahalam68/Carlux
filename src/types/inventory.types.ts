export interface Product {
    id: number;
    title: string;
    price: number;
    brand: string;
    thumbnail: string;
    rating: number;
    description?: string;
    category?: string;
    stock?: number;
}

export interface ApiResponse<T> {
    products: T[];
    total: number;
    skip: number;
    limit: number;
}

export type SortOrder = "price_asc" | "price_desc" | "none";
export type ViewType = "grid" | "list";

export interface InventoryState {
    searchQuery: string;
    sortBy: SortOrder;
    viewType: ViewType;
    isSidebarOpen: boolean;
    setSearchQuery: (query: string) => void;
    setSortBy: (sort: SortOrder) => void;
    setViewType: (view: ViewType) => void;
    setSidebarOpen: (isOpen: boolean) => void;
    toggleSidebar: () => void;
}
