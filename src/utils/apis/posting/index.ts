import { Posting, postingSchema, PostingSchema, Detail } from "./types";
import { getPosting, editPosting, deletePosting } from "./api";

export { postingSchema, getPosting, editPosting, deletePosting };
export type { Posting, PostingSchema, Detail };
