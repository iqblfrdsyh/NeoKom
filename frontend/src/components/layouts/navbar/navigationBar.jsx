import React from "react";
import {
  BookOpen,
  Calendar,
  Bell,
  Settings,
  User,
  Calculator,
  Award,
  Clock,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavigationBar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">NeoKom</span>
        </div>

        <NavigationMenu className="mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="font-medium">Mathematics</div>
                    <p className="text-sm text-muted-foreground">
                      Algebra, Geometry, Calculus
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="font-medium">Sciences</div>
                    <p className="text-sm text-muted-foreground">
                      Biology, Chemistry, Physics
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="font-medium">English</div>
                    <p className="text-sm text-muted-foreground">
                      Literature, Writing, Grammar
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="font-medium">Social Studies</div>
                    <p className="text-sm text-muted-foreground">
                      History, Geography, Economics
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Study Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[200px]">
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculator
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Study Timer
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      Practice Tests
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Button variant="ghost" className="h-auto p-2">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full"
              >
                <Avatar>
                  <AvatarImage src="/api/placeholder/32/32" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Award className="mr-2 h-4 w-4" />
                My Progress
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
