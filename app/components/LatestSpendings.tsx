import Image from "next/image";
import Link from "next/link";
import data from "../../data.json";
import { convertDate, formatNumber } from "../functions";

interface LatestSpendingsProps {
  category: string;
}

const LatestSpendings = ({ category }: LatestSpendingsProps) => {
  const filteredTransactions = data.transactions.filter(
    (transaction) => transaction.category === category
  );
  return (
    <div className="bg-beige-100 rounded-lg p-3">
      <div className="flex-row">
        <p className="font-bold">Latest Spending</p>
        <Link href={"/pages/transactions"} className="flex items-center gap-2">
          <p className="text-[.9em] text-grey500">See All</p>
          <Image
            src={"/assets/images/icon-caret-right.svg"}
            width={6}
            height={6}
            alt="right arrow"
          />
        </Link>
      </div>

      <div className="mt-4">
        {filteredTransactions.map((transaction, i) => (
          <div
            key={i}
            className={`flex-row ${
              i !== filteredTransactions.length - 1
                ? "border-b-[1px] border-gray-200 py-3"
                : "pt-2"
            }`}
          >
            <p className="font-bold text-[.9em]">{transaction.name}</p>
            <div>
              <p className="text-right font-bold text-[.9em]">
                {transaction.amount.toString()[0] === "-" ? "-" : ""}$
                {formatNumber(Math.abs(transaction.amount))}
              </p>
              <p className="text-grey500 text-[.8em] mt-2">
                {convertDate(transaction.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSpendings;
