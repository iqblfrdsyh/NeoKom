import React from "react";
import { User, Award, ChevronDown, LogOut } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import MenuList from "./menulist";

const NavigationBar = () => {
  return (
    <div className="bg-white shadow-none">
      <div className="px-[50px] py-5 flex items-center justify-between">
        <div>
          <Image
            src="/assets/images/neokom-logo.svg"
            alt="neokom"
            width={160}
            height={160}
          />
        </div>

        <div className="flex flex-1 justify-end mr-32">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center ">
              <MenuList />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-14 hover:bg-transparent rounded-full"
              >
                <Avatar>
                  <AvatarImage src="https://play-lh.googleusercontent.com/qO_I-Nigv3fdfQeifs99eAOhDCmaIY9XC0O4WVbZAoU8wpZ9IWzNPmZwL4zmjYGUtow=w526-h296-rw" />
                  <AvatarFallback className="text-[10px]">Chika</AvatarFallback>
                </Avatar>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Award className="mr-2 h-4 w-4" />
                My Course
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
