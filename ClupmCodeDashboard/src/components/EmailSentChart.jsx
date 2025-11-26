import React, { useState, useEffect, useRef } from "react";
import * as Chart from "chart.js";

export default function EmailSentChart() {
  const [activeTab, setActiveTab] = useState("year");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const emailData = [
    { month: "Jan", seriesA: 50, seriesB: 20, seriesC: 10 },
    { month: "Feb", seriesA: 80, seriesB: 30, seriesC: 10 },
    { month: "Mar", seriesA: 40, seriesB: 50, seriesC: 20 },
    { month: "Apr", seriesA: 70, seriesB: 30, seriesC: 20 },
    { month: "May", seriesA: 30, seriesB: 20, seriesC: 10 },
    { month: "Jun", seriesA: 50, seriesB: 30, seriesC: 10 },
    { month: "Jul", seriesA: 40, seriesB: 20, seriesC: 10 },
    { month: "Aug", seriesA: 80, seriesB: 30, seriesC: 20 },
    { month: "Sep", seriesA: 30, seriesB: 20, seriesC: 10 },
    { month: "Oct", seriesA: 30, seriesB: 10, seriesC: 10 },
    { month: "Nov", seriesA: 60, seriesB: 20, seriesC: 10 },
    { month: "Dec", seriesA: 70, seriesB: 20, seriesC: 10 },
  ];

  useEffect(() => {
    // Register Chart.js components
    if (typeof Chart.Chart !== "undefined") {
      Chart.Chart.register(
        Chart.BarController,
        Chart.BarElement,
        Chart.CategoryScale,
        Chart.LinearScale,
        Chart.Tooltip,
        Chart.Legend
      );
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      chartInstance.current = new Chart.Chart(ctx, {
        type: "bar",
        data: {
          labels: emailData.map((d) => d.month),
          datasets: [
            {
              label: "Series A",
              data: emailData.map((d) => d.seriesA),
              backgroundColor: "#6366f1", // Indigo-500
              borderRadius: 0,
              barThickness: 10,
            },
            {
              label: "Series B",
              data: emailData.map((d) => d.seriesB),
              backgroundColor: "#f59e0b", // Amber-500
              borderRadius: 0,
              barThickness: 10,
            },
            {
              label: "Series C",
              data: emailData.map((d) => d.seriesC),
              backgroundColor: "#14b8a6", // Teal-500
              borderRadius: 0,
              barThickness: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              labels: {
                color: "#94a3b8", // slate-400
                padding: 20,
                font: {
                  size: 12,
                },
                usePointStyle: true,
                pointStyle: "rect",
              },
            },
            tooltip: {
              backgroundColor: "#1e293b",
              titleColor: "#fff",
              bodyColor: "#94a3b8",
              borderColor: "#334155",
              borderWidth: 1,
              padding: 12,
              displayColors: true,
            },
          },
          scales: {
            x: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "#64748b", // slate-500
                font: {
                  size: 11,
                },
              },
              border: {
                display: false,
              },
            },
            y: {
              stacked: true,
              beginAtZero: true,
              max: 100,
              ticks: {
                color: "#64748b", // slate-500
                stepSize: 20,
                font: {
                  size: 11,
                },
              },
              grid: {
                color: "#334155", // slate-700
                drawBorder: false,
              },
              border: {
                display: false,
              },
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    // <div className="min-h-screen bg-slate-900 p-6">
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Email Sent</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab("week")}
              className={`px-4 py-2 rounded text-sm transition ${
                activeTab === "week"
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:bg-slate-700/50"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setActiveTab("month")}
              className={`px-4 py-2 rounded text-sm transition ${
                activeTab === "month"
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:bg-slate-700/50"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setActiveTab("year")}
              className={`px-4 py-2 rounded text-sm transition ${
                activeTab === "year"
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-700/50"
              }`}
            >
              Year
            </button>
          </div>
        </div>

        {/* Chart Canvas */}
        <div className="relative" style={{ height: "350px" }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    // </div>
  );
}
