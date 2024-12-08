"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartAdmin = ({ totalTugas, totalSiswa, totalGuru }) => {
  const data = {
    labels: ["Total Tugas", "Tugas Siswa", "Total Guru"],
    datasets: [
      {
        label: "Jumlah Tugas",
        data: [totalTugas, totalSiswa, totalGuru],
        backgroundColor: ["#39566C", "#6A9EC6", "#418B73"],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "right",
          align: "center",
          fullsize: true,
          labels: {
            font: {
              family: "'Roboto', sans-serif",
              size: 14,
              weight: "bold",
            },
            padding: 20,
            boxWidth: 20,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              return `${value} Tugas`;
            },
          },
        },
      },
    },
  };

  const isDataEmpty = !totalTugas && !tugasSelesai && !belumSelesai;

  return (
    <div className="w-[400px] p-4 mx-auto">
      {isDataEmpty ? (
        <h2 className="text-black">Data Masih Kosong</h2>
      ) : (
        <Pie {...config} />
      )}
    </div>
  );
};

export default PieChartAdmin;
