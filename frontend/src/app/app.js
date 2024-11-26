"use client";

import Footer from "@/components/layouts/footer";
import NavigationBar from "@/components/layouts/navbar";
import { usePathname } from "next/navigation";
import React from "react";

const App = ({ children }) => {
  const pathname = usePathname();

  const hiddenPaths = ["/signin"];
  const shouldHideMenu = hiddenPaths.includes(pathname);

  return (
    <React.Fragment>
      {!shouldHideMenu && <NavigationBar />}
      <main className={!shouldHideMenu ? "px-[50px]" : undefined}>
        {children}
      </main>
      {!shouldHideMenu && <Footer />}
    </React.Fragment>
  );
};

export default App;
