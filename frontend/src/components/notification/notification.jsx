import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";

const Notification = () => {
  const items = [
    { title: "Pemrograman Berbasis Objek", time: "2 Jam lagi!" },
    { title: "Pemrograman Berbasis Objek", time: "5 Jam lagi!" },
    { title: "Pemrograman Berbasis Objek", time: "9 Jam lagi!" },
    { title: "Pemrograman Berbasis Objek", time: "10 Jam lagi!" },
  ];

  return (
    <ScrollArea className="h-96 w-full border outline-none border-none p-4">
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <Button className="mt-2 px-4 py-2 text-sm font-medium text-white bg-[#0A355D] rounded-md hover:bg-[#0a355ddb]">
                  Selesaikan Sekarang!
                </Button>
              </div>
              <div className="flex flex-col items-center bg-white shadow-md py-2 px-5 rounded-md">
                <Image
                  src={Icons.Clock}
                  width={35}
                  height={35}
                  alt="clock-icon"
                  draggable="false"
                />
                <span className="text-sm text-red-600 font-medium mt-2">
                  {item.time}
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
