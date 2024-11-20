import { formatNumber } from "../functions";
import { BudgetProps } from "../types";

interface ExpenseProps {
  expenses: BudgetProps[];
  styles?: string;
  budgetPage?: boolean;
}

const Expense = ({ expenses, styles, budgetPage }: ExpenseProps) => {
  return (
    <div className={styles}>
      {" "}
      {expenses.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 w-[50%] md:w-[100%] mb-4 pb-4 ${
            i !== expenses.length - 1 ? "border-b-[1px] border-gray-200" : ""
          } ${budgetPage && "w-full"}`}
        >
          <span
            className={`block ${
              budgetPage ? "h-[20px]" : "h-[40px]"
            } w-[4px] rounded-full`}
            style={{ backgroundColor: item.theme }}
          ></span>
          <div className={`${budgetPage ? "flex-row w-full" : ""}  `}>
            {" "}
            <p className="text-grey500 text-[.9em]">{item.category}</p>
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
