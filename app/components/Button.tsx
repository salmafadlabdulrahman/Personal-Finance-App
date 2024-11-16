"use client";

import Image from "next/image";
import { useState } from "react";
import { ButtonProps } from "../types";
import SortByList from "./SortByList";

const Button = ({
  text,
  sortType,
  listItems,
  setTransactionsType,
  transactionsType,
  transactionCategory,
  setTransactionsArr,
  setTransactionCategory,
}: ButtonProps) => {
  const [openList, setOpenList] = useState(false);

  const toggleList = () => {
    setOpenList((val) => !val);
  };


  return (
    <div className="relative">
      <div className="flex items-center gap-2" onClick={toggleList}>
        <p className="text-[.9em] text-grey500">{text}</p>
        <button className="button-style flex-row gap-5 px-4 py-3">
          <p className="text-[.9em]">
            {sortType}
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
        <SortByList
          list={listItems}
          setTransactionsArr={setTransactionsArr}
          setTransactionsType={setTransactionsType}
          setTransactionCategory={setTransactionCategory}
          setOpenList={setOpenList}
          transactionsType={transactionsType}
          transactionsCategory={transactionCategory}
        />
      )}
    </div>
  );
};

export default Button;
