import data from "../../data.json";
import CardHeader from "./CardHeader";
import Transaction from "./Transaction";

const TransactionsCard = () => {
  const transactionsData = data.transactions.slice(0, 5);

  return (
    <div className="card-style">
      <CardHeader
        title={`Transactions`}
        detailsLink={`View All`}
        link="/pages/transactions"
      />

      {transactionsData.map((transaction, i) => (
        <div key={i}>
          <Transaction
            transaction={transaction}
            index={i}
            arrLength={transactionsData.length}
          />
        </div>
      ))}
    </div>
  );
};

export default TransactionsCard;
