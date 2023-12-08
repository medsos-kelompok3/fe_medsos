/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { TimerIcon, MoreHorizontal, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "./custom-formfield";
import { PostingSchema, postingSchema } from "@/utils/apis/posting/types";
import { useToast } from "./ui/use-toast";
import { deletePosting, editPosting } from "@/utils/apis/posting/api";
import { useToken } from "@/utils/context/token";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  usernamePost: string;
  image?: string;
  date: string;
  caption?: string;
  id?: number;
}

const PostingCard = (props: Props) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { usernamePost, image, date, caption, id } = props;
  const { username } = useToken();

  const navigateTo = (id: string) => {
    navigate(`/posting/${id}`, {
      state: {
        id: id,
      },
    });
  };

  const form = useForm<PostingSchema>({
    resolver: zodResolver(postingSchema),
    defaultValues: {
      caption: "",
      gambar_posting: "",
    },
  });

  async function handleEditPosting(body: PostingSchema, id: string) {
    try {
      const result = await editPosting(body, id);
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

  async function handleDeletePosting(id: string) {
    try {
      const result = await deletePosting(id);
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

  useEffect(() => {
    console.log("username:", username);
    console.log("usernamePost:", usernamePost);
  }, [username, usernamePost]);

  return (
    <div className="container mt-5">
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0 ">
            <h1 className="font-bold lg:text-lg">{usernamePost}</h1>
            <p className="flex flex-row text-xs">
              <TimerIcon size={15} />
              {date}
            </p>
          </div>
        </div>
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {usernamePost === username && (
                  <DialogTrigger asChild>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </DialogTrigger>
                )}
                <DropdownMenuItem>
                  <button onClick={() => navigateTo(id!.toString())}>
                    Detail
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit your post</DialogTitle>
                <DialogDescription>
                  <Form {...form}>
                    <form
                      className="flex flex-col gap-2"
                      onSubmit={form.handleSubmit((body) =>
                        handleEditPosting(body, id!.toString())
                      )}>
                      <CustomFormField
                        control={form.control}
                        name="caption"
                        label="Title">
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
                      <div className="flex flex-row gap-1 justify-end items-end">
                        <Button type="submit" className="mt-5">
                          Submit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeletePosting(id!.toString())}>
                          Delete
                        </Button>
                      </div>
                    </form>
                  </Form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-2 lg:text-lg">
        <div onClick={() => navigateTo(id!.toString())}>
          <p>{caption}</p>
          <img
            src={image}
            alt="posting"
            className="rounded-xl shadow-md mt-5 lg:mb-4"
          />
        </div>
        <Separator />
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-row gap-2 mb-5 lg:mb-3 cursor-pointer">
              <MessageCircle />
              <p className="lg:text-lg">Comment</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Comment</DialogTitle>
              <DialogDescription>
                Make your comment here. Click submit when you're done.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Textarea id="comment" className="col-span-3" />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-bluecircle hover:bg-bluecircle/90">
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PostingCard;
