"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface sidebarItemProps {
  navText?: string;
  icon: string;
  path: string;
  activeIcon: string;
  miniSidebar: boolean;
}

const SidebarItem = ({
  navText,
  icon,
  path,
  activeIcon,
  miniSidebar,
}: sidebarItemProps) => {
  const pathname = usePathname();
  return (
    <div
      className={`pl-4 ${miniSidebar ? "w-[80px]" : "w-[270px]"} ${
        pathname === path ? "bg-beige-100 border-l-4 border-green" : ""
      } rounded-r-xl`}
    >
      <Link
        href={path}
        className={`${
          pathname === path ? "text-grey900" : "text-grey300"
        } font-bold`}
      >
        <div className="flex items-center gap-4 p-4">
          <Image
            src={pathname === path ? activeIcon : icon}
            alt="icon"
            width={15}
            height={15}
            className={`${miniSidebar ? "w-[18px]" : "w-[15px]"}`}
          />

          {navText}
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
