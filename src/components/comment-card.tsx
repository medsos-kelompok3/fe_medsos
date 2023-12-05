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

interface Props {
  username: string;
  image?: string;
  date: string;
  caption?: string;
  id?: number;
}

const CommentCard = (props: Props) => {
  const { username, date, caption } = props;

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
      <div className="flex flex-col items-start container gap-5 mt-2 lg:text-lg ms-3 mb-5">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default CommentCard;
