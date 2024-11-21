import Image from "next/image";
import { formatNumber } from "../functions";
import LatestSpendings from "./LatestSpendings";

interface BudgetProps {
  budget: BudgetContents;
  editBudget: boolean;
  setEditBudget: React.Dispatch<React.SetStateAction<boolean>>;
}

interface BudgetContents {
  category: string;
  amount: number;
  maximum: number;
  theme: string;
}

const Budget = ({ budget, editBudget, setEditBudget }: BudgetProps) => {
  const spentPercentage = budget.amount / budget.maximum * 100;
  return (
    <div className="card-style md:p-8">
      <div className="flex-row relative">
        <div className="flex items-center gap-3">
          <span
            className={`block h-[15px] w-[15px] rounded-full`}
            style={{ backgroundColor: budget.theme }}
          ></span>
          <p className="text-[1.2em] font-bold">{budget.category}</p>
        </div>

        <div
          onClick={() => setEditBudget(() => !editBudget)}
          className="cursor-pointer"
        >
          <Image
            src={"/assets/images/icon-ellipsis.svg"}
            width={13}
            height={13}
            alt="three dots icon"
          />
        </div>

        {editBudget && (
          <div className="card-style rounded-md absolute right-0 top-8 box-shadow text-[.9em]">
            <div className="border-b-[1px] pb-2 border-gray-200">
              Edit Budgets
            </div>
            <div className="mt-2 text-red">Delete Budgets</div>
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className="text-grey500 text-[.9em] font-medium">
          Maximum of ${formatNumber(budget.maximum)}
        </p>

        <div className="bg-beige-100 rounded-md mt-5 w-full h-[38px] flex items-center">
          <div
            className={`rounded-md h-[28px] mx-1`}
            style={{ backgroundColor: budget.theme, width: `${spentPercentage}%` }}
          ></div>
        </div>

        <div className="flex items-center mt-2">
          <div className="flex items-center gap-3 mt-4 w-[50%]">
            <span
              className="block h-[40px] w-[4px] rounded-full"
              style={{ backgroundColor: budget.theme }}
            ></span>
            <div>
              <p className="text-grey500 text-[.8em] ">Spent</p>
              <p className="font-bold text-[.9em]">
                ${formatNumber(budget.amount)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 w-[50%]">
            <span
              className="block h-[40px] w-[4px] rounded-full"
              style={{ backgroundColor: "#F8F4F0" }}
            ></span>
            <div>
              <p className="text-grey500 text-[.8em] ">Free</p>
              <p className="font-bold text-[.9em]">
                ${formatNumber(budget.maximum - budget.amount)}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <LatestSpendings category={budget.category} />
        </div>
      </div>
    </div>
  );
};

export default Budget;
