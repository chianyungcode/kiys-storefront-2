import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAuth } from "@/context/auth-provider";
import { axiosAuth } from "@/lib/axios";

const ProtectedLayout = () => {
  const { accessToken, setAccessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await axiosAuth.post("/auth/refresh/token");
        const token = response.data.data.accessToken;
        setAccessToken(token);
      } catch (error) {
        navigate({ to: "/login" });
        console.log(error);
        setAccessToken(null);
      }
    };

    if (!accessToken) {
      fetchMe();
    }
  }, [accessToken, setAccessToken, navigate]);

  return (
    <div>
      <p>Protected Layout</p>
      <Outlet />
    </div>
  );
};

export const Route = createFileRoute("/_layout/_protected")({
  component: ProtectedLayout,
});
