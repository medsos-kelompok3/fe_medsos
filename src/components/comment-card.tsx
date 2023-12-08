import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TimerIcon, MoreHorizontal } from "lucide-react";
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
import { Link } from "react-router-dom";
import { Textarea } from "./ui/textarea";
import { useToken } from "@/utils/context/token";

interface Props {
  usernamePost: string;
  image?: string;
  date: string;
  caption?: string;
  id?: number;
}

const CommentCard = (props: Props) => {
  const { usernamePost, date, caption } = props;
  const { username } = useToken();

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
        {usernamePost === username ? (
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DialogTrigger asChild>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                </DialogTrigger>
                <DropdownMenuItem>
                  <Link to="/profile">Detail</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit comment</DialogTitle>
                <DialogDescription>
                  Make changes to your comment here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div>
                <div>
                  <Textarea
                    id="comment"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-bluecircle hover:bg-bluecircle/90">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/profile">Detail</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <div className="flex flex-col items-start container gap-5 mt-2 lg:text-lg ms-3 mb-5">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default CommentCard;
