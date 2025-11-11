"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface AppButtonProps {
  label: string;
  prefixIcon?: LucideIcon;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
}

export default function AppButton({
  label,
  prefixIcon: Icon,
  onClick,
  bgColor = "bg-[var(--color-primary)]",
  textColor = "text-white",
}: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        px-4 py-3
        mx-2 cursor-pointer
        rounded-full
        text-xs
        ${bgColor} ${textColor}
        border border-green-700
        hover:opacity-90
        active:scale-95
        transition
      `}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      <span>{label}</span>
    </button>
  );
}
