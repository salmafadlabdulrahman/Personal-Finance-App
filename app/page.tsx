import BudgetsCard from "./components/BudgetsCard";
import PotsCard from "./components/PotsCard";
import RecurringBillsCard from "./components/RecurringBillsCard";
import TransactionsCard from "./components/TransactionsCard";
import Overview from "./pages/overview/page";

export default function Home() {
  return (
    <div>
      <div className="pages-padding md:p-9">
        <Overview />
        <div className="xl:flex gap-5 mt-5">
          <div>
            <PotsCard />
            <TransactionsCard />
          </div>
          <div className="xl:grow">
            <BudgetsCard />
            <RecurringBillsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
