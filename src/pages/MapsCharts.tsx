import { useState } from "react";
import LineGraph from "../components/LineGraph";
import LeafletGraph from "../components/LeafletGraph";

const MapsCharts = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main className="flex flex-1 max-h-screen overflow-scroll flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="pb-2">
        <nav className="flex gap-2">
          <div
            onClick={() => setActiveTab(1)}
            className={`h-7 flex items-center justify-center rounded-full px-4 text-center cursor-pointer text-sm ${
              activeTab === 1 ? "bg-gray-100" : "text-slate-500"
            }`}
          >
            Line Graph
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={`h-7 flex items-center justify-center rounded-full px-4 text-center cursor-pointer text-sm ${
              activeTab === 2 ? "bg-gray-100" : "text-slate-500"
            }`}
          >
            Leaflet Map
          </div>
        </nav>
      </div>
      {activeTab === 1 ? <LineGraph /> : <LeafletGraph />}
    </main>
  );
};

export default MapsCharts;
