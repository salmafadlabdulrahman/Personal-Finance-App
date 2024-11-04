import Image from "next/image";

interface CardProps {
  category: string;
  val: number;
  background: string;
  textColor: string;
  icon?: string;
  twoDigits?: boolean
}

const Card = ({ category, val, background, textColor, icon, twoDigits }: CardProps) => {
  return (
    <div
      className={`${background} rounded-xl mb-3 px-5 py-4 w-full ${
        icon ? "flex items-center gap-4" : ""
      }`}
    >
      {icon ? (
        <Image
          src={"/assets/images/icon-pot.svg"}
          alt="pot"
          width={27}
          height={27}
        />
      ) : (
        ""
      )}
      <div>
        <h3 className={`${textColor} capitalize font-light text-[.9em]`}>
          {category}
        </h3>
        <p className={`${textColor} text-[2em] font-bold mt-2`}>
          $
          {twoDigits ? val.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) : val}
        </p>
      </div>
    </div>
  );
};

export default Card;