"use client";

import { useInventoryStore } from "@/store/inventoryStore";
import {
    Car,
    LayoutDashboard,
    LogOut,
    Settings,
    TrendingUp,
    Users,
    X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Inventory", href: "#inventory", icon: Car },
    { name: "Analytics", href: "#analytics", icon: TrendingUp },
    { name: "Customers", href: "#customers", icon: Users },
    { name: "Settings", href: "#settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { isSidebarOpen, setSidebarOpen } = useInventoryStore();

    return (
        <>
            {/* Mobile Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/5 bg-[#0B0F19]/95 backdrop-blur-xl transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex h-full flex-col px-4 py-8">
                    {/* Logo */}
                    <div className="mb-10 px-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-black text-white italic shadow-[0_0_15px_rgba(107,92,230,0.4)]">
                                C
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white uppercase">
                                CARLUX
                            </span>
                        </div>

                        {/* Close button - Mobile only */}
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-1 text-gray-400 hover:text-white md:hidden"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1">
                        {NAVIGATION_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${isActive
                                        ? "bg-primary/10 text-primary shadow-sm"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto border-t border-white/5 pt-4">
                        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-red-500/10 hover:text-red-500">
                            <LogOut className="h-4 w-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
