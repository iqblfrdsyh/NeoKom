"use client";

import PieChartAdmin from "@/components/pieChart/pieChartAdmin";
import ProfileMenu from "@/components/profileMenu/profileMenu";
import StatistikAdmin from "@/components/statistikAdmin/statistikAdmin";
import { getDataUser } from "@/lib/utils";
import React from "react";

const Dashboard = () => {
  const user = JSON.parse(getDataUser());

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[17px] tracking-[1px] opacity-90">Welcome</p>
          <h1 className="text-[27px] tracking-[1px] font-semibold">
            {user.fullName}
          </h1>
        </div>
        <ProfileMenu />
      </div>
      <StatistikAdmin totalTugas={2001} totalGuru={100} totalSiswa={1350} />
      <div className="my-20">
        <h2 className="text-2xl text-white font-bold tracking-[1px] ml-4 mb-4 text-center">
          Statistik
        </h2>
        <div className="bg-white rounded-md shadow-[0_2px_7px_rgba(0,0,0,0.2)] w-[650px] mx-auto">
          <PieChartAdmin totalTugas={2001} totalGuru={100} totalSiswa={1350} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
