/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/assets/logocircle2.svg";
import { HomeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useToken } from "@/utils/context/token";
import { useToast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { PostingSchema, postingSchema } from "@/utils/apis/posting";
import { CustomFormField } from "./custom-formfield";
import { postPosting } from "@/utils/apis/posting/api";

const NavbarDekstop = () => {
  const { token, changeToken, changeIdUser } = useToken();
  const { toast } = useToast();
  const navigate = useNavigate()

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
      navigate('/')
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  function handleLogout() {
    changeToken();
    changeIdUser();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <div className=" flex cursor-pointer flex-col gap-5 fixed top-0 ps-5 pt-2 pe-5 w-[200px] min-[1280px]:w-[280px] border-r-[1px] border-slate-200 dark:border-slate-800 h-full">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-36 py-5" />
      </Link>
      <Link to="/" className="flex flex-row gap-2">
        <HomeIcon size={38} />
        <p className="mt-2 text-xl">Home</p>
      </Link>
      <div className="flex flex-row gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Welcome</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {token ? (
              <Link to="/user/1/profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
            ) : (
              <></>
            )}
            <DropdownMenuSeparator />
            {token ? (
              <DropdownMenuItem onClick={() => handleLogout()}>
                Logout
              </DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem>
                  <Link to="/login">Login</Link>{" "}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register">Register</Link>{" "}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="mt-2 text-xl">My Profile</p>
      </div>
      <div className="flex flex-row gap-2">
        <ModeToggle />
        <p className="mt-2 text-xl">Theme</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-bluecircle hover:bg-bluecircle/90">
            Posting
          </Button>
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
    </div>
  );
};

export default NavbarDekstop;
