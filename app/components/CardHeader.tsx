import Image from "next/image";
import Link from "next/link";

interface CardHeaderProps {
  title: string;
  detailsLink: string;
}

const CardHeader = ({ title, detailsLink }: CardHeaderProps) => {
  return (
    <div className="flex-row">
      <p className="font-bold text-[1.3em]">{title}</p>
      <p className="flex items-center gap-3">
        <Link href={"/pages/pots"} className="text-grey500 text-[.9em]">
          {detailsLink}
        </Link>
        <Image
          src={"/assets/images/icon-caret-right.svg"}
          alt="right arrow"
          width={6}
          height={6}
        />
      </p>
    </div>
  );
};

export default CardHeader;
