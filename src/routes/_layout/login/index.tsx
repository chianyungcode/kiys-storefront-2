import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import LoginForm from "@/components/auth/login-form";
import Container from "@/components/ui/container";
import { useAuth } from "@/context/auth-provider";

const LoginPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);

    if (token) {
      navigate({ to: "/products" });
    }
  }, [token, navigate]);

  return (
    <Container className="grid grid-cols-2 gap-x-10">
      <div className="flex flex-col items-center justify-center space-y-24">
        <h1 className="text-3xl text-center font-sora font-semibold text-[#323334]">
          PERIHPERAL THAT ENHANCE YOUR WORK
        </h1>
        <div className="space-y-2 flex flex-col items-center w-full">
          <p>Dont have an account?</p>
          <Link to="/register" className="underline">
            Create Account
          </Link>
        </div>
      </div>
      <div className="relative bg-red-500 rounded-3xl overflow-hidden">
        <img
          src="/public/images/keyboards.webp"
          alt="bg-image"
          className="h-[60rem] object-cover "
        />
        <div className="absolute inset-0 bg-black/20 justify-center lg:px-24 md:px-12 py-6 flex flex-col items-center">
          <div className="bg-white rounded-t-2xl rounded-b-md w-full flex items-center justify-center py-8 px-2">
            <h1 className="font-sora font-semibold">Login to your account</h1>
          </div>
          <div className="bg-white rounded-t-md rounded-b-2xl w-full flex items-start py-8 px-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export const Route = createFileRoute("/_layout/login/")({
  component: LoginPage,
});
