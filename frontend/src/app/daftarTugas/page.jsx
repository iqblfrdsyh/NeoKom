import { Tables } from "@/components/tables/tables";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tasks } from "@/data/data-dummy";
import React from "react";

const DaftarTugas = () => {
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
      <ScrollArea className="bg-white py-5 px-7 rounded-md mt-10 h-[520px]">
        <Tables.TableDaftarTugas tasks={tasks} />
      </ScrollArea>
    </div>
  );
};

export default DaftarTugas;
