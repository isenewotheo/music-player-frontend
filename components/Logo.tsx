import React from "react";

export default function Logo() {
  return (
    <div className="flex   items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-auto h-10 md:h-14"
        baseProfile="basic"
      >
        <path
          fill="hsl(var(--primary))"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
        />
        <path
          fill="#fff"
          d="M19.775,14.821C19.321,14.926,19,15.33,19,15.796V29c0,0.552-0.448,1-1,1h-1c-2.209,0-4,1.343-4,3	s1.791,3,4,3s4-1.343,4-3V21.334c0-0.466,0.321-0.87,0.775-0.974l7.306-1.686C29.551,18.565,30,18.922,30,19.404V26	c0,0.552-0.448,1-1,1h-1c-2.209,0-4,1.343-4,3s1.791,3,4,3s4-1.343,4-3V13.257c0-0.643-0.598-1.119-1.225-0.974L19.775,14.821z"
        />
      </svg>
      <div className="font-extrabold text-2xl ">
        Musîç
      </div>
    </div>
  );
}
