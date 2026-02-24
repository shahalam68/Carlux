import { ApiResponse, Product } from "@/types/inventory.types";

const API_BASE_URL = "https://dummyjson.com";

export const inventoryService = {
    /**
     * Fetches vehicles from the mock API.
     * @returns A list of vehicle products.
     */
    async getVehicles(): Promise<Product[]> {
        const response = await fetch(`${API_BASE_URL}/products/category/vehicle`);

        if (!response.ok) {
            throw new Error(`Failed to fetch vehicles: ${response.statusText}`);
        }

        const data: ApiResponse<Product> = await response.json();
        return data.products;
    },

    /**
     * Can be extended for other categories or single products
     */
    async getProductById(id: number): Promise<Product> {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch product ${id}`);
        }

        return response.json();
    }
};
