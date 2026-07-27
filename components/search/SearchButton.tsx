"use client";

import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick?: () => void;
}

export default function SearchButton({
  onClick,
}: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex
h-14
min-w-[170px]
items-center
justify-center
gap-2
rounded-2xl
bg-[#c9a84c]
px-8
font-semibold
tracking-wide
text-[#0a1628]
shadow-lg
transition-all
duration-300
hover:-translate-y-0.5
hover:bg-[#d8bb66]
hover:shadow-xl
active:translate-y-0
"
    >
      <Search size={18} />
      Search
    </button>
  );
}