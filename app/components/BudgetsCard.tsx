import React from "react";
import CardHeader from "./CardHeader";
import BudgetCircleChart from "./BudgetCircleChart";
import budgetData from "../../data.json";

const budgets = budgetData.budgets;
const BudgetsCard = () => {
  return (
    <div className="card-style">
      <CardHeader title="Budgets" detailsLink="See Details" />
      <BudgetCircleChart data={budgets} />
      <div className="flex flex-wrap mt-5">
        {budgets.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 w-[50%] mb-4  md:px-2 md:p-0 "
          >
            <span
              className={`block h-[40px] w-[4px] rounded-full`}
              style={{ backgroundColor: item.theme }}
            ></span>
            <div>
              <p className="text-grey500 text-[.8em]">{item.category}</p>
              <p className="text-grey900 font-bold text-[.9em]">
                ${item.maximum}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetsCard;
