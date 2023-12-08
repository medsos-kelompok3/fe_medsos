import * as z from "zod";

// const MAX_FILE_SIZE = 5000000000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const postingSchema = z.object({
  caption: z.string().optional(),
  gambar_posting: z
    .any()
    // .refine(
    //   (files) => files?.[0]?.size <= MAX_FILE_SIZE,
    //   "Max image size is 5MB"
    // )
    // .refine(
    //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    //   "Only .jpeg, .jpg, and .png formats are supported"
    // )
    .optional()
    .or(z.literal("")),
});

export type PostingSchema = z.infer<typeof postingSchema>;

export interface Posting {
  id: number;
  caption: string;
  gambar_posting: string;
  user_name: string;
}

export interface Detail {
  posting_id: number;
  caption: string;
  gambar: string;
  total_comment: null;
  user: {
    username: string;
    avatar: string;
  };
}
