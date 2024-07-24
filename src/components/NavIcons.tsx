"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setisProfileOpen] = useState<Boolean>(false);
  const [isCartOpen, setisCartOpen] = useState<Boolean>(false);
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setisProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer ">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notify"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/cart.png"
        alt="cart"
        width={22}
        height={22}
        className="cursor-pointer"
      />
    </div>
  );
};

export default NavIcons;
