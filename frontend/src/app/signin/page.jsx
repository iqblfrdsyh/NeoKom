import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const Signinpage = () => {
  return (
    <React.Fragment>
      <section className="relative">
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
              <form className="flex flex-col gap-6">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-2 border-[#0000006f] px-4 h-[50px] "
                />
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-[#0000006f] px-4 h-[50px] "
                  />

                  <a
                    href="#"
                    className="absolute right-0 top-14 opacity-70 text-[14px]"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button className="bg-[#51A8FF] hover:bg-[#51a8ffd8] mt-7 h-[45px] tracking-[1px] font-semibold">
                  Login Now
                </Button>
              </form>

              <div className="flex items-center gap-5 mt-9 w-[315px] mx-auto">
                <hr className="h-[2px] bg-[#00000080] w-full" />
                <small className="text-[15px]">or</small>
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
          <div className="relative overflow-hidden">
            <div className="h-screen w-screen ">
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
