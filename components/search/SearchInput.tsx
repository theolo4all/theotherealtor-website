"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({
  value = "",
  placeholder = "City, Postal Code or MLS® Number",
  onChange,
}: SearchInputProps) {
  return (
    <div className="relative flex-1">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          h-14
w-full
rounded-2xl
border
border-slate-200
bg-white
pl-12
pr-4
text-[15px]
font-medium
text-slate-800
placeholder:text-slate-400
outline-none
shadow-sm
transition-all
duration-300
focus:border-[#c9a84c]
focus:ring-4
focus:ring-[#c9a84c]/20
"
      />
    </div>
  );
}