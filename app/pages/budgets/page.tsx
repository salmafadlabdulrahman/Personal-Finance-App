"use client";
import Expense from "@/app/components/Expense";
import budgetData from "../../../data.json";
import BudgetsCard from "@/app/components/BudgetsCard";
import Budget from "@/app/components/Budget";
import data from "../../../data.json";
import { useState } from "react";

const Budgets = () => {
  const [editBudget, setEditBudget] = useState<boolean>(false);
  return (
    <div className="pages-padding md:p-8">
      <div className="flex-row">
        <h3 className="text-[2em] font-bold">Budgets</h3>
        <button className="bg-grey900 text-white w-[160px] h-[55px] rounded-lg font-bold text-[.9em]">
          + Add New Budget
        </button>
      </div>

      <div className="xl:flex gap-6 xl:mt-6">
        <div className="bg-white mt-8 rounded-xl xl:mt-0 xl:w-[40%] xl:h-[40%]">
          <div className="px-4 md:flex-row md:gap-6 xl:block xl">
            <div className="md:pl-8 md:m-auto">
              <BudgetsCard header={false} expenses={false} />
            </div>
            <div className="md:w-[50%] xl:w-[100%]">
              <h4 className="font-bold">Spending Summary</h4>
              <div className="mt-5">
                <Expense expenses={budgetData.budgets} budgetPage={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 xl:mt-0 xl:grow">
          {data.budgets.map((budget, i) => (
            <div key={i} className="">
              <Budget
                budget={budget}
                editBudget={editBudget}
                setEditBudget={setEditBudget}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgets;
