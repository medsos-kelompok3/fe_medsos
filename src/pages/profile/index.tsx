/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "@/components/layout";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import PostingCard from "@/components/posting-card";
import { DialogPosting } from "@/components/dialog-posting";
import LayoutDekstop from "@/components/layout-dekstop";
// import { useToast } from "@/components/ui/use-toast";
// import { useToken } from "@/utils/context/token";
// import { ProfilePosting, getProfile } from "@/utils/apis/users";
// import { useEffect, useState } from "react";

const Index = () => {
  // const { toast } = useToast();
  // const { id } = useToken();

  // const [profile, setProfile] = useState<ProfilePosting>();

  // useEffect(() => {
  //   fetchDataProfile(id);
  // }, []);

  // async function fetchDataProfile(id: string) {
  //   try {
  //     const result = await getProfile(id);
  //     console.log("profilepage", result);
  //     setProfile(result);
  //   } catch (error: any) {
  //     toast({
  //       title: "Oops! Something went wrong.",
  //       description: error.toString(),
  //       variant: "destructive",
  //     });
  //   }
  // }

  return (
    <>
      <Layout>
        <div className="container md:w-[700px] pb-3 ">
          <img
            src="https://static.promediateknologi.id/crop/0x0:999x765/750x500/webp/photo/2023/06/29/IMG_20230629_115509-4202597708.png"
            alt="chen zheyuan"
            className="rounded-full aspect-square object-cover w-16 md:w-32"
          />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex flex-row">
                  <p className="font-bold text-xl pb-2">yuanyuan</p>
                  <ChevronDown className="pt-1" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/user/1">Edit</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex flex-row gap-2">
              <Mail size={20} />
              <p>zheyuan@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2">
              <MapPin size={20} />
              <p>Shenzen</p>
            </div>
            <p>A professional singer of Litle Star only if i'm alone</p>
          </div>
        </div>
        <div>
          <Separator />
          <div className="flex justify-center items-center">
            <p className="font-semibold p-5">Your Posts</p>
          </div>
          <Separator />
        </div>
        <div className="md:container">
          {/* <PostingCard
            username="{profile!.username}"
            image="{profile!.posting[0].gambar}"
            date="23 September 2023"
            caption="{profile?.posting[0].caption}"
          /> */}
          <Separator />
          <PostingCard
            usernamePost="inspiring_life"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f1/Bacharuddin_Jusuf_Habibie_official_portrait.jpg"
            date="23 September 2023"
            caption="The Figure of B.J. Habibie: The Innovator and Inspiring Leader
          The late B.J. Habibie is an unforgettable figure in Indonesian history. As the third President of Indonesia, he was not only a leader, but also a brilliant innovator.
          Known as the Father of Indonesian Technology, B.J Habibie has made a major contribution to the development of the aviation and technology industry in the country. The design of the N-250 and N-2130 aircraft is clear evidence of his brilliance."
          />
          <Separator />
        </div>
        <div className="absolute ms-[305px] mt-[440px] md:mt-[690px] md:ms-[670px] lg:hidden">
          <DialogPosting />
        </div>
      </Layout>

      {/* Dekstop */}

      <LayoutDekstop>
        <div className="md:w-[700px] pb-5 pt-5">
          <img
            src="https://static.promediateknologi.id/crop/0x0:999x765/750x500/webp/photo/2023/06/29/IMG_20230629_115509-4202597708.png"
            alt="chen ye zuan"
            className="rounded-full aspect-square object-cover w-16 md:w-32"
          />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex flex-row">
                  <p className="font-bold text-xl pb-2">yuanyuan</p>
                  <ChevronDown className="pt-1" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/user/1">Edit</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex flex-row gap-2">
              <Mail size={20} />
              <p>zheyuan@gmail.com</p>
            </div>
            <div className="flex flex-row gap-2">
              <MapPin size={20} />
              <p>Shenzen</p>
            </div>
            <p>A professional singer of Litle Star only if i'm alone</p>
          </div>
        </div>
        <div>
          <Separator />
          <div className="md:flex md:justify-center md:items-center">
            <p className=" p-5">Your Posts</p>
          </div>
          <Separator />
        </div>
        <div className="md:container">
          <PostingCard
            usernamePost="bambang.gembul"
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-palestine-design-template-270184bb5d001c088b94795c285f5b4a_screen.jpg?ts=1699254051"
            date="23 September 2023"
            caption="Brothers and sisters, let us unite as one voice to defend humanity and support Palestine. Currently, the ongoing conflict has had a devastating impact on the people there. This is a call for justice and peace. Remember, justice and peace require global collaboration. Together we strong! #FreePalestine"
          />
          <Separator />
          <PostingCard
            usernamePost="inspiring_life"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f1/Bacharuddin_Jusuf_Habibie_official_portrait.jpg"
            date="23 September 2023"
            caption="The Figure of B.J. Habibie: The Innovator and Inspiring Leader
          The late B.J. Habibie is an unforgettable figure in Indonesian history. As the third President of Indonesia, he was not only a leader, but also a brilliant innovator.
          Known as the Father of Indonesian Technology, B.J Habibie has made a major contribution to the development of the aviation and technology industry in the country. The design of the N-250 and N-2130 aircraft is clear evidence of his brilliance."
          />
          <Separator />
        </div>
      </LayoutDekstop>
    </>
  );
};

export default Index;
