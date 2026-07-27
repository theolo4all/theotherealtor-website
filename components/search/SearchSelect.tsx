"use client";

interface SearchSelectProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchSelect({
  options,
  value = "",
  onChange,
}: SearchSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="
        h-14
rounded-2xl
border
border-slate-200
bg-white
px-4
text-[15px]
font-medium
text-slate-800
shadow-sm
outline-none
transition-all
duration-300
focus:border-[#c9a84c]
focus:ring-4
focus:ring-[#c9a84c]/20
"
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}