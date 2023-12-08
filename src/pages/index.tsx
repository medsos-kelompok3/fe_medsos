/* eslint-disable @typescript-eslint/no-explicit-any */
import { DialogPosting } from "@/components/dialog-posting";
import Layout from "@/components/layout";
import LayoutDekstop from "@/components/layout-dekstop";
import PostingCard from "@/components/posting-card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Posting } from "@/utils/apis/posting";
import { getPosting } from "@/utils/apis/posting/api";
import { useEffect, useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [posting, setPosting] = useState<Posting[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPosting();
      setPosting(result);
      // console.log("posting", result);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

console.log('posting', posting)

  return (
    <>
      <div className="flex justify-center items-center">
        <Layout>
          {posting.map((row) => {
            return (
              <>
                <PostingCard
                  key={row.id}
                  usernamePost={row.user_name}
                  image={row.gambar_posting}
                  date="23 September 2023"
                  caption={row.caption}
                  id={row.id}
                />
                <Separator />
              </>
            );
          })}
          <div className="absolute ms-[305px] mt-[440px] md:mt-[750px] md:ms-[670px] lg:hidden">
            <DialogPosting />
          </div>
        </Layout>
      </div>

      {/* Dekstop */}

      <LayoutDekstop>
        <div>
          {posting.map((row) => {
            return (
              <>
                <PostingCard
                  key={row.id}
                  usernamePost={row.user_name}
                  image={row.gambar_posting}
                  date="23 September 2023"
                  caption={row.caption}
                  id={row.id}
                />
                <Separator />
              </>
            );
          })}
        </div>
      </LayoutDekstop>
    </>
  );
};

export default Index;
