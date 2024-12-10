import { authenticate } from "@/lib/authenticate";
import { getToken } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

function useAuthentication() {
  const pathname = usePathname();
  const router = useRouter();

  const checkAuth = useCallback(async (token) => {
    try {
      const response = await authenticate("protected", token);

      if (response.status === 401) {
        const redirectPath = pathname.includes("admin") ? "/admin/signin" : "/signin";
        router.replace(redirectPath);
        return;
      }

      const { role } = response?.data?.data;

      if (pathname.includes("/admin")) {
        if (role !== "teacher") {
          console.warn("Illegal access!");
          router.replace("/admin/signin");
        } else if (pathname === "/admin/signin") {
          router.replace("/admin/dashboard");
        }
      } else if (role !== "student") {
        console.warn("Illegal access!");
        router.replace("/signin");
      } else if (pathname === "/signin") {
        router.replace("/");
      }
    } catch (error) {
      console.error("Authentication failed:", error.message);
      const redirectPath = pathname.includes("admin") ? "/admin/signin" : "/signin";
      router.replace(redirectPath);
    }
  }, [pathname, router]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      checkAuth(token);
    } else {
      console.warn("No token found, redirecting to /signin");
      const redirectPath = pathname.includes("admin") ? "/admin/signin" : "/signin";
      router.replace(redirectPath);
    }
  }, [pathname, checkAuth, router]);

  return null;
}

export default useAuthentication;
