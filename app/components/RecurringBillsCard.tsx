import CardHeader from "./CardHeader";

const bills = [
  { billType: "Paid Bills", amount: 190, theme: "green" },
  { billType: "Total Upcoming", amount: 194.98, theme: "yellow" },
  { billType: "Due Soon", amount: 59.98, theme: "cyan" },
];

const RecurringBillsCard = () => {
  return (
    <div className="card-style mb-[5em]">
      <CardHeader title="Recurring Bills" detailsLink="See Details" />
      <div className="mt-5">
        {bills.map((bill, i) => (
          <div
            key={i}
            className={`flex-row bg-beige-100 py-5 px-6 text-[.9em] rounded-2xl mb-3 border-l-4 border-${bill.theme}`} //${bill.theme}
          >
            <p className="text-grey500">{bill.billType}</p>
            <span className="font-bold ">
              $
              {bill.amount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurringBillsCard;
