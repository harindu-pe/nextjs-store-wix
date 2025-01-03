"use client";

import { Bell, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "../global/cart-modal";

const HeaderIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  // TEMP
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      <UserRound className="cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute left-0 top-12 z-20 rounded-md p-4 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Bell className="cursor-pointer" />
      <div className="relative cursor-pointer">
        <ShoppingCart onClick={() => setIsCartOpen((prev) => !prev)} />
        <div className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm text-white">
          2
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
};

export default HeaderIcons;
