import InventoryView from "@/components/inventory/InventoryView";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/20 to-transparent p-6 sm:p-12 border border-primary/10">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white md:text-7xl">
            PRECISION <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              ENGINEERING.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 md:text-xl leading-relaxed">
            Welcome to the Carlux Dashboard. Manage, filter, and monitor your
            luxury automotive inventory with zero friction.
          </p>
        </div>
        {/* Glow effect */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"></div>
      </section>

      <section id="inventory">
        <InventoryView />
      </section>
    </div>
  );
}
