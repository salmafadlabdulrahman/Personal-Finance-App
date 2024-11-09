import { BudgetProps } from "../types";

interface ExpenseProps {
  expenses: BudgetProps[];
  styles?: string;
  budgetPage?: boolean;
}

const Expense = ({ expenses, styles, budgetPage }: ExpenseProps) => {
  const formatNumber = (val: number) => {
    const formattedNumber = val.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedNumber;
  };

  return (
    <div className={styles}>
      {" "}
      {expenses.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 w-[50%] md:w-[100%] mb-4 md:px-2 md:p-0 ${
            budgetPage && "w-full"
          }`}
        >
          <span
            className={`block ${
              budgetPage ? "h-[20px]" : "h-[40px]"
            } w-[4px] rounded-full`}
            style={{ backgroundColor: item.theme }}
          ></span>
          <div className={`${budgetPage ? "flex-row w-full" : ""} `}>
            {" "}
            <p className="text-grey500 text-[.8em]">{item.category}</p>
            {budgetPage ? (
              <div className="flex items-center gap-2">
                <p className="text-grey900 font-bold text-[.9em]">
                  ${formatNumber(item.amount)}
                </p>
                <p className="text-grey500 text-[.8em] font-bold">
                  of ${formatNumber(item.maximum)}
                </p>
              </div>
            ) : (
              <p className="text-grey900 font-bold text-[.9em]">
                ${item.maximum}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expense;
