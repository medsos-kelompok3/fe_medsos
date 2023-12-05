import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import CommentBlack from "@/assets/commentblack.svg";
import { useState } from "react";
import { TimerIcon } from "lucide-react";
import CommentWhite from "@/assets/commentwhite.svg";
import DotWhite from "@/assets/dotwhite.svg";
import DotBlack from "@/assets/dotblack.svg";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  username: string;
  image?: string;
  date: string;
  caption?: string;
  id?: number;
}

const PostingCard = (props: Props) => {
  const { username, image, date, caption } = props;

  return (
    <div className="container mt-5">
      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0 ">
            <h1 className="font-bold lg:text-lg">{username}</h1>
            <p className="flex flex-row text-xs">
              <TimerIcon size={15} />
              {date}
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img src={DotBlack} alt="dot" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Detail</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-2 lg:text-lg">
        <Link to="/comment">
          <p>{caption}</p>
          <img
            src={image}
            alt="posting"
            className="rounded-xl shadow-md mt-5 lg:mb-4"
          />
        </Link>
        <Separator />
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-row gap-2 mb-5 lg:mb-3 cursor-pointer">
              <img src={CommentBlack} alt="comment" className="w-5 lg:w-10" />
              <p className="lg:text-lg lg:mt-2">Comment</p>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Comment</DialogTitle>
              <DialogDescription>
                Make your comment here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Input id="comment" className="col-span-3" />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PostingCard;
