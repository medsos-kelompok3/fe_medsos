/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Write from "@/assets/write.svg";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { PostingSchema, postingSchema } from "@/utils/apis/posting";
import { CustomFormField } from "./custom-formfield";
import { postPosting } from "@/utils/apis/posting/api";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";

export function DialogPosting() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<PostingSchema>({
    resolver: zodResolver(postingSchema),
    defaultValues: {
      caption: "",
      gambar_posting: "",
    },
  });

  async function handleCreatePost(body: PostingSchema) {
    try {
      const result = await postPosting(body);
      toast({
        description: result.message,
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-full px-3 py-3 md:py-5 md:px-5 bg-bluecircle shadow-xl items-center justify-center">
          <img src={Write} alt="write" className="w-6" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new post</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                className="flex flex-col gap-2"
                onSubmit={form.handleSubmit(handleCreatePost)}>
                <CustomFormField
                  control={form.control}
                  name="caption"
                  label="Caption">
                  {(field) => (
                    <Textarea
                      {...field}
                      placeholder="What is happening?"
                      disabled={form.formState.isSubmitted}
                      aria-disabled={form.formState.isSubmitted}
                    />
                  )}
                </CustomFormField>
                <CustomFormField
                  control={form.control}
                  name="gambar_posting"
                  label="Image">
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="Choose File"
                      type="file"
                      name="image"
                      disabled={form.formState.isSubmitted}
                      aria-disabled={form.formState.isSubmitted}
                    />
                  )}
                </CustomFormField>
                <Button type="submit" className="mt-3">
                  Submit
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
