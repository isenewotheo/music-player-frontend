import React from "react";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mt-10 xs:mt-24 w-full mx-auto overflow-hidden bg-background rounded-lg xs:shadow-md   xs:max-w-sm sm:border">
        {children}
      </div>
    </div>
  );
}
