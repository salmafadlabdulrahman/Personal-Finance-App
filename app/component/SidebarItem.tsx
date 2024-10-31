'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface sidebarItemProps {
  navText: string;
  icon: string;
  path: string;
  activeIcon: string;
}

const SidebarItem = ({ navText, icon, path, activeIcon }: sidebarItemProps) => {
  const pathname = usePathname();
  return (
    <div className={`pl-4 w-[270px]  ${ pathname === path ? 'bg-beige-100 border-l-4 border-green': ""} rounded-r-xl`}>
      <div className="flex items-center gap-4 p-4">
        <Image src={pathname === path ? activeIcon : icon} alt="icon" width={15} height={15} />
        <Link href={path} className={`${pathname === path ? "text-grey900" : "text-grey300"} font-bold`}>
          {navText}
        </Link>
      </div>
    </div>
  );
};

export default SidebarItem;