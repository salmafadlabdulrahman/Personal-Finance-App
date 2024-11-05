import Card from "./Card";
import CardHeader from "./CardHeader";
import data from "../../data.json";

const PotsCard = () => {
  return (
    <div className="card-style mt-[1em] lg:mt-0 w-full">
      <CardHeader title="Pots" detailsLink="See All" />

      <div className="md:flex items-center gap-6">
        <div className="mt-3 md:w-[250px] lg:w-[350px] ">
          <Card
            background={"bg-beige-100"}
            category="total saved"
            val={850}
            textColor="text-grey900"
            icon="/assets/images/icon-pot.svg"
            twoDigits={true}
          />
        </div>

        <div className="flex items-center flex-wrap mt-4">
          {data.pots.map((pot, i) => (
            <div
              key={i}
              className="flex items-center gap-2 w-[50%] mb-4 p-2 md:px-2 md:p-0"
            >
              <span
                className={`block h-[40px] w-[4px] rounded-full`}
                style={{ backgroundColor: pot.theme }}
              ></span>
              <div>
                <p className="text-grey500 text-[.8em]">{pot.name}</p>
                <p className="text-grey900 font-bold text-[.9em]">
                  ${pot.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotsCard;
