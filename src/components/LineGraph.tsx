import { Line } from "react-chartjs-2";
import { format, parse } from "date-fns";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { useHistoricalData } from "../query/covidData";
import LoadingMessage from "./LoadingMessage";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const LineGraph = () => {
  const { data, isLoading, error } = useHistoricalData();

  if (isLoading) {
    return (
      <LoadingMessage
        heading="Worldwide Covid-19 Cases Over Time"
        subheading="Please wait data is being loading."
      />
    );
  }
  if (error) {
    return (
      <LoadingMessage
        heading="Worldwide Covid-19 Cases Over Time"
        subheading="Error fetching data"
      />
    );
  }

  const labels = Object.keys(data.cases).map((date) =>
    format(parse(date, "M/d/yy", new Date()), "MMM yyyy")
  );

  const casesData = Object.values(data.cases);

  const isMobile = window.innerWidth <= 768;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cases Over Time",
        data: casesData,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          display: !isMobile,
          maxRotation: 75,
          autoSkip: true,
        },
        grid: {
          display: !isMobile,
        },
      },
      y: {
        title: {
          display: true,
          text: "Cases",
        },
        ticks: {
          display: !isMobile,
          callback: function (value: string | number) {
            if (typeof value === "number") {
              if (value >= 1_000_000) {
                return `${value / 1_000_000}M`;
              } else if (value >= 1_000) {
                return `${value / 1_000}K`;
              }
              return value;
            }
            return value;
          },
        },
        grid: {
          display: !isMobile,
        },
      },
    },
  };
  return (
    <div className="rounded-xl border shadow">
      <h1 className="text-lg font-semibold border-b p-4 md:text-2xl">
        Worldwide Covid-19 Cases Over Time
      </h1>
      <div className="px-4 py-8">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
