/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { ProfilePosting } from ".";

export const getProfile = async (id: string) => {
  try {
    const response = await axiosWithConfig.get(`https://virtserver.swaggerhub.com/BRILLIANFAUZI/SosmedAPI/1.0/user/${id}/profile`);
    console.log('profile', response)
    return response.data as ProfilePosting;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
