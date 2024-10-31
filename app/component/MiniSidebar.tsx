"use client";
import Link from "next/link";
import { sidebarNav } from "../data";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MiniSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="relative">
      <div className="bg-grey900 fixed bottom-0 w-full h-[55px] md:h-[80px] rounded-t-xl px-2 ">
        <div className="flex justify-around h-full ">
          {sidebarNav.map((nav, i) => (
            <div
              key={i}
              className={`cursor-pointer ${
                pathname === nav.path
                  ? "bg-beige-100 border-b-4 border-green "
                  : ""
              } w-[90px] md:w-[120px] lg:w-[150px]  flex justify-center mt-3 rounded-t-xl`} 
            >
              <Link href={nav.path}>
                <div className="flex md:flex-col items-center h-full ">
                  <Image
                    src={pathname === nav.path ? nav.activeIcon : nav.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    className="md:mt-3"
                  />
                  <p
                    className={`hidden md:block font-bold ${
                      pathname === nav.path ? "text-grey900" : "text-grey300"
                    } text-[13px] mt-2`}
                  >
                    {nav.item}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniSidebar;