import data from "../../../data.json"

console.log(data.transactions)
const Transactions = () => {
  return (
    <div className="pages-padding md:p-9">
      <h3 className="text-[2em] font-bold">Transactions</h3>
      <div className="mt-5 card-style">
        {data.transactions.map((transaction, i) => (
          <div key={i}>
            <h1>{transaction.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
