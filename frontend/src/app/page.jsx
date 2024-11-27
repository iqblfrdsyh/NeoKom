import CourseSection from "@/components/sections/home/courseSection/courseSection";
import HeroSection from "@/components/sections/home/heroSection/herosection";
import QuizSection from "@/components/sections/home/quizSection/quizSection";
import React from "react";

const Homepage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CourseSection />
      <QuizSection />
    </React.Fragment>
  );
};

export default Homepage;
