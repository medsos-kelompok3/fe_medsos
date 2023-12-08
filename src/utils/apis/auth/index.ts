import {
  LoginSchema,
  loginSchema,
  registerSchema,
  RegisterSchema,
} from "./types";
import { loginAccount, registerAccount } from "./api";

export { loginSchema, registerSchema, loginAccount, registerAccount };
export type { LoginSchema, RegisterSchema };
