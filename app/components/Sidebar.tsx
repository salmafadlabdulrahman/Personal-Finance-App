"use client";

import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { sidebarNav } from "../data";
import Link from "next/link";
import { useSidebar } from "../SidebarContext";

export default function Sidebar() {
  const { minimizeSidebar, closeSidebar } = useSidebar();

  return (
    <div
      className={`bg-grey900 h-screen ${
        minimizeSidebar ? "w-[90px]" : "w-[305px]"
      } rounded-se-xl fixed flex flex-col`}
    >
      <div className={`mt-8 h-screen`}>
        <Link href={"/"}>
          <div className="pl-8 pt-3">
            <Image
              src={
                minimizeSidebar
                  ? "/assets/images/logo-small.svg"
                  : "/assets/images/logo-large.svg"
              }
              alt="logo"
              width={120}
              height={120}
              className={`${minimizeSidebar ? "w-[15px]" : "w-[120px]"}`}
            />
          </div>
        </Link>

        <div className="mt-[4em]">
          {sidebarNav.map((nav, i) => (
            <div key={i}>
              <SidebarItem
                navText={!minimizeSidebar ? nav.item : ""}
                icon={nav.icon}
                path={nav.path}
                activeIcon={nav.activeIcon}
                miniSidebar={minimizeSidebar}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex items-center gap-3 pb-[4em] pl-6 cursor-pointer"
        onClick={closeSidebar}
      >
        <Image
          src={"/assets/images/icon-minimize-menu.svg"}
          alt="close modal icon"
          width={20}
          height={20}
        />
        <p
          className={`text-grey300 font-bold ${
            minimizeSidebar ? "hidden" : "block"
          }`}
        >
          Minimize Menu
        </p>
      </div>
    </div>
  );
}
