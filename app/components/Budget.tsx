import Image from "next/image";
import { formatNumber } from "../functions";
import LatestSpendings from "./LatestSpendings";

interface BudgetProps {
  budget: BudgetContents;
}

interface BudgetContents {
  category: string;
  amount: number;
  maximum: number;
  theme: string;
}

const Budget = ({ budget }: BudgetProps) => {
  return (
    <div className="card-style">
      <div className="flex-row">
        <div className="flex items-center gap-3">
          <span
            className={`block h-[15px] w-[15px] rounded-full`}
            style={{ backgroundColor: budget.theme }}
          ></span>
          <p className="text-[1.2em] font-bold">{budget.category}</p>
        </div>

        <Image
          src={"/assets/images/icon-ellipsis.svg"}
          width={13}
          height={13}
          alt="three dots icon"
        />
      </div>

      <div className="mt-4">
        <p className="text-grey500 text-[.9em] font-medium">
          Maximum of ${formatNumber(budget.maximum)}
        </p>

        <div className="progress bar"></div>

        <div className="flex items-center">
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