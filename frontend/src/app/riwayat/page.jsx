import { Tables } from "@/components/tables/tables";
import { ScrollArea } from "@/components/ui/scroll-area";
import { histories } from "@/data/data-dummy";
import React from "react";

const Riwayat = () => {
  return (
    <div>
      <div>
        <h1 className="text-[27px] tracking-[1px] font-semibold">Riwayat</h1>
        <p className="text-[17px] tracking-[1px] opacity-90">
          Daftar Riwayat pengumpulan tugas Anda
        </p>
      </div>
      <ScrollArea className="bg-white py-5 px-7 rounded-md mt-10 h-[520px]">
        <Tables.TableRiwayat histories={histories} />
      </ScrollArea>
    </div>
  );
};

export default Riwayat;
