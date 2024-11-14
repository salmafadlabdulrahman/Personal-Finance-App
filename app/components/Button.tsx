"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonProps, TransactionProps } from "../types";
import data from "../../data.json";

const Button = ({
  text,
  sortType,
  listItems,
  setTransactionsType,
  transactionsType,
  transactionCategory,
  transactionsArr,
  setTransactionsArr,
  setTransactionCategory,
}: ButtonProps) => {
  const [openList, setOpenList] = useState(false);

  const toggleList = () => {
    setOpenList((val) => !val);
  };

  const filterType = (sortingType: string) => {
    if (!setTransactionsType) return;
    const allTransactions = [...transactionsArr];

    const comparisonFunctions: Record<
      string,
      (a: TransactionProps, b: TransactionProps) => number
    > = {
      Lowest: (a, b) => a.amount - b.amount,
      Highest: (a, b) => b.amount - a.amount,
      "A to Z": (a, b) => a.name.localeCompare(b.name),
      "Z to A": (a, b) => b.name.localeCompare(a.name),
      Oldest: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      Latest: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    };

    const compareFn = comparisonFunctions[sortingType];
    if (compareFn) {
      allTransactions.sort(compareFn);
      setTransactionsArr(allTransactions);
      setTransactionsType(sortingType);
      setOpenList(false);
    }
  };

  const filterCategory = (category: string) => {
    if (!setTransactionCategory) return;

    const allTransactions = data.transactions;

    if (category === "All Transactions") {
      setTransactionsArr(allTransactions);
      return;
    }

    const filteredTransactions = allTransactions.filter(
      (transaction) => transaction.category === category
    );

    setTransactionsArr(filteredTransactions);
    setTransactionCategory(category);
    setOpenList(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2" onClick={toggleList}>
        <p className="text-[.9em] text-grey500">{text}</p>
        <button className="button-style flex-row gap-5 px-4 py-3">
          <p className="text-[.9em]">
            {transactionsType || transactionCategory
              ? transactionsType || transactionCategory
              : sortType}
          </p>
          <Image
            src={"/assets/images/icon-caret-down.svg"}
            alt="arrow down"
            width={14}
            height={14}
          />
        </button>
      </div>

      {openList && (
        <div className="bg-white absolute dropdown-list p-3 w-[180px] right-0 mt-2 rounded-lg">
          <ul>
            {listItems.map((item, i) => (
              <li
                key={i}
                className={`${
                  i !== listItems.length - 1
                    ? "border-b-[1px] border-grey100"
                    : ""
                } text-[.9em] p-2 cursor-pointer`}
                onClick={() =>
                  transactionsType ? filterType(item) : filterCategory(item)
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;
