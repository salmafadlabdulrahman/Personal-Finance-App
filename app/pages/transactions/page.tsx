import Transaction from "@/app/components/Transaction";
import data from "../../../data.json";
import Image from "next/image";
import Button from "@/app/components/Button";

const Transactions = () => {
  return (
    <div className="pages-padding md:p-9">
      <h3 className="text-[2em] font-bold">Transactions</h3>
      <div className="mt-5 card-style">
        <div className="flex-row gap-2">
          <div className="flex-row border border-grey500 rounded-lg p-3 w-[70%] md:w-[30%] max-w-[320px] ">
            {" "}
            <input
              type="text"
              placeholder="Search transactions"
              className="text-[.9em] outline-none w-full"
            />
            <Image
              src={"/assets/images/icon-search.svg"}
              alt="magnifying glass"
              width={15}
              height={15}
            />
          </div>
          <div className="hidden md:flex gap-4">
            <Button
              text="Sort by"
              sortType="Latest"
              listItems={[
                "Latest",
                "oldest",
                "A to Z",
                "Z to A",
                "Highest",
                "Lowest",
              ]}
            />
            <Button
              text="Category"
              sortType="All transactions"
              listItems={[
                "All Transactions",
                "Dining Out",
                "General",
                "Groceries",
                "Entertainment",
                "Transportation",
                "Lifestyle",
                "Personal Care",
                "Education",
                "Bills",
                "Shopping",
              ]}
            />
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

        <div className="border-b-[1px] border-gray-200 md:pb-8 mt-8 ">
          <div className="hidden md:flex-row text-[.8em] text-grey500">
            <p>Recipient / Sender</p>
            <div className="md:flex-row md:grow md:max-w-[350px] lg:max-w-[450px]">
              <p>Category</p>
              <p>Transaction Date</p>
              <p>Amount</p>
            </div>
          </div>
        </div>
        {data.transactions.map((transaction, i) => (
          <div key={i}>
            <Transaction
              transaction={transaction}
              index={i}
              arrLength={data.transactions.length}
              category={transaction.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
