/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { LoginSchema } from ".";

export const loginAccount = async (body: LoginSchema) => {
  try {
    const response = await axiosWithConfig.post(
      "https://virtserver.swaggerhub.com/BRILLIANFAUZI/SosmedAPI/1.0/login",
      body
    );
    console.log("response login", response.data);
    return response.data as { token: string };
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
