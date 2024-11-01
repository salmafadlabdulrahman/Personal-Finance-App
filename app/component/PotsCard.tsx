import Link from "next/link";
import React from "react";
import Card from "./Card";
import Image from "next/image";

const pots = [
  { category: "Savings", amount: 159 },
  { category: "Gift", amount: 40 },
  { category: "Concert Ticket", amount: 110 },
  { category: "New Laotop", amount: 10 },
];

const PotsCard = () => {
  return (
    <div className="bg-white rounded-lg mt-[2em] text-grey900 px-5 py-6 mb-[5em]">
      <div className="flex items-center justify-between">
        <p className="font-bold text-[1.3em]">Pots</p>
        <p className="flex items-center gap-3">
          <Link href={"/pages/pots"} className="text-grey500 text-[.9em]">
            See Details
          </Link>
          <Image
            src={"/assets/images/icon-caret-right.svg"}
            alt="right arrow"
            width={6}
            height={6}
          />
        </p>
      </div>

      <div className="md:flex items-center gap-6">
        <div className="mt-3">
          <Card
            background={"bg-beige-100"}
            category="total saved"
            val={850}
            textColor="text-grey900"
            icon="/assets/images/icon-pot.svg"
          />
        </div>

        <div className="flex items-center flex-wrap">
          {pots.map((pot, i) => (
            <div
              key={i}
              className="w-[50%] mt-4 p-2 border-l-4 border-indigo-700 rounded-l"
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
