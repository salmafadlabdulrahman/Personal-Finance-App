import PotsCard from "./components/PotsCard";
import TransactionsCard from "./components/TransactionsCard";
import Overview from "./pages/overview/page";

export default function Home() {
  return (
    <div>
      <div className="p-5 md:p-9 ">
        <Overview />
        <div>
          <PotsCard />
          <TransactionsCard />
        </div>
      </div>
    </div>
  );
}
