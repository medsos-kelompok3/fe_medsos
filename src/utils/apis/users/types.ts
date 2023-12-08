import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const profileUpdateSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  username: z.string().min(1, { message: "Full name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character" }),
  address: z.string().min(1, { message: "Address is required" }),
  gambar: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpeg, .jpg, and .png formats are supported"
    ),
});

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;

export interface Profile {
  user_id: number;
  username: string;
  email: string;
  address: string;
  bio: string;
  avatar: string;
}

export interface ProfilePayload {
  username: string;
  email: string;
  address: string;
  bio: string;
  avatar: string;
}

export interface ProfilePosting {
  user_id: number;
  username: string;
  email: string;
  address: string;
  bio: string;
  avatar: string;
  posting: {
    posting_id: number;
    caption: string;
    gambar: string;
    total_comment: number;
    user: {
      avatar: string;
      username: string;
    };
  }[];
}
