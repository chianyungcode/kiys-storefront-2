import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "keep-react";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { useAuth } from "@/context/auth-provider";
import { axiosApi } from "@/lib/axios";
import { cn } from "@/lib/utils";
import { authenticationSchema } from "@/lib/zod-schema";

const RegisterForm = () => {
  const { setToken } = useAuth();
  const [isPasswordValid, setIsPasswordValid] = useState({
    length: false,
    specialChar: false,
    capitalLetter: false,
    number: false,
  });

  const form = useForm<z.infer<typeof authenticationSchema.register>>({
    resolver: zodResolver(authenticationSchema.register),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      address: "",
    },
  });

  const watchPassword = form.watch("password");

  useEffect(() => {
    setIsPasswordValid({
      length: watchPassword.length >= 8,
      specialChar: /.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/.test(
        watchPassword
      ),
      capitalLetter: /[A-Z]/.test(watchPassword),
      number: /\d/.test(watchPassword),
    });
  }, [watchPassword]);

  const onSubmit = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    address,
  }: z.infer<typeof authenticationSchema.register>) => {
    try {
      const response = await axiosApi.post("/auth/register", {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        address,
      });

      console.log(response.data);
      setToken(response.data.data.auth.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Olivia" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Rodrigo" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="olivia@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 rounded-lg text-sm">
          <div
            className={cn(
              "flex items-start justify-start gap-1 text-sm",
              isPasswordValid.length
                ? "text-green-700 transition-colors"
                : "text-gray-500"
            )}
          >
            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
            Password must be at least 8 characters long
          </div>
          <div
            className={cn(
              "flex items-start justify-start gap-1",
              isPasswordValid.specialChar
                ? "text-green-700 transition-colors"
                : "text-gray-500"
            )}
          >
            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
            Password must contain at least one special character
          </div>
          <div
            className={cn(
              "flex items-start justify-start gap-1",
              isPasswordValid.capitalLetter
                ? "text-green-700 transition-colors"
                : "text-gray-500"
            )}
          >
            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
            Password must contain at least one uppercase letter
          </div>
          <div
            className={cn(
              "flex items-start justify-start gap-1",
              isPasswordValid.number
                ? "text-green-700 transition-colors"
                : "text-gray-500"
            )}
          >
            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
            Password must contain at least one number
          </div>
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
