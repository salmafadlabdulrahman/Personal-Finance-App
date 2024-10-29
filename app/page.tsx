import Sidebar from "./component/Sidebar";
import Overview from "./pages/overview/page";

export default function Home() {
  return (
    <div>
      <div className="xl:flex gap-[20em]">
        <div className="hidden xl:block ">
          <Sidebar />
        </div>
        <div className="xl:grow">
          <Overview />
        </div>
      </div>
    </div>
  );
}