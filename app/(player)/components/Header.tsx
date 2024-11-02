"use client";
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidenav from "./Sidenav";

function Header() {
  return (
    <header className="header player__header">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger className="border-none focus:border-none">
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent className="p-0 w-fit" side={"left"}>
              <Sidenav></Sidenav>
            </SheetContent>
          </Sheet>
          <Logo />
          <SearchInput />
        </nav>
      </div>
    </header>
  );
}

export default Header;
