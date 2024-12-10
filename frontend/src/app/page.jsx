"use client";

import Notification from "@/components/notification/notification";
import ProfileMenu from "@/components/profileMenu/profileMenu";
import StatistikUser from "@/components/statistikUser/statistikUser";
import React, { useEffect, useState } from "react";
import PieChart from "@/components/pieChart/pieChart";
import { getDataUser, getToken } from "@/lib/utils";
import { getData } from "@/lib/api-libs";

const Homepage = () => {
  const user = JSON.parse(getDataUser());
  const [totalTugas, setTotalTugas] = useState();
  const [totalTugasSelesai, setTotalTugasSelesai] = useState();
  const [belumSelesai, setBelumSelesai] = useState();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData("dashboardStudent", getToken());
        const responseAssignment = await getData("assignments", getToken());
        // console.log(responseAssignment);

        setAssignments(responseAssignment.data);

        setTotalTugas(response.data.totalAssignments);
        setTotalTugasSelesai(response.data.completedAssignments);
        setBelumSelesai(response.data.pendingAssignments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[17px] tracking-[1px] opacity-90">Welcome</p>
          <h1 className="text-[27px] tracking-[1px] font-semibold">
            {user.fullName}
          </h1>
        </div>
        <ProfileMenu />
      </div>

      <StatistikUser
        totalTugas={totalTugas}
        tugasSelesai={totalTugasSelesai}
        belumSelesai={belumSelesai}
      />
      <div className="bg-white rounded-md grid grid-cols-2 gap-5 px-5 py-7 mt-20 mb-16">
        <div>
          <h2 className="text-2xl text-black font-bold tracking-[1px] ml-4">
            Notikasi Tugas
          </h2>
          <Notification dataAssignments={assignments} kelas={user.kelas} />
        </div>
        <div>
          <h2 className="text-2xl text-black font-bold tracking-[1px] ml-4 mb-4 text-center">
            Statistik Tugas
          </h2>
          <div className="bg-white rounded-md shadow-[0_2px_7px_rgba(0,0,0,0.2)]">
            <PieChart
              totalTugas={totalTugas}
              belumSelesai={belumSelesai}
              tugasSelesai={totalTugasSelesai}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
