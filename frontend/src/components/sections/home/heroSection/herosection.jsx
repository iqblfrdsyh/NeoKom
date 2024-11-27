import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen flex justify-between ">
      <div>
        <div className="bg-pentol bg-no-repeat bg-contain w-[650px] h-[480px] absolute left-0 top-[38px]"></div>
        <div className="flex flex-col justify-center h-[530px]">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold text-[45px] tracking-[1px]">
              Kembangkan Potensi,
              <span className="text-[#51A8FF] block">Capai Prestasi</span>
            </h2>
            <p className="w-[410px] text-[17px] tracking-[1px]">
              Temukan peluang untuk berkembang, asah keterampilanmu, dan raih
              prestasi terbaik di sekolah maupun masa depan. Saatnya bersinar
              dan wujudkan impianmu!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <Image
          src={"/assets/images/ilustration-learn.svg"}
          alt="learn ilustration"
          width={650}
          height={650}
        />
      </div>
    </section>
  );
};

export default HeroSection;
