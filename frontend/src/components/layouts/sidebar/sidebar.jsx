import { Icons } from "@/components/icons/icons";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import Image from "next/image";

const SidebarUser = () => {
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
        <ListItem className="bg-[#3A6BAE] text-white font-semibold hover:bg-[#2b5692f1] hover:text-gray-300">
          <ListItemPrefix>
            <Image
              src={Icons.Dashboard}
              alt="dashboard-icon"
              width={24}
              height={24}
            />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Image
              src={Icons.Assignment}
              alt="assignment-icon"
              width={24}
              height={24}
            />
          </ListItemPrefix>
          Daftar Tugas
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <Image
              src={Icons.History}
              alt="history-icon"
              width={24}
              height={24}
            />
          </ListItemPrefix>
          Riwayat
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Image
              src={Icons.Profile}
              alt="profile-icon"
              width={24}
              height={24}
            />
          </ListItemPrefix>
          Profile
        </ListItem>
      </List>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <small>1.0.0</small>
      </div>
    </Card>
  );
};

export default SidebarUser;
