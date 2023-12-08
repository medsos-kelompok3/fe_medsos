import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(6, { message: "Password is required" }),
});

export const registerSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(6, { message: "Password is required" }),
    repassword: z.string().min(6, { message: "Retype password is required" }),
    role: z.string().default("user"),
    address: z.string().min(1, { message: "Address is required" }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Password don't match",
    path: ["repassword"],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;

export interface DecodeJwt {
  exp: number;
  iat: number;
  id: number;
}
