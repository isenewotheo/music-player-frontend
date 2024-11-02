import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AuthHeader() {
  return (
    <header className="header">
      <div className="container">
        <nav className="flex items-center justify-between">
            <Logo />
            <div className="flex gap-4">
                <Button size={'sm'} className="text-foreground px-10" variant={'outline'} asChild>
                    <Link href={'/auth/login'}>Login</Link>
                </Button>
                <Button size={'sm'} className="text-white px-10 hover:bg-primary" asChild>
                    <Link href={'/auth/sign-up'}>Sign up</Link>
                </Button>
            </div>
        </nav>
      </div>
    </header>
  );
}

export default AuthHeader;
