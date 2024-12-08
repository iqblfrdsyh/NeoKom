import React from "react";
import CardStatistik from "../cardStatistik/cardStatistik";

const StatistikUser = ({ totalTugas, tugasSelesai, belumSelesai }) => {
  const dataStatistik = [
    {
      id: 1,
      title: "Total Tugas",
      total: totalTugas,
    },
    {
      id: 2,
      title: "Tugas Selesai",
      total: tugasSelesai,
    },
    {
      id: 3,
      title: "Belum Selesai",
      total: belumSelesai,
    },
  ];
  return (
    <div className="flex gap-20 mt-16">
      {dataStatistik.map((data) => {
        return (
          <CardStatistik total={data.total} title={data.title} key={data.id} />
        );
      })}
    </div>
  );
};

export default StatistikUser;
