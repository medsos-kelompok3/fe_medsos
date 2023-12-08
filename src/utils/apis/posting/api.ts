/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosWithConfig from "../axiosWithConfig";
import { Posting, PostingSchema } from ".";
import { Response } from "@/utils/types/api";

export const getPosting = async () => {
  try {
    const response = await axiosWithConfig.get(
      "http://3.25.229.75:8000/posting"
    );
    // console.log("response posting", response.data.data);
    return response.data.data as Posting[];
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editPosting = async (body: PostingSchema, id: string) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;
    for (key in body) {
      if (body[key]) {
        formData.append(key, body[key]);
      }
    }
    console.log("body", body);
    console.log("id", id);
    console.log('formdata', formData)
    const response = await axiosWithConfig.put(
      `http://3.25.229.75:8000/posting/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const postPosting = async (body: PostingSchema) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;
    for (key in body) {
      if (body[key]) {
        formData.append(key, body[key]);
      }
    }
    console.log('formdataposting', formData)
    const response = await axiosWithConfig.post(
      "http://3.25.229.75:8000/posting",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("post", response.data);
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deletePosting = async (id: string) => {
  try {
    const response = await axiosWithConfig.delete(
      `http://3.25.229.75:8000/posting/${id}`
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
