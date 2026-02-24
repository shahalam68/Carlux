import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import QueryProvider from "@/providers/query-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlux Dashboard",
  description: "Automotive Inventory System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-white selection:bg-primary/30">
        <QueryProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col md:pl-64">
              <Header />
              <main className="flex-1 p-4 md:p-8">
                {children}
              </main>
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
