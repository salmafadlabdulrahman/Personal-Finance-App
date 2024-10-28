interface CardProps {
  category: string;
  val: number;
  background: string;
  textColor: string;
}

const Card = ({ category, val, background, textColor }: CardProps) => {
  return (
    <div className={`${background}  rounded-xl mb-3 px-5 py-4 w-full`}>
      <h3 className={`${textColor} capitalize font-light text-[.9em]`}>
        {category}
      </h3>
      <p className={`${textColor} text-[2em] font-bold mt-2`}>
        ${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  );
};

export default Card;
