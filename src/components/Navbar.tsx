"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import furnitureLogo from "../app/images/furniture-logo.webp";
import NavCartIcon from "./NavCartIcon";
import NavSearch from "./NavSearch";

const NAV_MENU = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Collection",
    href: "/collection/all",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

interface NavMenuItemProps {
  href: string;
  title: string;
}

const NavMenuItem = ({ href, title }: NavMenuItemProps) => {
  const pathname = usePathname();
  const isCurrentRoute = pathname === href;
  const textColor = isCurrentRoute ? "#3c82f6" : "#6c757d";
  return (
    <li
      className={`list-none px-[22.5px] py-[11px] font-[family-name:var(--font-poppins)] font-[400]`}
      style={{
        color: textColor,
        borderBottom: isCurrentRoute
          ? `2.5px solid ${textColor}`
          : "transparent",
      }}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default function Navbar() {
  return (
    <nav className="navbar bg-white w-full h-[90px] sticky top-0 flex items-end justify-between border-b-[1px] border-b-gray-200 px-[30px] z-50">
      <ul className="flex">
        {NAV_MENU.map((item) => {
          return (
            <NavMenuItem title={item?.title} href={item?.href} key={item?.id} />
          );
        })}
      </ul>
      <Image
        src={furnitureLogo}
        alt="furniture-shop-logo"
        width={100}
        height={100}
        className="absolute left-[calc(50%-50px)]"
      />
      <div className="flex items-center py-[11px] gap-6">
        <NavSearch />
        <NavCartIcon />
      </div>
    </nav>
  );
}
