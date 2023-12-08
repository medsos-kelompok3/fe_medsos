/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { LoginSchema, RegisterSchema } from ".";
import { Response } from "@/utils/types/api";

export const loginAccount = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post(
      "/login",
      body
    );
    console.log("response login", response.data.data);
    return response.data.data as {
      token: string;
      id: string;
      username: string;
    };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const registerAccount = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post(
      "/register",
      body
    );
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
