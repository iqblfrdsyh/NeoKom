import Footer from "@/components/layouts/footer";
import NavigationBar from "@/components/layouts/navbar";
import React from "react";

const App = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
