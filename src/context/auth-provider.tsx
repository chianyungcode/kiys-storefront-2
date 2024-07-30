import { InternalAxiosRequestConfig } from "axios";
import { createContext, useContext, useLayoutEffect, useState } from "react";

import { axiosInstance } from "@/lib/axios";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useLayoutEffect(() => {
    const authInterceptor = axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig & { _retry?: boolean }) => {
        config.headers.Authorization =
          !config._retry && accessToken
            ? `Bearer ${accessToken}`
            : config.headers.Authorization;

        return config;
      }
    );

    // Cleanup interceptor on unmount
    return () => {
      axiosInstance.interceptors.request.eject(authInterceptor);
    };
  }, [accessToken]); // Add token as a dependency

  useLayoutEffect(() => {
    const refreshInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response.status === 401 &&
          error.response.data.errors === "unauthorized"
        ) {
          try {
            const response = await axiosInstance.post("/auth/refresh/token");

            setAccessToken(response.data.data.accessToken); // Ini sudah benar sesuai json

            originalRequest.headers["Authorization"] =
              `Bearer ${response.data.data.accessToken}`;

            originalRequest._retry = true;

            return axiosInstance(originalRequest);
          } catch (error) {
            setAccessToken(null);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(refreshInterceptor);
    };
  }, [setAccessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within a provider");
  }

  return authContext;
};
