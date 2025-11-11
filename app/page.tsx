import Image from "next/image";
import { LayoutDashboard , ClipboardList, CalendarRange, ChartPie, Users, Settings, LifeBuoy, LogOut} from "lucide-react";
import SideBarTile from "@/components/ui/SideBarTile";

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
        <div className="h-[10%] bg-gray-100 rounded-2xl"></div>
        <div className="h-[88%] bg-gray-100 rounded-2xl"></div>
      </section>
    </div>
  );
}
