// import { Cards } from "@/components/cards/card";
// import SwiperCourse from "@/components/swiper/swiperCourse";
import SwiperCourse from "@/components/swiper/swiperCourse";
import React from "react";


const CourseSection = () => {
  return (
    <section className="mb-36">
      <div className="mb-16">
        <p className="text-[20px] font-semibold opacity-50 mb-5">Course</p>
        <h3 className="text-[30px] font-semibold tracking-[1px]">
          Course Dengan Materi Baru
        </h3>
      </div>

      <SwiperCourse />
    </section>
  );
};

export default CourseSection;
