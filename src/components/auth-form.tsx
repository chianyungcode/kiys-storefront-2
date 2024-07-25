import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { authenticationSchema } from "@/lib/zod-schema";

interface AuthFormProps {
  isLoginForm: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLoginForm }) => {
  const [isPasswordValid, setIsPasswordValid] = useState({
    length: false,
    specialChar: false,
    capitalLetter: false,
    number: false,
  });

  // Conditional Schema
  const conditionalSchema = isLoginForm
    ? authenticationSchema.login
    : authenticationSchema.register;
  const conditionalButtonText = isLoginForm ? "Login" : "Register";

  const form = useForm<z.infer<typeof conditionalSchema>>({
    resolver: zodResolver(conditionalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchPassword = form.watch("password");

  useEffect(() => {
    if (!isLoginForm) {
      setIsPasswordValid({
        length: watchPassword.length >= 8,
        specialChar: /.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*/.test(
          watchPassword
        ),
        capitalLetter: /[A-Z]/.test(watchPassword),
        number: /\d/.test(watchPassword),
      });
    }
  }, [watchPassword, isLoginForm]);

  const onSubmit = (values: z.infer<typeof conditionalSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="space-y-2">
          {!isLoginForm && (
            <>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Rodrigo" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!isLoginForm && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        {!isLoginForm && (
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
        )}
        <Button type="submit" className="w-full bg-[#323334]">
          {conditionalButtonText}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
