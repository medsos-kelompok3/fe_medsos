import Layout from "@/components/layout";
import PostingCard from "@/components/posting-card";
import { Separator } from "@/components/ui/separator";
import CommentCard from "@/components/comment-card";
import LayoutDekstop from "@/components/layout-dekstop";

const Comment = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Layout>
          <PostingCard
            usernamePost="bambang.gembul"
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-palestine-design-template-270184bb5d001c088b94795c285f5b4a_screen.jpg?ts=1699254051"
            date="23 September 2023"
            caption="Brothers and sisters, let us unite as one voice to defend humanity and support Palestine. Currently, the ongoing conflict has had a devastating impact on the people there. This is a call for justice and peace. Remember, justice and peace require global collaboration. Together we strong! #FreePalestine"
          />
          <Separator />
          <CommentCard
            usernamePost="cutecat"
            date="23 September 2023"
            caption="One world, one voice: Let's stand together with Palestine. Deliver justice, end inequality, and support human rights in every corner of the earth. We are all citizens of the world who have the right to live in peace and justice."
          />
          <Separator />
          <CommentCard
            usernamePost="cutecat"
            date="23 September 2023"
            caption="From the river to the sea, PALESTINE WILL BE FREE!!!"
          />
          <Separator />
          <CommentCard
            usernamePost="cutecat"
            date="23 September 2023"
            caption="Inequality and suffering in Palestine require global attention. Let's come together to be a voice for those who are marginalized, stand against injustice, and strive to create a more just world."
          />
          <Separator />
        </Layout>
      </div>

      {/* Dekstop */}

      <LayoutDekstop>
        <div>
          <PostingCard
            usernamePost="bambang.gembul"
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-palestine-design-template-270184bb5d001c088b94795c285f5b4a_screen.jpg?ts=1699254051"
            date="23 September 2023"
            caption="Brothers and sisters, let us unite as one voice to defend humanity and support Palestine. Currently, the ongoing conflict has had a devastating impact on the people there. This is a call for justice and peace. Remember, justice and peace require global collaboration. Together we strong! #FreePalestine"
          />
          <Separator />
          <CommentCard
            usernamePost="cutecat"
            date="23 September 2023"
            caption="One world, one voice: Let's stand together with Palestine. Deliver justice, end inequality, and support human rights in every corner of the earth. We are all citizens of the world who have the right to live in peace and justice."
          />
          <Separator />
          <CommentCard
            usernamePost="cutecat"
            date="23 September 2023"
            caption="From the river to the sea, PALESTINE WILL BE FREE!!!"
          />
          <Separator />
          <CommentCard
            usernamePost="cutecat"
            date="23 September 2023"
            caption="Inequality and suffering in Palestine require global attention. Let's come together to be a voice for those who are marginalized, stand against injustice, and strive to create a more just world."
          />
          <Separator />
        </div>
      </LayoutDekstop>
    </>
  );
};

export default Comment;
