"use client";

import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { logout } from "@/lib/api-libs";
import { getToken } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // const closeMenu = () => setIsMenuOpen(false);

  const token = getToken();

  const handleLogout = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from the system.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, stay logged in",
    });

    if (result.isConfirmed) {
      try {
        await logout("users/logout", token);
        localStorage.removeItem("token");
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = pathname.includes("admin")
            ? "/admin/signin"
            : "/signin";
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: error.message || "Logout failed. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="profile"
            className="border-2 border-white w-12 h-12"
            src="/assets/images/profile.png"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          onClick={handleLogout}
          className={
            "flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          }
        >
          <FaSignOutAlt className="h-4 w-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={"red"}
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
