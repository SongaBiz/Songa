"use client"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { createUserAccount } from '@/utils';
import FormInput from "@/components/Elements/Forms/FormInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormWrapper from '../../Elements/Forms/FormWrapper';
import { TypeOf, object, string } from 'zod';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';


type UserDetails = {
    username: string;
    password: string;
    // confirmPassword: string;
    // onPhoneChange: (phone: string) => void;
  }
type UserDetailsProps = {
    updateFields: (fields: Partial<UserDetails>) => void;
}
const userDetailsSchema = object({
    username: string()
    .min(1, "Email address is required")
    .regex(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      { message: "Invalid email address" }
  ),
    // last_name: string()
    //   .min(1, "Last name is required"),
    password: string()
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    // confirmPassword: string()
    //   .min(1, "Confirm Password is required")
    //   .min(8, "Confirm Password must be more than 8 characters")
    //   .max(32, "Confirm Password must be less than 32 characters")
});
  
export type UserDetailsInput = TypeOf<typeof userDetailsSchema>;

const INITIAL_DATA: UserDetails = {
      username: "",
      // last_name: "",
      password: "",
      // confirmPassword: ""
}
export default function RegisterForm({updateFields}:UserDetailsProps) {
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);

  function updateData(fields: Partial<UserDetails>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
    updateFields(fields)
  }
  
  async function onSubmitHandler(data: UserDetails) {
    try {
      setIsLoading(true);
      await createUserAccount({
        username: data.username,
        // last_name: data.last_name,
        password: data.password
      });
    } catch (error: any) {
      if(error&&error.error){
        toast.error(error.error);
      } else {
        toast.error('An unknown error occurred!');
      }
    } finally {
      setIsLoading(false);
    }
  }

  let methods = useForm<UserDetailsInput>({
    resolver: zodResolver(userDetailsSchema),
  });
  
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;
    return (
      <FormProvider {...methods}>
       <form autoComplete='off' onSubmit={handleSubmit(onSubmitHandler)} action="" className="p-5">
        <FormWrapper title="">
          <FormInput value={data.username} onChange={(e) => updateData({ username: e.target.value })} label="Username" type="text" name="username" />
          {/* <FormInput value={data.last_name} onChange={(e) => updateData({ last_name: e.target.value })} label="Last Name" name="last_name" type="text" /> */}
          <FormInput value={data.password} onChange={(e) => updateData({ password: e.target.value })} label="Password" name="password" type="password" />
          {/* <FormInput value={data.confirmPassword} onChange={(e) => updateData({ confirmPassword: e.target.value })} label="Confirm Password" name="confirmPassword" type="password" /> */}
          <span className="block">
            Already have an account?{" "}
            <Link href="/login" className="text-ct-blue-600">
              Login Here
            </Link>
          </span>

          {isLoading ? (
         <div className="flex items-center justify-center">
           <ClipLoader color="#FB4552" loading={isLoading} size={35} />
         </div>
       ) : (
         <button
           type="submit"
           disabled={isLoading}
           className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
         > Register
         </button>
       )}
        </FormWrapper>
          
        </form>
      </FormProvider>
    );
  }
  