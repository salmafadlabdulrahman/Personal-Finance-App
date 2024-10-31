import Image from "next/image";
import SidebarItem from "./SidebarItem";

const sidebarNav = [
  {
    item: "Overview",
    icon: "/assets/images/icon-nav-overview.svg",
    path: "/",
    activeIcon: "/assets/images/icon-nav-overview-active.svg",
  },
  {
    item: "Transactions",
    icon: "/assets/images/icon-nav-transactions.svg",
    path: "/pages/transactions",
    activeIcon: "/assets/images/icon-nav-transactions-active.svg",
  },
  {
    item: "Budgets",
    icon: "/assets/images/icon-nav-budgets.svg",
    path: "/pages/budgets",
    activeIcon: "/assets/images/icon-nav-budgets-active.svg",
  },
  {
    item: "Pots",
    icon: "/assets/images/icon-nav-pots.svg",
    path: "/pages/pots",
    activeIcon: "/assets/images/icon-nav-pots-active.svg",
  },
  {
    item: "Recurring bills",
    icon: "/assets/images/icon-nav-recurring-bills.svg",
    path: "/pages/recurringbills",
    activeIcon: "/assets/images/icon-nav-recurring-bills-active.svg",
  },
];

export default function Sidebar() {
  return (
    <div className="bg-grey900 h-screen w-[305px] rounded-se-xl fixed flex flex-col">
      <div className="mt-8 h-screen">
        <div className="pl-8 pt-3">
          <Image
            src={"/assets/images/logo-large.svg"}
            alt="logo"
            width={120}
            height={120}
          />
        </div>

        <div className="mt-[4em]">
          {sidebarNav.map((nav, i) => (
            <div key={i}>
              <SidebarItem navText={nav.item} icon={nav.icon} path={nav.path} activeIcon={nav.activeIcon} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pb-[4em] pl-6">
        <Image
          src={"/assets/images/icon-minimize-menu.svg"}
          alt="close modal icon"
          width={20}
          height={20}
        />
        <p className="text-grey300 font-bold">Minimize Menu</p>
      </div>
    </div>
  );
}
