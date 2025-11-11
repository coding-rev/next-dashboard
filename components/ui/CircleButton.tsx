"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface CircleButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  label?: string; 
  size?: number;
  borderColor?: string;
}

export default function CircleButton({ icon: Icon, onClick, label, size=40, borderColor="white"}: CircleButtonProps) {
  return (
    <div>
        <button
            onClick={onClick}
            aria-label={label || "icon button"}
            style={{ width: size, height: size, borderColor: borderColor }}
            className={`
                flex items-center justify-center
                mx-2 my-2
                rounded-full
                border
                bg-white
                active:scale-95
                transition
                cursor-pointer
            `}
        >
        <Icon className="w-4 h-4 text-gray-500" />
        </button>
    </div>
  );
}
