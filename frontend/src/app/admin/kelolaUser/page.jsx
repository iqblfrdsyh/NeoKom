"use client";

import { Forms } from "@/components/forms/forms";
import Tables from "@/components/tables/tables";
import { ScrollArea } from "@/components/ui/scroll-area";
import { deleteData, getData, regist } from "@/lib/api-libs";
import { getToken } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const KelolaTugas = () => {
  const [users, setUsers] = useState([]);

  const [fullName, setFullName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kelas, setKelas] = useState("");

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await getData("users", getToken());
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  const handleAddUser = async () => {
    if (!fullName || !email || !password || !status || !kelas) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Semua field wajib diisi!",
      });
      return;
    }

    try {
      const response = await regist("users/register", {
        fullName,
        email,
        password,
        role: status,
        kelas,
      });

      if (response.status === 201) {
        setUsers((prevUsers) => [
          ...prevUsers,
          response.data.user,
        ]);
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "User berhasil ditambahkan!",
        });
        setFullName("");
        setStatus("");
        setEmail("");
        setPassword("");
        setKelas("");
      }
    } catch (error) {
      console.error("Gagal menambahkan user:", error);

      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menambahkan user.",
        footer: error.message || "Coba lagi nanti.",
      });
    }
  };

  const handleDeleteUser = async (userId) => {
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
        await deleteData("users/delete", userId);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "User berhasil dihapus!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat menghapus user.",
        footer: error.message || "Coba lagi nanti.",
      });
    }
  };
  

  return (
    <div>
      <div>
        <h1 className="text-[27px] tracking-[1px] font-semibold">
          Kelola User
        </h1>
      </div>
      <div className="bg-white p-5 text-black rounded-md mt-8">
        <Forms.FormKelolaUser
          fullName={fullName}
          status={status}
          email={email}
          password={password}
          kelas={kelas}
          setFullName={setFullName}
          setStatus={setStatus}
          setEmail={setEmail}
          setPassword={setPassword}
          setKelas={setKelas}
          handleAddUser={handleAddUser}
        />
      </div>
      <ScrollArea className="bg-white py-5 px-7 rounded-md mt-10 mb-16 h-[520px]">
        <Tables.TableKelolaUser
          users={users}
          handleDeleteUser={handleDeleteUser}
        />
      </ScrollArea>
    </div>
  );
};

export default KelolaTugas;
