import { LucideIcon } from "lucide-react";

interface SideBarTileProps {
  isActive: boolean;
  label: string;
  Icon: LucideIcon;
  hasSuffixCount?: boolean;
  suffixCount?: number;
}

export default function SideBarTile({isActive, label, Icon, hasSuffixCount = false, suffixCount = 0}: SideBarTileProps) {
  return (
    <div className="flex justify-between items-center mb-4 cursor-pointer text-gray-400">
        <div className="flex items-center" >
            <div className={`${isActive === true ? 'bg-[var(--color-primary)] h-10 w-2 rounded-r-xl' : ''}`}></div>
            <div className={`flex items-center ${isActive === true ? 'ml-5' : 'ml-7'}`}>
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
