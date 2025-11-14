"use client"
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";


export default function DashboardLayout({
    children, 
}: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className="flex h-screen bg-white text-black p-3 justify-between">
        <Sidebar/>
        <section className="h-full w-[80%] justify-between flex flex-col">
        {/* General header */}
        <Header/>
        
        {/* Page Content */}
        <div className="h-[88%] bg-gray-100 p-5 rounded-2xl">
            {children}
        </div>
        </section>
    </div>
  );
}
