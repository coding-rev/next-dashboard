"use client"
import SearchInput from '../ui/SearchInput'
import CircleButton from '../ui/CircleButton'
import { Bell, Mail} from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
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
  )
}
