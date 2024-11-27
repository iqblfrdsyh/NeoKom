import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";

const Cards = {
  CardCourse1: () => {
    return (
      <div className="mx-auto flex justify-center">
        <Card className="w-full max-w-[330px] border rounded-lg shadow-md overflow-hidden">
          <CardHeader className="relative bg-blue-500 h-48 flex justify-center items-center">
            <Image
              src="/assets/images/Card Images/bg1.png"
              alt="Icon Matematika"
              fill
              className="object-cover"
            />
          </CardHeader>

          <CardContent className="p-4 pb-6 text-left">
            <CardTitle className="text-[24px] font-semibold tracking-[0.8px]">
              Matematika
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2 w-[240px]">
              Tingkatkan kemampuan berhitung dan logika dengan soal-soal seru!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  },
  CardCourse2: () => {
    return <div>Course 2</div>;
  },
  CardQuiz: () => {
    return (
      <div>
        <Card className="w-full max-w-[330px] border rounded-lg shadow-md overflow-hidden">
          {/* Header Card - Gambar */}
          <CardHeader className="relative bg-blue-500 h-48 flex justify-center items-center">
            <Image
              src="/assets/images/Card Images/bgquiz.png"
              alt="Icon Kalkulus"
              fill
              className="object-cover"
            />
          </CardHeader>

          <CardContent className="p-4 text-left">
            <CardTitle className="text-lg font-semibold text-black flex justify-between items-center text-[27px] tracking-[1px]">
              Kalkulus
              <span className="bg-red-500 text-white px-7 py-1 text-sm rounded-full tracking-normal">
                High
              </span>
            </CardTitle>
            <div className="mt-4">
              <Button
                className="bg-[#51A8FF] text-white"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  textTransform: "none",
                  width: "130px"
                }}
                variant="contained"
              >
                Mulai Quiz
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <small>4.5</small>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <small>(36)</small>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export { Cards };
