import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { calculateTimeLeft } from "@/lib/utils";

const Notification = ({ dataAssignments, kelas }) => {
  const [timeLeft, setTimeLeft] = useState([]);

  useEffect(() => {
    const sortedAssignments = dataAssignments
      .filter((assignment) => assignment.kelas === kelas)
      .sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

    const timers = sortedAssignments.map((assignment) =>
      calculateTimeLeft(assignment.due_date)
    );
    setTimeLeft(timers);

    const interval = setInterval(() => {
      const updatedTimers = sortedAssignments.map((assignment) =>
        calculateTimeLeft(assignment.due_date)
      );
      setTimeLeft(updatedTimers);
    }, 60000);

    return () => clearInterval(interval);
  }, [dataAssignments, kelas]);

  return (
    <ScrollArea className="h-96 w-full border outline-none border-none p-4">
      <div className="space-y-4">
        {dataAssignments
          .filter((assignment) => assignment.kelas === kelas)
          .sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
          .map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <Link href={"/daftarTugas"}>
                    <Button className="mt-2 px-4 py-2 text-sm font-medium text-white bg-[#0A355D] rounded-md hover:bg-[#0a355ddb]">
                      Selesaikan Sekarang!
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-col items-center bg-white shadow-md py-2 px-3 w-[190px] rounded-md">
                  <Image
                    src={Icons.Clock}
                    width={35}
                    height={35}
                    alt="clock-icon"
                    draggable="false"
                  />
                  <span className="text-sm text-red-600 font-medium mt-2">
                    {timeLeft[index]}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </ScrollArea>
  );
};

export default Notification;
