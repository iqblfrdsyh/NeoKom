"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import SidebarUser from "@/components/layouts/sidebar-user/sidebarUser";
import SidebarAdmin from "@/components/layouts/sidebar-admin/sidebarAdmin";
import useAuthentication from "@/hooks/useAuthentication";

const App = ({ children }) => {
  const pathname = usePathname();
  const hiddenPaths = ["/signin", "/admin/signin"];
  const hiddenAdminRoute = pathname.includes("/admin") && !pathname.includes("/admin/signin");
  const shouldHideMenu = hiddenPaths.includes(pathname);

  useAuthentication();

  return (
    <ThemeProvider>
      <main>
        {!shouldHideMenu && (
          <div className="w-auto border-2 fixed top-0 left-0 bottom-0 z-10">
            {hiddenAdminRoute ? <SidebarAdmin /> : <SidebarUser />}
          </div>
        )}
        <div
          className={shouldHideMenu ? "" : "px-6 pt-6"}
          style={{ paddingLeft: shouldHideMenu ? "0" : "19.5rem" }}
        >
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
