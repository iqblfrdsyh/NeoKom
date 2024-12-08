import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "../ui/scroll-area";

const AccordionTugas = ({ children, title }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-white">{title}</AccordionTrigger>
        <AccordionContent>
          <ScrollArea className="bg-white py-5 px-7 rounded-md h-[320px]">
            {children}
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionTugas;
