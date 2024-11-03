import React from "react";
import data from "../../../data.json";
import Card from "@/app/components/Card";

const Overview = () => {
  const { current, income, expenses } = data.balance;
  return (
    <div>
      <h2 className="font-bold text-[2em]">Overview</h2>
      <div className="mt-8 md:flex items-center justify-center gap-5">
        <Card
          category="current Balance"
          val={current}
          background="bg-grey900"
          textColor="text-white"
        />
        <Card
          category="income"
          val={income}
          background="bg-white"
          textColor="text-grey900"
        />
        <Card
          category="expenses"
          val={expenses}
          background="bg-white"
          textColor="text-grey900"
        />
      </div>
    </div>
  );
};

export default Overview;
