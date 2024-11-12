import { Poppins } from "next/font/google";
import "./globals.css";
import App from "./app";

export const metadata = {
  title: "NeoKom",
  description: "E-Learning For High School",
};

const poppins = Poppins({ weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
