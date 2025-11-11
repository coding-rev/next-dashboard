"use client";

import Image from "next/image";
import { LayoutDashboard , ClipboardList, CalendarRange, ChartPie, Users, Settings, LifeBuoy, LogOut, Bell, Mail, Plus} from "lucide-react";
import SideBarTile from "@/components/ui/SideBarTile";
import SearchInput from "@/components/ui/SearchInput";
import CircleButton from "@/components/ui/CircleButton";
import AppButton from "@/components/ui/AppButton";
import AnalyticalCard from "@/components/ui/AnalyticalCard";
import PageHeader from "@/components/common/PageHeader";

export default function Home() {
  return (
    <div className="flex h-screen bg-white text-black p-3 justify-between">
      <section className="bg-gray-100 h-full w-[19%] rounded-2xl">
          <div className="flex items-center p-5">
            <Image src="/donezo-logo.png" alt="Logo" width={60} height={60} />
            <h1 className="ml-2 text-xl font-semibold">Donezo</h1>
          </div>
          <div className="mt-5">
            <h5 className="text-xs mb-2 pl-5">MENU</h5>
            <SideBarTile Icon={LayoutDashboard} isActive={true} label="Dashboard" />
            <SideBarTile Icon={ClipboardList} isActive={false} hasSuffixCount={true} suffixCount={12} label="Tasks" />
            <SideBarTile Icon={CalendarRange} isActive={false} label="Calender" />
            <SideBarTile Icon={ChartPie} isActive={false} label="Analytics" />
            <SideBarTile Icon={Users} isActive={false} label="Team" />
          </div>
          <div className="mt-10">
            <h5 className="text-xs mb-2 pl-5">GENERAL</h5>
            <SideBarTile Icon={Settings} isActive={false} label="Settings" />
            <SideBarTile Icon={LifeBuoy} isActive={false} label="Help" />
            <SideBarTile Icon={LogOut} isActive={false} label="Logout" />
          </div>

      </section>
      <section className="h-full w-[80%] justify-between flex flex-col">
        {/* General header */}
        <div className="flex px-5 justify-between items-center h-[10%] bg-gray-100 rounded-2xl">
          <SearchInput />
          <div className="flex w-[50%] items-center justify-end">
            <CircleButton icon={Mail} label="Messages" />
            <CircleButton icon={Bell} label="Notifications" />
            <Image src="https://media.licdn.com/dms/image/v2/D4E03AQFYn6PIOkmBzw/profile-displayphoto-crop_800_800/B4EZpTW.7NKkAI-/0/1762335126734?e=1764201600&v=beta&t=6NfYmm2VlwayVvKZ8jVp1t_Pdt2cILSc1I6BPqtiqAQ"
              alt="Profile Picture"
              width={45}
              height={40}
              className="rounded-full m-3 cursor-pointer"
            />
            <div>
              <h4 className="text-sm font-normal">Emmanuel Owusu</h4>
              <span className="text-[10px] text-gray-500">emmanuel.owusu.dev@gmail.com</span>
            </div>
          </div>
        </div>
        {/* Page Content */}
        <div className="h-[88%] bg-gray-100 p-5 rounded-2xl">
          {/* Page Content - Header */}
          <PageHeader/>
          {/* Page Content - Body starts here */}
          {/* Analytical Cards */}
          <div className="flex justify-between">
            <AnalyticalCard title="Total Projects" count={24} 
              description="Increased from last month" trendStatus="increasing"
              trendPercentage={5} isActive={true} 
            />
            <AnalyticalCard title="Ended Projects" count={10} 
              description="Increased from last month" trendStatus="increasing"
              trendPercentage={10} isActive={false} 
            />
            <AnalyticalCard title="Running Projects" count={12} 
              description="Increased from last month" trendStatus="increasing"
              trendPercentage={5} isActive={false} 
            />
            <AnalyticalCard title="Pending Projects" count={2} 
              description="Increased from last month" trendStatus="increasing"
              trendPercentage={5} isActive={false} 
            />
          </div>
          {/* Page Content - Body ends here */}
        </div>
      </section>
    </div>
  );
}
