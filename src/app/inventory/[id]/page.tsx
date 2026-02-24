/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { inventoryService } from "@/services/inventory.service";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Car, Fuel, Globe, Shield, Star, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function VehicleDetailsPage() {
    const { id } = useParams();

    const { data: vehicle, isLoading, isError } = useQuery({
        queryKey: ["vehicle", id],
        queryFn: () => inventoryService.getProductById(id as string),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/5 border-t-primary"></div>
                    <p className="text-sm text-gray-400 italic">Synchronizing performance data...</p>
                </div>
            </div>
        );
    }

    if (isError || !vehicle) {
        return (
            <div className="flex h-[70vh] flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-black text-white italic">VEHICLE NOT FOUND</h2>
                <p className="mt-4 text-gray-500">The requested vehicle is no longer in our vault.</p>
                <Link
                    href="/"
                    className="mt-8 flex items-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary "
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Inventory
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Breadcrumbs & Back */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-xs font-bold text-gray-400 transition-all hover:bg-white/10 hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                BACK TO GARAGE
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Image Hero */}
                <div className="relative group">
                    <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-primary to-accent opacity-20 blur-xl"></div>
                    <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
                        <Image
                            src={vehicle.thumbnail}
                            alt={vehicle.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Tag Overlay */}
                    <div className="absolute top-6 left-6 flex gap-2">
                        <span className="rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                            Limited Edition
                        </span>
                    </div>
                </div>

                {/* Right: Info */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-black uppercase tracking-[0.2em] text-accent">
                            {vehicle.brand}
                        </span>
                        <div className="flex items-center gap-1 rounded-full bg-[#FF7A5C]/10 px-3 py-1 text-xs font-bold text-[#FF7A5C] border border-[#FF7A5C]/20">
                            <Star className="h-3 w-3 fill-current" />
                            {vehicle.rating} Rating
                        </div>
                    </div>

                    <h1 className="mt-4 text-5xl font-black text-white italic tracking-tighter shrink-0">
                        {vehicle.title.split(' ').map((word, i) => (
                            <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-linear-to-r from-primary to-accent" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <div className="mt-8 flex items-baseline gap-4">
                        <span className="text-4xl font-black text-white">$ {vehicle.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 uppercase font-bold tracking-widest">Exotic Import</span>
                    </div>

                    <p className="mt-8 text-lg text-gray-400 leading-relaxed border-l-2 border-primary/30 pl-6 italic">
                        {vehicle.description || "Experimental prototype engineering with zero compromise on performance and aesthetics. A true masterpiece of automotive design."}
                    </p>

                    {/* Quick Specs */}
                    <div className="mt-12 grid grid-cols-2 gap-4">
                        <SpecItem icon={Zap} label="Performance" value="High Output" />
                        <SpecItem icon={Fuel} label="Drivetrain" value="Synchronized" />
                        <SpecItem icon={Shield} label="Warranty" value="Platinum" />
                        <SpecItem icon={Globe} label="Region" value="Exclusive" />
                    </div>

                    <div className="mt-auto pt-12 flex gap-4">
                        <button className="flex-1 rounded-2xl bg-primary py-4 text-sm font-black text-white shadow-[0_8px_30px_rgb(107,92,230,0.3)] transition-transform active:scale-[0.98] hover:bg-primary/90 uppercase italic tracking-widest">
                            Reserve Now
                        </button>
                        <button className="rounded-2xl border border-white/10 bg-white/5 px-8 text-sm font-black text-white transition-all hover:bg-white/10 uppercase italic tracking-widest">
                            Inquire
                        </button>
                    </div>
                </div>
            </div>

            {/* Experimental Specs Section */}
            <section className="mt-24 rounded-3xl border border-white/5 bg-white/5 p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 text-white/5">
                    <Car size={300} strokeWidth={0.5} />
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4">Aesthetics</h4>
                        <p className="text-sm text-gray-400">Deep gloss finishes with aerodynamic precision styling.</p>
                    </div>
                    <div>
                        <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4">Engineering</h4>
                        <p className="text-sm text-gray-400">Carbon composite chassis weighing under 1200kg.</p>
                    </div>
                    <div>
                        <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4">Legacy</h4>
                        <p className="text-sm text-gray-400">Part of the Carlux elite series limited distribution.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function SpecItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 border border-white/5 hover:border-primary/20 transition-colors">
            <div className="rounded-xl bg-primary/10 p-3">
                <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{label}</p>
                <p className="text-sm font-black text-white">{value}</p>
            </div>
        </div>
    );
}
