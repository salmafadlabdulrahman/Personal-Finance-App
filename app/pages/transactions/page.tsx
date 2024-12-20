"use client";

import Transaction from "@/app/components/Transaction";
import data from "../../../data.json";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useState } from "react";
import SortByList from "@/app/components/SortByList";
import { categoriesList, typesList } from "@/app/data";
import Pagination from "@/app/components/Pagination";

const ITEMS_PER_PAGE = 10;
const Transactions = () => {
  const [transactionsType, setTransactionsType] = useState("Latest");
  const [transactionCategory, setTransactionCategory] =
    useState("All Transactions");
  const [transactionsArr, setTransactionsArr] = useState(data.transactions);
  const [sortMenu, setSortMenu] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactionsArr.length / ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const allTransactions = [...transactionsArr];
  const filteredTransactions = allTransactions
    .filter((transaction) =>
      transaction.name
        .toLocaleLowerCase()
        .startsWith(searchVal.toLocaleLowerCase())
    )
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
              value={searchVal}
              onChange={(event) => setSearchVal(event.target.value)}
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
              sortType={transactionsType}
              listItems={typesList}
              transactionsType={transactionsType}
              setTransactionsType={setTransactionsType}
              setTransactionCategory={setTransactionCategory}
              transactionCategory={transactionCategory}
              setTransactionsArr={setTransactionsArr}
            />
            <Button
              text="Category"
              sortType={transactionCategory}
              listItems={categoriesList}
              setTransactionCategory={setTransactionCategory}
              transactionCategory={transactionCategory}
              transactionsType={transactionsType}
              setTransactionsType={setTransactionsType}
              setTransactionsArr={setTransactionsArr}
            />
          </div>

          <div className="flex items-center gap-6 md:hidden">
            <div onClick={() => setSortMenu((val) => !val)}>
              <Image
                src={"/assets/images/icon-sort-mobile.svg"}
                alt="ellipsis icon"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              {sortMenu && (
                <SortByList
                  list={typesList}
                  sortingMethod={transactionsType}
                  setTransactionsType={setTransactionsType}
                  setTransactionCategory={setTransactionCategory}
                  transactionsArr={transactionsArr}
                  setTransactionsArr={setTransactionsArr}
                  closeMenu={setSortMenu}
                  menuState={sortMenu}
                  transactionsType={transactionsType}
                  transactionsCategory={transactionCategory}
                  stylePosition="right-20"
                />
              )}
            </div>

            <div onClick={() => setFilterMenu((val) => !val)}>
              <Image
                src={"/assets/images/icon-filter-mobile.svg"}
                alt="filter icon"
                width={18}
                height={18}
                className="cursor-pointer"
              />
              {filterMenu && (
                <SortByList
                  list={categoriesList}
                  sortingMethod={transactionCategory}
                  setTransactionsType={setTransactionsType}
                  setTransactionCategory={setTransactionCategory}
                  transactionsArr={transactionsArr}
                  setTransactionsArr={setTransactionsArr}
                  closeMenu={setFilterMenu}
                  menuState={filterMenu}
                  transactionsType={transactionsType}
                  transactionsCategory={transactionCategory}
                  stylePosition="right-[40px]"
                />
              )}
            </div>
          </div>
        </div>

        <div className="border-b-[1px] border-gray-200 md:pb-8 mt-8">
          <div className="hidden md:flex-row text-[.8em] text-grey500 ">
            <p>Recipient / Sender</p>
            <div className="md:flex-row md:grow md:max-w-[350px] lg:max-w-[470px]">
              <p>Category</p>
              <p className="w-[140px] text-center">Transaction Date</p>
              <p>Amount</p>
            </div>
          </div>
        </div>
        {filteredTransactions.map((transaction, i) => (
          <div key={i}>
            <Transaction
              transaction={transaction}
              index={i}
              arrLength={data.transactions.length}
              category={transaction.category}
            />
          </div>
        ))}

        <div className="mt-9">
          <Pagination
            totalPages={totalPages}
            goToPage={goToPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
