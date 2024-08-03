import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAuth } from "@/context/auth-provider";
import { axiosAuth } from "@/lib/axios";

const ProtectedLayout = () => {
  const { accessToken, setAccessToken, setUserId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await axiosAuth.post("/auth/refresh/token");
        const userIdResponse = response.data.data.userId;
        const token = response.data.data.accessToken;
        setAccessToken(token);
        setUserId(userIdResponse);
      } catch (error) {
        navigate({ to: "/login" });
        console.log(error);
        setAccessToken(null);
      }
    };

    if (!accessToken) {
      fetchMe();
    }
  }, [accessToken, setAccessToken, navigate, setUserId]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export const Route = createFileRoute("/_layout/_protected")({
  component: ProtectedLayout,
});
