"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import SidebarUser from "@/components/layouts/sidebar/sidebar";

const App = ({ children }) => {
  const pathname = usePathname();

  const hiddenPaths = ["/signin"];
  const shouldHideMenu = hiddenPaths.includes(pathname);

  return (
    <ThemeProvider>
      <main>
        {!shouldHideMenu && (
          <div className="w-auto border-2 fixed top-0 left-0 bottom-0 z-10">
            <SidebarUser />
          </div>
        )}

        <div
          className="px-6 pt-6 mb-20"
          style={{ paddingLeft: shouldHideMenu ? "0" : "19.5rem" }}
        >
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
