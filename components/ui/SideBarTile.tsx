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
            <div className={`${isActive === true ? 'h-10 w-2 bg-green-800 rounded-r-xl' : ''}`}></div>
            <div className={`flex items-center ${isActive === true ? 'ml-5' : 'ml-7'}`}>
                <Icon size={18} color={`${isActive === true ? "green": "gray"}`}/>
                <span className={`ml-4 text-sm ${isActive === true ? 'text-black' : ''}`}>
                    { label }
                </span>
            </div>
        </div>
        {   hasSuffixCount &&
            <div className="text-xs px-1 text-white mr-5 bg-green-900 rounded">
                {suffixCount}+
            </div>
        }
    </div>
  )
}
