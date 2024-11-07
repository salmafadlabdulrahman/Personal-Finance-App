import Image from "next/image";

interface TransactionProps {
  transaction: Transaction;
  index: number;
  arrLength: number;
  category?: string;
}

interface Transaction {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

const Transaction = ({
  transaction,
  index,
  arrLength,
  category,
}: TransactionProps) => {
  const convertDate = (transDate: string) => {
    const date = new Date(transDate);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);

    const formattedDateWithComma = formattedDate.replace(
      /(\w{3}) (\d{4})/,
      "$1, $2"
    );
    return formattedDateWithComma;
  };

  return (
    <div>
      <div
        className={`flex-row ${
          category ? "md:h-[60px] h-[70px]" : "h-[90px]"
        } ${index !== arrLength - 1 ? "border-b-[1px] border-gray-200" : ""}`}
      >
        <div className="flex items-center gap-5 ">
          <Image
            src={transaction.avatar}
            alt="avatar"
            height={30}
            width={30}
            className="rounded-full object-fill"
            quality={100}
            unoptimized
          />

          <div>
            <p className="font-bold text-[.9em]">{transaction.name}</p>
            {category && (
              <p className="text-[.8em] text-grey500 md:hidden">{category}</p>
            )}
          </div>
        </div>

        <div
          className={`text-right ${
            category && "md:flex-row md:grow md:max-w-[350px] lg:max-w-[450px]"
          }`}
        >
          {category && (
            <p className="hidden text-[.8em] text-grey500 md:block">
              {category}
            </p>
          )}
          <p
            className={`${
              category ? "md:mb-0" : "mb-2"
            } text-[.9em] font-bold ${
              transaction.amount.toString()[0] === "-"
                ? "text-grey900"
                : "text-green"
            } ${category && "md:order-2"}`}
          >
            {transaction.amount.toString()[0] === "-" ? "-" : ""}$
            {Math.abs(transaction.amount).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="text-[.8em] text-grey500">
            {convertDate(transaction.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
