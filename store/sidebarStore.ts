"use client";

import { create } from "zustand";

interface SidebarState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  activeTab: "dashboard",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
