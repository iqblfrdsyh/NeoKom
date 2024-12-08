import React from "react";
import CardStatistik from "../cardStatistik/cardStatistik";

const StatistikAdmin = ({totalTugas,totalSiswa,totalGuru}) => {
  const dataStatistik = [
    {
      id: 1,
      title: "Total Tugas",
      total: totalTugas,
    },
    {
      id: 2,
      title: "Total Siswa",
      total: totalSiswa,
    },
    {
      id: 3,
      title: "Total Guru",
      total: totalGuru,
    },
  ];
  return (
    <div className="flex flex-col gap-14 mt-16">
      <div className="w-full">
        {dataStatistik.length > 0 && (
          <CardStatistik
            total={dataStatistik[0].total}
            title={dataStatistik[0].title}
            key={dataStatistik[0].id}
          />
        )}
      </div>
      <div className="flex gap-14">
        {dataStatistik.slice(1, 3).map((data) => {
          return (
            <CardStatistik
              total={data.total}
              title={data.title}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StatistikAdmin;
