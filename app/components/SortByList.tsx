import { categoriesList, typesList } from "../data";
import { SortByListProps, TransactionProps } from "../types";
import data from "../../data.json";

const SortByList = ({
  list,
  setTransactionsType,
  setTransactionCategory,
  setTransactionsArr,
  setOpenList,
  transactionsType,
  transactionsCategory,
}: SortByListProps) => {
  const sortList = (item: string) => {
    const sortTypes: Record<
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

    const curCategory = categoriesList.includes(item)
      ? item
      : transactionsCategory;
    const curType = typesList.includes(item) ? item : transactionsType;

    const allTransactions = data.transactions;

    const filteredTransactions =
      curCategory === "All Transactions"
        ? allTransactions
        : allTransactions.filter(
            (transaction) => transaction.category === curCategory
          );

    const compareFn = sortTypes[curType];
    const newTransactions = [...filteredTransactions].sort(compareFn);

    setTransactionsArr(newTransactions);
    setOpenList(false);
    setTransactionsType(curType);
    setTransactionCategory(curCategory);
  };

  return (
    <div className="bg-white absolute dropdown-list p-3 w-[180px] right-0 mt-2 rounded-lg">
      <ul>
        {list.map((item, i) => (
          <li
            key={i}
            className={`${
              i !== list.length - 1 ? "border-b-[1px] border-grey100" : ""
            } text-[.9em] p-2 cursor-pointer`}
            onClick={() => sortList(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortByList;
