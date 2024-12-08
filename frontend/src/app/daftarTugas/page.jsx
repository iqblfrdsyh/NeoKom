"use client";

import Tables from "@/components/tables/tables";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getData } from "@/lib/api-libs";
import { getDataUser, getToken } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const DaftarTugas = () => {
  const [tasks, setTasks] = useState([]);

  const user = JSON.parse(getDataUser());

  useEffect(() => {
    const getTasks = async () => {
      const response = await getData("assignments", getToken());
      setTasks(response.data);
    };
    getTasks();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-[27px] tracking-[1px] font-semibold">
          Daftar Tugas
        </h1>
        <p className="text-[17px] tracking-[1px] opacity-90">
          Daftar tugas Anda yang harus di kerjakan
        </p>
      </div>
      <ScrollArea className="bg-white py-5 px-7 rounded-md mt-10 mb-16 h-[520px]">
        <Tables.TableDaftarTugas tasks={tasks} kelas={user.kelas} />
      </ScrollArea>
    </div>
  );
};

export default DaftarTugas;
