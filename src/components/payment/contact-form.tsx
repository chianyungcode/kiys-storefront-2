import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

import { checkoutSchema } from "@/lib/zod-schema";

const ContactForm = () => {
  const form = useForm<z.infer<typeof checkoutSchema.contact>>({
    resolver: zodResolver(checkoutSchema.contact),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof checkoutSchema.contact>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <h1 className="font-medium text-2xl font-sora">Contact</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        <div className="flex gap-x-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="olivia@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Phone</FormLabel>
                <div className="relative flex items-center">
                  <span className="absolute inset-y-0 pr-2 flex items-center left-3 text-gray-500 text-sm border-r">
                    +62
                  </span>
                  <FormControl>
                    <Input
                      placeholder="812 3456 7890"
                      className="pl-[3.5rem]"
                      {...field}
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
