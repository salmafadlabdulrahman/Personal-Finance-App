import Transaction from "@/app/components/Transaction";
import data from "../../../data.json";
import Image from "next/image";
import Button from "@/app/components/Button";

const Transactions = () => {
  return (
    <div className="pages-padding md:p-9">
      <h3 className="text-[2em] font-bold">Transactions</h3>
      <div className="mt-5 card-style">
        <div className="flex-row border border-indigo-500">
          <div className="button-style flex-row  p-3">
            {" "}
            <input
              type="text"
              placeholder="Search transactions"
              className="text-[.9em] outline-none"
            />
            <Image
              src={"/assets/images/icon-search.svg"}
              alt="magnifying glass"
              width={15}
              height={15}
            />
          </div>

          <div className="hidden md:flex gap-4">
            <Button text="Sort by" sortType="Latest" />
            <Button text="Category" sortType="All transactions" />
          </div>

          <div className="flex items-center gap-6 md:hidden">
            <Image
              src={"/assets/images/icon-sort-mobile.svg"}
              alt="ellipsis icon"
              width={18}
              height={18}
              className="cursor-pointer"
            />
            <Image
              src={"/assets/images/icon-filter-mobile.svg"}
              alt="filter icon"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </div>
        </div>

        
        {data.transactions.map((transaction, i) => (
          <div key={i}>
            <Transaction
              transaction={transaction}
              index={i}
              arrLength={data.transactions.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
/*<div className="hidden md:flex-row text-[.8em]">
          <div className="">Recipient / Sender</div>
          <div className="flex gap-2">
            <p>Category</p>
            <p>Transaction Date</p>
            <p>Amount</p>
          </div>
        </div> */