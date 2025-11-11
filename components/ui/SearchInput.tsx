"use client";

import React from "react";
import { Search } from "lucide-react";

const SearchInput: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-[30%] h-11 px-3 rounded-3xl bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)]">
      {/* Left Section: Search Icon + Input */}
      <div className="flex items-center gap-2 flex-grow">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search task"
          className="flex-grow outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Right Section: Keyboard Shortcut */}
      <div className="flex items-center gap-1 text-black text-xs rounded-md px-2 py-0.5 bg-gray-200">
        <kbd className="font-semibold">⌘</kbd>
        <span>F</span>
      </div>
    </div>
  );
};

export default SearchInput;
