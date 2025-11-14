import { useSidebarStore } from "@/store/sidebarStore";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface SideBarTileProps {
  isActive: boolean;
  label: string;
  Icon: LucideIcon;
  tabKey: string;
  hasSuffixCount?: boolean;
  suffixCount?: number;
}


export default function SideBarTile({isActive, label, Icon, tabKey, hasSuffixCount = false, suffixCount = 0}: SideBarTileProps) {
    const router = useRouter();

    const setActiveTab = useSidebarStore((s) => s.setActiveTab);
    const handleClick = (tab: string) => {
        setActiveTab(tab);
        router.push(`/${tab}`);
    };

    return (
    <div onClick={()=> handleClick(tabKey)} className="flex justify-between items-center mb-1 cursor-pointer text-gray-400">
        <div className="flex items-center" >
            <div className={`${isActive === true ? 'bg-[var(--color-primary)] h-10 w-2 rounded-r-xl transition ease-in duration-300' : 'h-10 w-2'}`}></div>
            <div className={`flex items-center ${isActive === true ? 'ml-5' : 'ml-5'}`}>
                <Icon size={20} color={`${isActive === true ? "var(--color-primary)": "gray"}`}/>
                <span className={`ml-4 text-base ${isActive === true ? 'text-black' : ''}`}>
                    { label }
                </span>
            </div>
        </div>
        {   hasSuffixCount &&
            <div className="text-xs px-1 text-white mr-5 bg-[var(--color-primary)] rounded">
                {suffixCount}+
            </div>
        }
    </div>
  )
}
