import Image from "next/image";
import Link from "next/link";

interface sidebarItemProps {
  navText: string;
  icon: string;
}

const SidebarItem = ({ navText, icon }: sidebarItemProps) => {
  return (
    <div className="pl-4 w-[280px]">
      <div className="flex items-center gap-4 p-4">
        <Image src={icon} alt="icon" width={15} height={15} />
        <Link href="/pages/transactions" className="text-grey300 font-bold">
          {navText}
        </Link>
      </div>
    </div>
  );
};

export default SidebarItem;
