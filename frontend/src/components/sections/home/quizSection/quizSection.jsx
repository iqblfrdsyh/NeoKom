import { Cards } from "@/components/cards/card";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const QuizSection = () => {
  return (
    <section className="mb-36">
      <div className="mb-16">
        <p className="text-[20px] font-semibold opacity-50 mb-5">Quiz</p>
        <div className="flex items-center justify-between">
          <h3 className="text-[30px] font-semibold tracking-[1px] w-[580px]">
            Uji Pengetahuan Anda dengan Quiz Interaktif!
          </h3>
          <Link
            href={"#"}
            className="font-semibold opacity-60 flex items-center gap-3"
          >
            Lihat Semua Quiz <MoveRight size={26} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-16 place-items-center">
        {new Array(6)
          .fill(0)
          .map((_, index) => index + 1)
          .map((i) => (
            <div className="w-[330px]" key={i + 1}>
              <Cards.CardQuiz />
            </div>
          ))}
      </div>
    </section>
  );
};

export default QuizSection;
