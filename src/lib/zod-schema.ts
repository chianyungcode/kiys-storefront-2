import { z } from "zod";

export const authenticationSchema = {
  register: z
    .object({
      firstName: z.string().min(1, { message: "Minimum 1 character" }),
      lastName: z.string().min(1, { message: "Minimum 1 character" }),
      email: z.string().email(),
      password: z
        .string()
        .regex(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<?/]).{8,}$/,
          {
            message:
              "Password must contain at least one digit number, one lowercase and one uppercase letter, one special character, and be at least 8 characters long",
          }
        ),
      confirmPassword: z.string().min(8),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Password doesn't match",
        path: ["confirmPassword"],
      }
    ),

  login: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
};

export const checkoutSchema = {
  contact: z.object({
    email: z.string().email(),
    phone: z.string(),
  }),
  delivery: z.object({
    country: z.string(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    province: z.string().min(1),
    postalCode: z.string().min(1),
  }),
};
