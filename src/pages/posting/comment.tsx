import Layout from "@/components/layout";
import PostingCard from "@/components/posting-card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/assets/logocircle2.svg";
import { HomeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Search from "@/assets/search.svg";
import CommentCard from "@/components/comment-card";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToken } from "@/utils/context/token";
import { useToast } from "@/components/ui/use-toast";

const Comment = () => {
  const { token, changeToken } = useToken();
  const { toast } = useToast();

  function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <>
      <div className="flex justify-center items-center lg:hidden">
        <Layout>
          <PostingCard
            username="bambang.gembul"
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-palestine-design-template-270184bb5d001c088b94795c285f5b4a_screen.jpg?ts=1699254051"
            date="23 September 2023"
            caption="Brothers and sisters, let us unite as one voice to defend humanity and support Palestine. Currently, the ongoing conflict has had a devastating impact on the people there. This is a call for justice and peace. Remember, justice and peace require global collaboration. Together we strong! #FreePalestine"
          />
          <Separator />
          <CommentCard
            username="cutecat"
            date="23 September 2023"
            caption="One world, one voice: Let's stand together with Palestine. Deliver justice, end inequality, and support human rights in every corner of the earth. We are all citizens of the world who have the right to live in peace and justice."
          />
          <Separator />
          <CommentCard
            username="cutecat"
            date="23 September 2023"
            caption="From the river to the sea, PALESTINE WILL BE FREE!!!"
          />
          <Separator />
          <CommentCard
            username="cutecat"
            date="23 September 2023"
            caption="Inequality and suffering in Palestine require global attention. Let's come together to be a voice for those who are marginalized, stand against injustice, and strive to create a more just world."
          />
          <Separator />
        </Layout>
      </div>

      {/* Dekstop */}
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between gap-5 container font-roboto">
          <div className="w-[300px] h-full min-[1280px]:w-[500px]"></div>
          <div className=" flex cursor-pointer flex-col gap-5 fixed top-0 ps-5 pt-2 pe-5 w-[200px] min-[1280px]:w-[280px] border-r-2 border-slate-200 h-full">
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
                    <Link to="/my-profile">
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
            <Button className="bg-bluecircle">Posting</Button>
          </div>
          <div className="container p-7">
            <div>
              <img
                src={Search}
                alt="search"
                className="absolute w-5 ms-[10px] mt-[5px]"
              />
              <input
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                aria-label="Search User"
                className="flex mt-3 pl-8 h-8 w-full rounded-full border border-input bg-background/10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <PostingCard
              username="bambang.gembul"
              image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-palestine-design-template-270184bb5d001c088b94795c285f5b4a_screen.jpg?ts=1699254051"
              date="23 September 2023"
              caption="Brothers and sisters, let us unite as one voice to defend humanity and support Palestine. Currently, the ongoing conflict has had a devastating impact on the people there. This is a call for justice and peace. Remember, justice and peace require global collaboration. Together we strong! #FreePalestine"
            />
            <Separator />
            <CommentCard
              username="cutecat"
              date="23 September 2023"
              caption="One world, one voice: Let's stand together with Palestine. Deliver justice, end inequality, and support human rights in every corner of the earth. We are all citizens of the world who have the right to live in peace and justice."
            />
            <Separator />
            <CommentCard
              username="cutecat"
              date="23 September 2023"
              caption="From the river to the sea, PALESTINE WILL BE FREE!!!"
            />
            <Separator />
            <CommentCard
              username="cutecat"
              date="23 September 2023"
              caption="Inequality and suffering in Palestine require global attention. Let's come together to be a voice for those who are marginalized, stand against injustice, and strive to create a more just world."
            />
            <Separator />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
