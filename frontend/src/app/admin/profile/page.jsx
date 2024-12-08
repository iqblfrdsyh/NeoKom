"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getDataUser } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [kelas, setKelas] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const user = JSON.parse(getDataUser());
    if (user) {
      setFullname(user.fullName);
      setEmail(user.email);
      setKelas(user.kelas);
      setRole(user.role);
    }
  });

  return (
    <div className="flex flex-col bg-white py-24 my-auto justify-center gap-8 items-center rounded-md relative">
      <h3 className="text-black text-center text-[27px] -mt-7 font-semibold tracking-[1px]">
        Profile Guru
      </h3>
      <div className="flex gap-10 justify-center items-center">
        <div className="bg-[#F3F3F3] shadow-md p-4 w-[270px] ml-16 h-[270px] flex items-center justify-center rounded-sm">
          <div className="-mt-3">
            <h3 className="text-center text-[22px] mb-2 font-semibold text-[#3A6BAE]">
              Foto Profile
            </h3>
            <Image
              src={"/assets/images/profile.png"}
              alt="profile"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="border-r-2 border-[#000000] w-2 h-[350px] opacity-40"></div>
        <div className="flex flex-col gap-5 w-[350px]">
          <div>
            <label className="text-black">Nama Lengkap</label>
            <Input
              type="text"
              className="rounded-full bg-[#F5F5F5] text-black mt-3"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
            <label className="text-black">Status</label>
            <Input
              type="text"
              value={role}
              className="rounded-full bg-[#F5F5F5] text-black  mt-3"
              readOnly
            />
          </div>
          <div>
            <label className="text-black">Email</label>
            <Input
              type="email"
              value={email}
              className="rounded-full bg-[#F5F5F5] text-black  mt-3"
              readOnly
            />
          </div>
          <div>
            <label className="text-black block">Password</label>
            <Button className="bg-red-500 hover:bg-red-300 mt-3">
              Ubah Password
            </Button>
          </div>
        </div>
      </div>
      <Button className="absolute right-7 bottom-7 bg-[#3A6BAE] hover:bg-[#3a6aaee2]">
        Update
      </Button>
    </div>
  );
};

export default Profile;
