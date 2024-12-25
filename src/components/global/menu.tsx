"use client";

import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuIcon
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute left-0 top-20 z-10 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 bg-black text-xl text-white">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">{"Cart()"}</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
