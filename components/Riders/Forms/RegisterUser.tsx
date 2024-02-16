"use client"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { apiRegisterUser } from "@/utils/lib/api-requests";
import FormInput from "@/components/Elements/Forms/FormInput";
import Link from "next/link";
import useStore from "@/utils/store";
import { useRouter } from "next/navigation";
import FormWrapper from '../../Elements/Forms/FormWrapper';
import { TypeOf, object, string } from 'zod';
import { toast } from 'react-toastify';


type UserDetails = {
    first_name: string;
    last_name: string;
    password: string;
    confirmPassword: string;
    // onPhoneChange: (phone: string) => void;
  }
  type UserDetailsProps = {
    updateFields: (fields: Partial<UserDetails>) => void;
  }
const userDetailsSchema = object({
    first_name: string()
    .min(1, "First name is required"),
    last_name: string()
      .min(1, "Last name is required"),
    password: string()
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    confirmPassword: string()
      .min(1, "Confirm Password is required")
      .min(8, "Confirm Password must be more than 8 characters")
      .max(32, "Confirm Password must be less than 32 characters")
});
  
export type UserDetailsInput = TypeOf<typeof userDetailsSchema>;

const INITIAL_DATA: UserDetails = {
      first_name: "",
      last_name: "",
      password: "",
      confirmPassword: ""
}
export default function RegisterForm({updateFields}:UserDetailsProps) {
    const store = useStore();
    const router = useRouter();
    const [data, setData] = useState(INITIAL_DATA);

    function updateData(fields: Partial<UserDetails>) {
        setData(prev => {
          return { ...prev, ...fields };
        });
        updateFields(fields)
      }
  
    const methods = useForm<UserDetailsInput>({
      resolver: zodResolver(userDetailsSchema),
    });
  
    const {
      reset,
      handleSubmit,
      formState: { isSubmitSuccessful },
    } = methods;
  
    useEffect(() => {
      if (isSubmitSuccessful) {
        reset();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);
  
    async function RegisterUserFunction(credentials: UserDetailsInput) {
      store.setRequestLoading(true);
      try {
        const user = await apiRegisterUser(JSON.stringify(credentials));
        store.setAuthUser(user);
        return router.push("/login");
      } catch (error: any) {
        if (error instanceof Error) {
        //   handleApiError(error);
        } else {
          toast.error(error.message);
          console.log("Error message:", error.message);
        }
      } finally {
        store.setRequestLoading(false);
      }
    }
  
    const onSubmitHandler: SubmitHandler<UserDetailsInput> = (values) => {
      RegisterUserFunction(values);
    };
  
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
        >
          <FormInput value={data.first_name} onChange={(e) => updateData({ first_name: e.target.value })} label="First Name" type="text" name="first_name" />
          <FormInput value={data.last_name} onChange={(e) => updateData({ last_name: e.target.value })} label="Last Name" name="last_name" type="text" />
          <FormInput value={data.password} onChange={(e) => updateData({ password: e.target.value })} label="Password" name="password" type="password" />
          <FormInput value={data.confirmPassword} onChange={(e) => updateData({ confirmPassword: e.target.value })} label="Confirm Password" name="confirmPassword" type="password" />
          <span className="block">
            Already have an account?{" "}
            <Link href="/login" className="text-ct-blue-600">
              Login Here
            </Link>
          </span>
          <button
            // loading={store.requestLoading}
            // textColor="text-ct-blue-600"
          >
            Register
          </button>
        </form>
      </FormProvider>
    );
  }
  