/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { loginAccount } from "@/utils/apis/auth/api";
import { loginSchema, LoginSchema } from "@/utils/apis/auth";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/custom-formfield";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Logo from "@/assets/logocircle2.svg";
import { useToken } from "@/utils/context/token";

const login = () => {
  const { changeToken, changeIdUser, changeUsername } = useToken();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmitLogin(data: LoginSchema) {
    try {
      const result = await loginAccount(data);
      changeIdUser(result.id);
      changeToken(result.token);
      changeUsername(result.username)
      console.log('username', result.username)
      console.log('tokenres', result.token)
      toast({
        description: 'Succesfully login',
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="relative flex flex-col m-6 space-y-8 bg-white dark:bg-black dark:border-slate-800 dark:border-2 dark:text-white md:shadow-2xl  rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center items-center p-8 md:p-14">
          <img src={Logo} alt="Logo" className="w-[125px] pb-14" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitLogin)}>
              <CustomFormField
                control={form.control}
                name="username"
                label="Username">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Username"
                    type="text"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Password"
                    type="password"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <Button
                className="w-[300px] my-3 bg-bluecircle hover:bg-bluecircle/90"
                type="submit"
                disabled={form.formState.isSubmitted}
                aria-disabled={form.formState.isSubmitted}>
                {form.formState.isSubmitted ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
          <div className="text-center text-gray-400">
            <p>
              Dont' have an account?{" "}
              <span className="font-bold text-bluecircle">
                <Link to={"/register"}>Register for free</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
