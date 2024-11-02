import React, { useState } from "react";

import {  LucideEyeOff, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function PasswordInput() {
  const [showPassword, setShowPassword]: [Boolean, Function] = useState(false);

  return (
    <div>
      <div className="flex ">
        <Input
          className="bg-secondary"
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password"
        />

        <div
          className="-ml-8 w-6 h-1/2 my-auto p-1 grid place-items-center rounded-sm transition-all hover:bg-slate-500 cursor-pointer bg-secondary"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={"15"} /> : <LucideEyeOff size={"15"} />}
        </div>
      </div>
    </div>
  );
}
