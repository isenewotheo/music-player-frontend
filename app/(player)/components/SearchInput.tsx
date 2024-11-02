import React, { useState } from "react";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  const [searchQuery, setSearchQuery]: [Boolean, Function] = useState(false);

  return (
    <div>
      <div className="flex">
        <div className="-mr-8 z-10 w-6 h-1/2 my-auto p-1 grid place-items-center rounded-sm transition-all hover:bg-accent cursor-pointer bg-inherit">
          <Search size={"15"} />
        </div>
        <Input
          className="bg-inherit pl-8"
          type="text"
          id="search"
          onChange={(t) => setSearchQuery(t.target.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
