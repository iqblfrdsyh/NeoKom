import { Input } from "@/components/ui/input";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import React from "react";
import { Search } from "lucide-react";

const MenuList = () => {
  return (
    <div className="flex flex-1 justify-between w-[550px] items-center gap-10">
      <div>
        <div className="relative">
          <Input
            type="search"
            placeholder="Mau belajar apa?"
            className="w-[350px] appearance-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-ms-clear]:hidden pr-10 border-2 border-black"
          />
          <Search className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-black" />
        </div>
      </div>
      <div className="flex gap-5">
        <NavigationMenuLink href="#" className="font-semibold" active>
          Home
        </NavigationMenuLink>
        <NavigationMenuLink href="#">Course</NavigationMenuLink>
      </div>
    </div>
  );
};

export default MenuList;
