import React from "react";
import CardHeader from "./CardHeader";
import BudgetCircleChart from "./BudgetCircleChart";
import budgetData from "../../data.json";
import Expense from "./Expense";

const budgets = budgetData.budgets;
const BudgetsCard = ({ header = true, expenses = true }) => {
  return (
    <div className={`card-style mb-[2em] lg:mb-0 lg:pt-[2em] lg:pb-[4em] `}>
      {header && (
        <CardHeader
          title="Budgets"
          detailsLink="See Details"
          link="/pages/budgets"
        />
      )}
      <div className="md:flex-row lg:gap-5 lg:mt-10">
        <div className="m-auto">
          <BudgetCircleChart data={budgets} />
        </div>
        <div>
          {expenses && (
            <Expense
              expenses={budgets}
              styles="flex flex-wrap mt-5 md:flex-col md:items-end"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetsCard;
