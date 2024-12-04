"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/api-libs";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Signinpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login("users/login", { email, password });
      localStorage.setItem("token", response.token);
      Swal.fire({
        title: "Success!",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Login failed. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <React.Fragment>
      <section className="relative bg-white w-screen h-screen">
        <div className="absolute w-[210px] h-[100px] left-16 top-6">
          <Image
            src="/assets/images/neokom-logo.svg"
            alt="neokom"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="px-16 flex-1">
            <div className="w-[330px] mt-20">
              <form className="flex flex-col gap-6" onSubmit={handleLogin}>
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-[#0000006f] px-4 h-[50px] text-black "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-[#0000006f] px-4 h-[50px] text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <a
                    href="#"
                    className="absolute right-0 top-14 opacity-70 text-[14px]"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="bg-[#3A6BAE] hover:bg-[#3a6aaede] mt-7 h-[45px] tracking-[1px] font-semibold"
                >
                  Login Now
                </Button>
              </form>

              <div className="flex items-center gap-5 mt-9 w-[315px] mx-auto">
                <hr className="h-[2px] bg-[#00000080] w-full" />
                <small className="text-[15px] text-black">or</small>
                <hr className="h-[2px] bg-[#00000080] w-full" />
              </div>
              <Button className="flex items-center justify-center gap-3 w-full mt-8 bg-white hover:bg-gray-50 text-[#757575] font-medium border border-gray-200 h-[45px] shadow-[0_2px_4px_0.1px_rgba(0,0,0,0.17)] hover:shadow-[0_0px_3px_0.1px_rgba(0,0,0,0.25)]">
                <Image
                  src="/assets/images/icons/google-icon.svg"
                  alt="google"
                  width={24}
                  height={24}
                />
                Login with Google
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden ">
            <div className="h-screen w-screen">
              <Image
                src="/assets/images/circles.svg"
                alt="background"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex justify-end items-center">
              <Image
                src="/assets/images/login-ilustration.svg"
                alt="illustration"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signinpage;
