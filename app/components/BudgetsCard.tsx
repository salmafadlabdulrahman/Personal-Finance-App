import React from "react";
import CardHeader from "./CardHeader";
import BudgetCircleChart from "./BudgetCircleChart";
import budgetData from "../../data.json";

const budgets = budgetData.budgets;
const BudgetsCard = () => {
  return (
    <div
      className={`card-style mb-[2em] lg:mb-0 lg:pt-[2em] lg:pb-[4em] lg:px-[2em]`}
    >
      <CardHeader
        title="Budgets"
        detailsLink="See Details"
        link="/pages/budgets"
      />
      <div className="md:flex-row lg:gap-5 lg:mt-10">
        <div className="m-auto">
          <BudgetCircleChart data={budgets} />
        </div>
        <div className="flex flex-wrap mt-5 md:flex-col md:items-end">
          {budgets.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 w-[50%] md:w-[100%] mb-4 md:px-2 md:p-0"
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
    </div>
  );
};

export default BudgetsCard;
