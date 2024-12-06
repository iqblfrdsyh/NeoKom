"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@material-tailwind/react";
import React, { useEffect, useCallback } from "react";
import SidebarUser from "@/components/layouts/sidebar/sidebar";
import { isLogin } from "@/lib/api-libs";

const App = ({ children }) => {
  const pathname = usePathname();
  const hiddenPaths = ["/signin"];
  const shouldHideMenu = hiddenPaths.includes(pathname);

  const middleware = useCallback(async (token) => {
    try {
      const response = await isLogin("protected", token);
      if (response.status === 403) {
        console.error("Forbidden access, redirecting to signin...");
        window.location.href = "/signin";
      } else {
        console.log("Authentication success:", response);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      window.location.href = "/signin";
    }
  }, []);

  useEffect(() => {
    if (pathname === "/signin") return;

    const token = localStorage.getItem("token");
    if (token) {
      middleware(token);
    } else {
      window.location.href = "/signin";
    }
  }, [pathname, middleware]);

  return (
    <ThemeProvider>
      <main>
        {!shouldHideMenu && (
          <div className="w-auto border-2 fixed top-0 left-0 bottom-0 z-10">
            <SidebarUser />
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
