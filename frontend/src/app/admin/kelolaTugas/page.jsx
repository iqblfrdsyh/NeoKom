"use client";

import { Forms } from "@/components/forms/forms";
import Tables from "@/components/tables/tables";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createAssignment, deleteData, getData } from "@/lib/api-libs";
import { formatDatetime, getDataUser } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const KelolaTugas = () => {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [duedate, setDuedate] = useState();

  const [file, setFile] = useState("");
  const user = JSON.parse(getDataUser());

  useEffect(() => {
    const getDataAssignment = async () => {
      try {
        const response = await getData("assignments");
        // console.log("Response:", response);
        setAssignments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataAssignment();
  }, []);

  const handleAdd = async () => {
    if (!title || !desc || !duedate || !file) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Semua field harus diisi!",
      });
      return;
    }

    const newAssignment = {
      title,
      description: desc,
      due_date: formatDatetime(duedate),
      file_url: file,
      kelas: user.kelas,
    };

    try {
      const response = await createAssignment("assignments", newAssignment);

      setAssignments((prevAssignments) => [...prevAssignments, response.data]);

      setTitle("");
      setDesc("");
      setDuedate("");
      setFile(null);

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Tugas berhasil ditambahkan!",
      });
    } catch (error) {
      console.error("Gagal menambahkan tugas:", error);

      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menambahkan tugas.",
        footer: error.message || "Coba lagi nanti.",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Apakah Anda yakin?",
        text: "Data ini akan dihapus secara permanen!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3A6BAE",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
      });

      if (result.isConfirmed) {
        await deleteData("assignments/delete", id);
        setAssignments((prevA) => prevA.filter((A) => A.id !== id));

        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Tugas berhasil dihapus!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[27px] tracking-[1px] font-semibold">
          Kelola Tugas - IPA 1
        </h1>
      </div>
      <div className="bg-white p-5 text-black rounded-md mt-8">
        <Forms.FormKelolaTugas
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          duedate={duedate}
          setDuedate={setDuedate}
          file={file}
          setFile={setFile}
          handleAdd={handleAdd}
        />
      </div>
      <ScrollArea className="bg-white py-5 px-7 rounded-md mt-10 mb-16 h-[520px]">
        <Tables.TableKelolaTugas assignments={assignments} kelas={user.kelas} handleDelete={handleDelete} />
      </ScrollArea>
    </div>
  );
};

export default KelolaTugas;
