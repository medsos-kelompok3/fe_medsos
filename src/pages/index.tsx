import { DialogPosting } from "@/components/dialog-posting";
import Layout from "@/components/layout";
import PostingCard from "@/components/posting-card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/assets/logocircle2.svg";
import { HomeIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Search from "@/assets/search.svg";
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
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";


const Index = () => {
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
          <PostingCard
            username="inspiring_life"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f1/Bacharuddin_Jusuf_Habibie_official_portrait.jpg"
            date="23 September 2023"
            caption="The Figure of B.J. Habibie: The Innovator and Inspiring Leader
          The late B.J. Habibie is an unforgettable figure in Indonesian history. As the third President of Indonesia, he was not only a leader, but also a brilliant innovator.
          Known as the Father of Indonesian Technology, B.J Habibie has made a major contribution to the development of the aviation and technology industry in the country. The design of the N-250 and N-2130 aircraft is clear evidence of his brilliance."
          />
          <Separator />
          <div className="absolute ms-[305px] mt-[440px] md:mt-[690px] md:ms-[670px]">
            <DialogPosting />
          </div>
        </Layout>
      </div>

      {/* Dekstop */}
      <div className="hidden lg:block">
        <div className="flex flex-row justify-between gap-5 container font-roboto">
          <div className="w-[300px] h-full min-[1280px]:w-[500px]"></div>
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
            <PostingCard
              username="inspiring_life"
              image="https://upload.wikimedia.org/wikipedia/commons/f/f1/Bacharuddin_Jusuf_Habibie_official_portrait.jpg"
              date="23 September 2023"
              caption="The Figure of B.J. Habibie: The Innovator and Inspiring Leader
          The late B.J. Habibie is an unforgettable figure in Indonesian history. As the third President of Indonesia, he was not only a leader, but also a brilliant innovator.
          Known as the Father of Indonesian Technology, B.J Habibie has made a major contribution to the development of the aviation and technology industry in the country. The design of the N-250 and N-2130 aircraft is clear evidence of his brilliance."
            />
            <Separator />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
