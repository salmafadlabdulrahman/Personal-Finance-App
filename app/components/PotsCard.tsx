import Card from "./Card";
import CardHeader from "./CardHeader";

const pots = [
  { category: "Savings", amount: 159 },
  { category: "Gift", amount: 40 },
  { category: "Concert Ticket", amount: 110 },
  { category: "New Laotop", amount: 10 },
];

const PotsCard = () => {
  return (
    <div className="card-style">
      <CardHeader title="Pots" detailsLink="See All" />

      <div className="md:flex items-center gap-6">
        <div className="mt-3 md:w-[250px] ">
          <Card
            background={"bg-beige-100"}
            category="total saved"
            val={850}
            textColor="text-grey900"
            icon="/assets/images/icon-pot.svg"
          />
        </div>

        <div className="flex items-center flex-wrap mt-4">
          {pots.map((pot, i) => (
            <div
              key={i}
              className="w-[50%] mb-4 p-2 md:px-2 md:p-0  border-l-4 border-indigo-700 rounded-l"
            >
              <p className="text-grey500 text-[.8em]">{pot.category}</p>
              <p className="text-grey900 font-bold text-[.9em]">
                ${pot.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotsCard;
