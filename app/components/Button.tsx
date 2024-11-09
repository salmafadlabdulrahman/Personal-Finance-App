"use client";

import Image from "next/image";
import { useState } from "react";

interface ButtonProps {
  text: string;
  sortType: string;
  listItems: string[];
  transactionsType?: string;
  transactionCategory?: string;
  setTransactionsType?: (type: string) => void;
  setTransactionCategory?: (type: string) => void;
}

const Button = ({ text, sortType, listItems, setTransactionsType, setTransactionCategory, transactionsType, transactionCategory }: ButtonProps) => {
  const [openList, setOpenList] = useState(false);

  const toggleList = () => {
    setOpenList((val) => !val);
  };

  const handleItemClick = (item: string) => {
    if(setTransactionsType) {
      setTransactionsType(item); 
      console.log(transactionsType)
    } if(setTransactionCategory) {
      setTransactionCategory(item)
      console.log(transactionCategory)
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2" onClick={toggleList}>
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
                 onClick={() => handleItemClick(item)}
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
