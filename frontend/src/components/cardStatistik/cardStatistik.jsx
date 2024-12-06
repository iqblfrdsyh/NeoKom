import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "../icons/icons";

const CardStatistik = (props) => {
  return (
    <Card className="w-64 h-40 relative bg-white border border-gray-300 rounded-none">
      <CardContent className="flex flex-col items-center justify-center gap-2 h-full text-center mt-2">
        <h1 className="text-6xl font-bold text-[#0A355D]">{props.total}</h1>
        <p className="text-xl text-[#0A355D] font-semibold">{props.title}</p>
      </CardContent>
      <div className="absolute bottom-0 right-0 w-16 h-16 transform translate-x-[8.8px] translate-y-[1.3px]">
        <Image
          src={Icons.Paper}
          alt="paper"
          fill
          draggable={false}
        />
      </div>
    </Card>
  );
};

export default CardStatistik;
