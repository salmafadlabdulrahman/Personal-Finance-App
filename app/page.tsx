import PotsCard from "./component/PotsCard";
import Overview from "./pages/overview/page";

export default function Home() {
  return (
    <div className="">
      {/*<Overview />*/}
      <div className="p-5 md:p-9 ">
        <Overview />
        <PotsCard />
      </div>
    </div>
  );
}
