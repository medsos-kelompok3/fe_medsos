/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomFormField } from "@/components/custom-formfield";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Layout from "@/components/layout";
// import { useToast } from "@/components/ui/use-toast";
import {
  ProfileUpdateType,
  // getProfile,
  profileUpdateSchema,
} from "@/utils/apis/users";
// import { deleteProfile, updateProfile } from "@/utils/apis/users/api";
import Alert from "@/components/alert";
import LayoutDekstop from "@/components/layout-dekstop";

const EditProfile = () => {
  // const { toast } = useToast();

  const form = useForm<ProfileUpdateType>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      address: "",
      gambar: "",
    },
  });

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   try {
  //     const result = await getProfile();
  //     form.setValue("full_name", result.payload.full_name);
  //     form.setValue("email", result.payload.email);
  //     form.setValue("address", result.payload.address);
  //     form.setValue("phone_number", result.payload.phone_number);
  //   } catch (error: any) {
  //     toast({
  //       title: "Oops! Something went wrong.",
  //       description: error.toString(),
  //       variant: "destructive",
  //     });
  //   }
  // }

  // async function handleUpdateProfile(body: ProfileUpdateType) {
  //   try {
  //     const result = await updateProfile(body);
  //     toast({
  //       description: result.message,
  //     });
  //   } catch (error: any) {
  //     toast({
  //       title: "Oops! Something went wrong.",
  //       description: error.toString(),
  //       variant: "destructive",
  //     });
  //   }
  // }

  // async function handleDeleteProfile() {
  //   try {
  //     const result = await deleteProfile();
  //     toast({
  //       description: result.message,
  //     });
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
        <div>
          <Form {...form}>
            <form className="flex flex-col gap-5 w-[300px] md:w-[600px] justify-center mx-auto mt-5">
              <div className="md:shadow-xl md:p-10 dark:md:border-slate-800 dark:md:border-2">
                <CustomFormField
                  control={form.control}
                  name="username"
                  label="Username">
                  {(field) => (
                    <Input
                      {...field}
                      disabled={form.formState.isSubmitted}
                      aria-disabled={form.formState.isSubmitted}
                    />
                  )}
                </CustomFormField>
                <CustomFormField
                  control={form.control}
                  name="email"
                  label="Email">
                  {(field) => (
                    <Input
                      {...field}
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
                      disabled={form.formState.isSubmitted}
                      aria-disabled={form.formState.isSubmitted}
                    />
                  )}
                </CustomFormField>
                <CustomFormField
                  control={form.control}
                  name="address"
                  label="Address">
                  {(field) => (
                    <Input
                      {...field}
                      disabled={form.formState.isSubmitted}
                      aria-disabled={form.formState.isSubmitted}
                    />
                  )}
                </CustomFormField>
                <CustomFormField
                  control={form.control}
                  name="gambar"
                  label="Profile Picture">
                  {(field) => (
                    <Input
                      {...field}
                      disabled={form.formState.isSubmitted}
                      aria-disabled={form.formState.isSubmitted}
                      type="file"
                      name="image"
                    />
                  )}
                </CustomFormField>
                <div className="mt-5 flex flex-row justify-end gap-1">
                  <Button type="submit">Submit</Button>
                  <Alert
                    title="Are you absolutely sure?"
                    description=" This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.">
                    <Button variant="destructive">Delete Account</Button>
                  </Alert>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </Layout>

      {/* // Dekstop */}
      <LayoutDekstop>
        <Form {...form}>
          <form className="flex flex-col gap-8 w-[300px] md:w-[600px] justify-center mx-auto mt-5">
            <div className="shadow-xl p-10 dark:border-slate-800 dark:border-2">
              <CustomFormField
                control={form.control}
                name="username"
                label="Username">
                {(field) => (
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="email"
                label="Email">
                {(field) => (
                  <Input
                    {...field}
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
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="address"
                label="Address">
                {(field) => (
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="gambar"
                label="Profile Picture">
                {(field) => (
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                    type="file"
                    name="image"
                  />
                )}
              </CustomFormField>
              <div className="mt-5 flex flex-row justify-end gap-1">
                <Button type="submit">Submit</Button>
                <Alert
                  title="Are you absolutely sure?"
                  description=" This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.">
                  <Button variant="destructive">Delete Account</Button>
                </Alert>
              </div>
            </div>
          </form>
        </Form>
      </LayoutDekstop>
    </>
  );
};

export default EditProfile;
