import PotsCard from "./components/PotsCard";
import RecurringBillsCard from "./components/RecurringBillsCard";
import TransactionsCard from "./components/TransactionsCard";
import Overview from "./pages/overview/page";

export default function Home() {
  return (
    <div>
      <div className="p-5 md:p-9 ">
        <Overview />
        <div className="lg:flex items-center gap-3">
          <div>
            <PotsCard />
            <TransactionsCard />
          </div>
          <div>
            <RecurringBillsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
