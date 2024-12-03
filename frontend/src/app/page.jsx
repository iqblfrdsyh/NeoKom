import Notification from "@/components/notification/notification";
import ProfileMenu from "@/components/profileMenu/profileMenu";
import StatistikUser from "@/components/statistikUser/statistikUser";
import React from "react";
import PieChart from "@/components/pieChart/pieChart";

const Homepage = () => {
  return (
    <React.Fragment className="mb-20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[17px] tracking-[1px] opacity-90">Welcome</p>
          <h1 className="text-[27px] tracking-[1px] font-semibold">
            Chika Annisa Putriyandenie
          </h1>
        </div>
        <ProfileMenu />
      </div>
      <StatistikUser />
      <div className="bg-white rounded-md grid grid-cols-2 gap-5 px-5 py-7 mt-20 ">
        <div>
          <h2 className="text-2xl text-black font-bold tracking-[1px] ml-4">
            Notikasi Tugas
          </h2>
          <Notification />
        </div>
        <PieChart />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
