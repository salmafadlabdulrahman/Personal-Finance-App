import Image from "next/image";
import Link from "next/link";
import data from "../../data.json";

const TransactionsCard = () => {
  const transactionsData = data.transactions.slice(0, 5);

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
    <div className="card-style mb-[5em]">
      <div className="flex-row ">
        <p className="font-bold text-[1.3em]">Transactions</p>
        <p className="flex items-center gap-3">
          <Link href={"/pages/pots"} className="text-grey500 text-[.9em]">
            View All
          </Link>
          <Image
            src={"/assets/images/icon-caret-right.svg"}
            alt="right arrow"
            width={6}
            height={6}
          />
        </p>
      </div>

      <div className="">
        {transactionsData.map((transaction, i) => (
          <div
            key={i}
            className="flex items-center justify-between h-[90px] border-b-[1px] border-gray-200"
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
              <p className="font-bold text-[.9em]">{transaction.name}</p>
            </div>
            <div className="text-right">
              <p
                className={`mb-2 text-[.9em] font-bold ${
                  transaction.amount.toString().split("")[0] === "-"
                    ? "text-grey900"
                    : "text-green"
                }`}
              >
                $
                {transaction.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="text-[.8em] text-grey500">
                {convertDate(transaction.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsCard;
