import React from "react";
import CardStatistik from "../cardStatistik/cardStatistik";

const StatistikUser = () => {
  const dataStatistik = [
    {
      id: 1,
      title: "Total Tugas",
      total: 15,
    },
    {
      id: 2,
      title: "Tugas Selesai",
      total: 10,
    },
    {
      id: 3,
      title: "Belum Selesai",
      total: 5,
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
