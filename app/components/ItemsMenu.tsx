import { ButtonProps, ItemsMenuProps, TransactionProps } from "../types";
import data from "../../data.json";

type combinedProps = ButtonProps & ItemsMenuProps;

const ItemsMenu = ({
  setTransactionsType,
  transactionsType,
  setTransactionCategory,
  transactionsArr,
  setTransactionsArr,
  setOpenList,
  listItems,
}: combinedProps) => {
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
      setOpenList(false);
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
    <div className="bg-white absolute dropdown-list p-3 w-[180px] right-0 mt-2 rounded-lg">
      <ul>
        {listItems.map((item, i) => (
          <li
            key={i}
            className={`${
              i !== listItems.length - 1 ? "border-b-[1px] border-grey100" : ""
            } text-[.9em] p-2 cursor-pointer`}
            onClick={() => transactionsType ? filterType(item) : filterCategory(item) }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsMenu;
