import Image from "next/image";
import Link from "next/link";

interface CardHeaderProps {
  title?: string;
  detailsLink: string;
  link: string;
}

const CardHeader = ({ title, detailsLink, link }: CardHeaderProps) => {
  return (
    <div className="flex-row">
      <p className="font-bold text-[1.3em]">{title ? title : ""}</p>
      {detailsLink && (
        <p className="flex items-center gap-3">
          <Link href={link} className="text-grey500 text-[.9em]">
            {detailsLink}
          </Link>
          <Image
            src={"/assets/images/icon-caret-right.svg"}
            alt="right arrow"
            width={6}
            height={6}
          />
        </p>
      )}
    </div>
  );
};

export default CardHeader;
