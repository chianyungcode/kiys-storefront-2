import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import Footer from "../components/ui/footer";
import Navbar from "../components/ui/navbar";

import { useAuth } from "@/context/auth-provider";
import { axiosAuth } from "@/lib/axios";

const RootLayout = () => {
  const { accessToken, setAccessToken, setUserId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { data } = await axiosAuth.post<{
          data: { userId: string; accessToken: string };
        }>("/auth/refresh/token");
        setAccessToken(data.data.accessToken);
        setUserId(data.data.userId);
      } catch (error) {
        console.error("Failed to refresh token:", error);
        setAccessToken(null);
        setUserId(null);
      }
    };

    if (!accessToken) {
      fetchMe();
    }
  }, [accessToken, setAccessToken, navigate, setUserId]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export const Route = createFileRoute("/_layout")({
  component: RootLayout,
});
