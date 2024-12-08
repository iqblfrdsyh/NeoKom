import { authenticate } from "@/lib/authenticate";
import { getToken } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

function useAuthentication() {
  const pathname = usePathname();

  const checkAuth = useCallback(async (token) => {
    try {
      const response = await authenticate("protected", token);

      if (response.status === 401) {
        window.location.href = "/signin";
        return;
      }

      const { role } = response.data.data;

      if (pathname.includes("/admin")) {
        if (role !== "teacher") {
          console.log("Illegal access!");
          window.location.href = "/admin/signin";
        }
      } else if (role !== "student") {
        console.log("Illegal access!");
        window.location.href = "/signin";
      }
    } catch (error) {
      console.error("Authentication failed:", error.message);
      window.location.href = "/signin";
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/signin" || pathname === "/admin/signin") return;

    const token = getToken();
    if (token) {
      checkAuth(token);
    } else {
      console.warn("No token found, redirecting to /signin");
      window.location.href = "/signin";
    }
  }, [pathname, checkAuth]);

  return null;
}

export default useAuthentication;
