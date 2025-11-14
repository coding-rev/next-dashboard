"user client"
import SideBarTile from '../ui/SideBarTile'
import { LayoutDashboard , ClipboardList, CalendarRange, ChartPie, Users, Settings, LifeBuoy, LogOut, Bell, Mail, Plus} from "lucide-react";
import Image from "next/image";
import { useSidebarStore } from '@/store/sidebarStore';


export default function Sidebar() {
  const activeTab = useSidebarStore((s) => s.activeTab);

  return (
    <section className="bg-gray-100 h-full w-[19%] rounded-2xl">
          <div className="flex items-center p-5">
            <Image src="/donezo-logo.png" alt="Logo" width={60} height={60} />
            <h1 className="ml-2 text-xl font-semibold">Donezo</h1>
          </div>
          <div className="mt-5">
            <h5 className="text-xs mb-2 pl-5">MENU</h5>
            <SideBarTile Icon={LayoutDashboard} tabKey='' isActive={activeTab === "" ? true : false} label="Dashboard"/>
            <SideBarTile Icon={ClipboardList} tabKey='tasks' isActive={activeTab === "tasks" ? true : false} hasSuffixCount={true} suffixCount={12} label="Tasks"/>
            <SideBarTile Icon={CalendarRange} tabKey='calendar' isActive={activeTab === "calendar" ? true : false} label="Calendar"/>
            <SideBarTile Icon={ChartPie} tabKey='analytics' isActive={activeTab === "analytics" ? true : false} label="Analytics"/>
            <SideBarTile Icon={Users} tabKey='team' isActive={activeTab === "team" ? true : false} label="Team"/>
          </div>
          <div className="mt-10">
            <h5 className="text-xs mb-2 pl-5">GENERAL</h5>
            <SideBarTile Icon={Settings} tabKey='settings' isActive={activeTab === "settings" ? true : false} label="Settings" />
            <SideBarTile Icon={LifeBuoy} tabKey='help' isActive={activeTab === "help" ? true : false} label="Help"/>
            <SideBarTile Icon={LogOut} tabKey='logout' isActive={activeTab === "logout" ? true : false} label="Logout"/>
          </div>

      </section>
  )
}
