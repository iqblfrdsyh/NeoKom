import { Icons } from "@/components/icons/icons";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarAdmin = () => {
  const pathname = usePathname();

  return (
    <Card className="h-screen w-full max-w-[285px] rounded-none p-4 shadow-xl shadow-blue-gray-900/5 relative">
      <div className="mb-12 p-4 flex justify-center">
        <Typography variant="h5" color="blue-gray">
          <Image
            src={"/assets/images/neokom-logo.svg"}
            alt={"Neokom-Logo"}
            width={160}
            height={160}
          />
        </Typography>
      </div>
      <List className="-ms-1 flex flex-col gap-4">
        <Link href={"/admin/dashboard"}>
          <ListItem
            className={`${
              pathname === "/admin/dashboard"
                ? "bg-[#3A6BAE] text-white font-semibold hover:bg-[#2b5692f1] hover:text-gray-300"
                : ""
            }`}
          >
            <ListItemPrefix>
              <Image
                src={
                  pathname === "/admin/dashboard"
                    ? Icons.DashboardActive
                    : Icons.Dashboard
                }
                alt="dashboard-icon"
                width={24}
                height={24}
              />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link href={"/admin/kelolaTugas"}>
          <ListItem
            className={`hover:bg-[#2b5692f1] hover:text-gray-300 ${
              pathname === "/admin/kelolaTugas"
                ? "bg-[#3A6BAE] text-white font-semibold"
                : ""
            }`}
          >
            <ListItemPrefix>
              <Image
                src={
                  pathname === "/admin/kelolaTugas"
                    ? Icons.AssignmentActive
                    : Icons.Assignment
                }
                alt="assignment-icon"
                width={24}
                height={24}
              />
            </ListItemPrefix>
            Kelola Tugas
          </ListItem>
        </Link>
        <Link href={"/admin/kelolaUser"}>
          <ListItem
            className={`hover:bg-[#2b5692f1] hover:text-gray-300 ${
              pathname === "/admin/kelolaUser"
                ? "bg-[#3A6BAE] text-white font-semibold"
                : ""
            }`}
          >
            <ListItemPrefix>
              <Image
                src={
                  pathname === "/admin/kelolaUser"
                    ? Icons.UsersActive
                    : Icons.Users
                }
                alt="assignment-icon"
                width={24}
                height={24}
              />
            </ListItemPrefix>
            Kelola User
          </ListItem>
        </Link>
        <Link href={"/admin/tugasSiswa"}>
          <ListItem
            className={`hover:bg-[#2b5692f1] hover:text-gray-300 ${
              pathname === "/admin/tugasSiswa"
                ? "bg-[#3A6BAE] text-white font-semibold"
                : ""
            }`}
          >
            <ListItemPrefix>
              <Image
                src={
                  pathname === "/admin/tugasSiswa"
                    ? Icons.StudentAssigmentsActive
                    : Icons.StudentAssigments
                }
                alt="history-icon"
                width={24}
                height={24}
              />
            </ListItemPrefix>
            Tugas Siswa
          </ListItem>
        </Link>
        <Link href={"/admin/profile"}>
          <ListItem
            className={`hover:bg-[#2b5692f1] hover:text-gray-300 ${
              pathname === "/admin/profile"
                ? "bg-[#3A6BAE] text-white font-semibold"
                : ""
            }`}
          >
            <ListItemPrefix>
              <Image
                src={
                  pathname === "/admin/profile"
                    ? Icons.ProfileActive
                    : Icons.Profile
                }
                alt="profile-icon"
                width={24}
                height={24}
              />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>
      </List>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <small>1.0.0</small>
      </div>
    </Card>
  );
};

export default SidebarAdmin;
