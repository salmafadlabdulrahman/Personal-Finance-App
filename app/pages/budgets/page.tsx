import Expense from "@/app/components/Expense";
import budgetData from "../../../data.json";
import BudgetsCard from "@/app/components/BudgetsCard";
import Budget from "@/app/components/Budget";
import data from "../../../data.json"

const Budgets = () => {
  return (
    <div className="pages-padding">
      <div className="flex-row">
        <h3 className="text-[2em] font-bold">Budgets</h3>
        <button className="bg-grey900 text-white w-[160px] h-[55px] rounded-lg font-bold text-[.9em]">
          + Add New Budget
        </button>
      </div>
      <div className="bg-white mt-8 rounded-xl">
        <div className="px-4">
          <BudgetsCard header={false} expenses={false} />
          <h4 className="font-bold">Spending Summary</h4>
          <div className="mt-5">
            <Expense expenses={budgetData.budgets} budgetPage={true} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        {data.budgets.map((budget, i) => (
          <div key={i}>
            <Budget budget={budget} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budgets;
