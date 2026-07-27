"use client";

import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";
import SearchButton from "./SearchButton";

export default function SearchBar() {
  return (
    <div className="grid gap-3 lg:grid-cols-[2.4fr_1fr_1fr_auto]">
      <SearchInput />

      <SearchSelect
        options={[
          "Price",
          "$300k+",
          "$500k+",
          "$700k+",
          "$1M+",
        ]}
      />

      <SearchSelect
        options={[
          "Property",
          "Detached",
          "Semi-Detached",
          "Townhouse",
          "Condo",
        ]}
      />

      <SearchButton />
    </div>
  );
}