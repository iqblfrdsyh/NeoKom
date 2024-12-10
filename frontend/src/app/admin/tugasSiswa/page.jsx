import AccordionTugas from "@/components/acordionTugas/accordionTugas";
import Tables from "@/components/tables/tables";
import React from "react";

const TugasSiswa = () => {
  return (
    <div>
      <div>
        <h1 className="text-[27px] tracking-[1px] font-semibold">
          Tugas Siswa - IPA 1
        </h1>
      </div>
      <div className="mt-7">
        <AccordionTugas title={"Tugas 1"}>
          <Tables.TableTugasSiswa studentAssignments={[]} />
        </AccordionTugas>
        <AccordionTugas title={"Tugas 2"}>
          <Tables.TableTugasSiswa studentAssignments={[]} />
        </AccordionTugas>
        <AccordionTugas title={"Tugas 3"}>
          <Tables.TableTugasSiswa studentAssignments={[]} />
        </AccordionTugas>
      </div>
    </div>
  );
};

export default TugasSiswa;
