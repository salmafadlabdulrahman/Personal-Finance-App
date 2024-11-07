import Image from "next/image";

interface ButtonProps {
  text: string;
  sortType: string;
}

const Button = ({ text, sortType }: ButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[.9em] text-grey500">{text}</p>
      <button className="button-style flex-row gap-5 px-4 py-3">
        <p className="text-[.9em]">{sortType}</p>
        <Image
          src={"/assets/images/icon-caret-down.svg"}
          alt="arrow down"
          width={14}
          height={14}
        />
      </button>
    </div>
  );
};

export default Button;
