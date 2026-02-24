"use client";

import { ViewType } from "@/types/inventory.types";
import { LayoutGrid, List } from "lucide-react";

interface ViewToggleProps {
    viewType: ViewType;
    onViewChange: (view: ViewType) => void;
}

export default function ViewToggle({ viewType, onViewChange }: ViewToggleProps) {
    return (
        <div className="flex items-center gap-1 rounded-lg bg-white/5 p-1 border border-white/5">
            <button
                onClick={() => onViewChange("grid")}
                className={`rounded-md p-1.5 transition-all ${viewType === "grid"
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                    }`}
                title="Grid View"
            >
                <LayoutGrid className="h-4 w-4" />
            </button>
            <button
                onClick={() => onViewChange("list")}
                className={`rounded-md p-1.5 transition-all ${viewType === "list"
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                    }`}
                title="List View"
            >
                <List className="h-4 w-4" />
            </button>
        </div>
    );
}
