import Image from "next/image";
import data from "../../data.json";
import CardHeader from "./CardHeader";

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
    <div className="card-style md:p-[2em] ">
      <CardHeader title="Transactions" detailsLink="View All" />

      <div>
        {transactionsData.map((transaction, i) => (
          <div
            key={i}
            className={`flex items-center justify-between h-[90px] ${
              i !== transactionsData.length - 1
                ? "border-b-[1px] border-gray-200"
                : ""
            }`}
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
