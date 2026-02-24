"use client";

import { useInventoryStore } from "@/store/inventoryStore";
import { Bell, Search, User } from "lucide-react";

export default function Header() {
    const { searchQuery, setSearchQuery } = useInventoryStore();

    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/5 bg-[#0B0F19]/50 px-8 backdrop-blur-xl">
            {/* Search Bar */}
            <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-white/5 px-4 py-2 border border-white/5 focus-within:border-[#6B5CE6]/50 transition-colors">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search vehicles, brands, or models..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Profile & Notifications */}
            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF7A5C] border-2 border-[#0B0F19]"></span>
                </button>

                <div className="flex items-center gap-3 pl-2 border-l border-white/5">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium text-white">John Doe</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#6B5CE6] to-[#A8F5E8] flex items-center justify-center border border-white/10">
                        <User className="h-5 w-5 text-white" />
                    </div>
                </div>
            </div>
        </header>
    );
}
