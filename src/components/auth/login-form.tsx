import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

import { useAuth } from "@/context/auth-provider";
import { axiosAuth } from "@/lib/axios";
import { authenticationSchema } from "@/lib/zod-schema";

const LoginForm = () => {
  const { setAccessToken } = useAuth();

  const form = useForm<z.infer<typeof authenticationSchema.login>>({
    resolver: zodResolver(authenticationSchema.login),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof authenticationSchema.login>) => {
    try {
      const response = await axiosAuth.post("/auth/login", {
        email,
        password,
      });

      setAccessToken(response.data.data.auth.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="space-y-2">
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
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-[#323334]">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
