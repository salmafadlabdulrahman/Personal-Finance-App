"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetCircleChart = ({ data }) => {
  const labels = data.map((item) => item.category);
  const values = data.map((item) => item.amount);
  const maxVal = data.map((item) => item.maximum);

  const totalAmount = maxVal.reduce((acc, curr) => acc + curr, 0);
  const totalSpent = values.reduce((acc, curr) => acc + curr, 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Budget",
        data: values,
        backgroundColor: ["#277C78", "#82C9D7", "#F2CDAC", "#626070"],
        hoverBackgroundColor: ["#277C78", "#82C9D7", "#F2CDAC", "#626070"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    cutout: "70%",
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.raw}`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
      }}
      className="mt-4 m-auto max-w-[240px] xl:max-w-[180px]"
    >
      <Doughnut data={chartData} options={chartOptions} />
      <div
        style={{
          position: "absolute",
          top: "47%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        <p className="text-[1.2em]">${totalSpent}</p>
        <p className="text-grey500 font-medium text-[.5em] mt-1">
          of ${totalAmount} limit
        </p>
      </div>
    </div>
  );
};

export default BudgetCircleChart;
