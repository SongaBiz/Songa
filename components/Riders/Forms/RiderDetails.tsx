import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import 'react-phone-number-input/style.css';
import FormInput from '../../Elements/Forms/FormInput';
import OTPInput from '../../Elements/Forms/OTP/OTPInput';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { FormProvider, useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from 'react-spinners';
import CustomPhoneInput from '@/components/Elements/Forms/PhoneInput';
import { createRiderAccount } from '@/utils';
import { toast } from 'react-toastify';

type RiderDetails = {
  first_name: string;
  last_name: string;
  password: string;
  phone_no: string;
  confirmPassword: string;
  // onPhoneChange: (phone: string) => void;
}

type RiderDetailsPassedProps = {
  stepNumber: number;
  stepsCount: number;
}

type RiderDetailsProps = RiderDetailsPassedProps & {
  updateFields: (fields: Partial<RiderDetails>) => void;
  next: () => void;
  back: () => void;
}

const riderDetailsSchema = object({
  first_name: string()
  .min(1, "First name is required"),
  last_name: string()
    .min(1, "Last name is required"),
  phone_no: string()
    .min(1, "Phone number is required")
    .min(9, "Phone number must be more than or equal to 9 digits")
    .regex(
      /^\d+$/,
      { message: "Invalid phone number." }
    ),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: string()
    .min(1, "Confirm Password is required")
    .min(8, "Confirm Password must be more than 8 characters")
    .max(32, "Confirm Password must be less than 32 characters")
});

export type RiderDetailsInput = TypeOf<typeof riderDetailsSchema>;

const INITIAL_DATA: RiderDetails = {
  first_name: "",
  last_name: "",
  password: "",
  phone_no: "",
  confirmPassword: ""
}

export default function RiderDetails({ stepsCount, stepNumber, updateFields, next, back }: RiderDetailsProps) {

  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState(data.phone_no);

  function updateData(fields: Partial<RiderDetails>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
    updateFields(fields)
  }

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedValue = '';
    if (numericValue.startsWith('0757')) {
      formattedValue = `+254 ${numericValue.slice(1, 4)} ${numericValue.slice(4)}`;
    } else {
      formattedValue = `+${numericValue}`;
    }
    const phoneNumber = parsePhoneNumberFromString(formattedValue);
    if (phoneNumber) {
      setPhone(phoneNumber.formatInternational());
      updateFields({ phone_no: phoneNumber.formatInternational() })
    } else {
      setPhone('');
      updateFields({ phone_no: '' })
    }
  };

  async function onSubmitHandler(data: RiderDetails) {
    try {
      setIsLoading(true);
      await createRiderAccount({
        first_name: data.first_name,
        last_name: data.last_name,
        phone: `+${data.phone_no}`,
        password: data.password
      });
      next();
    } catch (error: any) {
      if(error&&error.error){
        toast.error(error.error);
        if(error.error==="You already have an account."){
          next();
        }
      } else {
        toast.error('An unknown error occurred!');
      }
    } finally {
      setIsLoading(false);
    }
  }

  let methods = useForm<RiderDetailsInput>({
    resolver: zodResolver(riderDetailsSchema),
  });
  
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  const showBackButton = stepNumber && stepNumber !== 1;
  const isLastStep = stepNumber === stepsCount

  return (
    <FormProvider {...methods}>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmitHandler)} action="" className="p-5">
        <FormWrapper title="">
          <FormInput value={data.first_name} onChange={(e) => updateData({ first_name: e.target.value })} label="First Name" type="text" name="first_name" />
          <FormInput value={data.last_name} onChange={(e) => updateData({ last_name: e.target.value })} label="Last Name" name="last_name" type="text" />
          <FormInput value={data.password} onChange={(e) => updateData({ password: e.target.value })} label="Password" name="password" type="password" />
          <FormInput value={data.confirmPassword} onChange={(e) => updateData({ confirmPassword: e.target.value })} label="Confirm Password" name="confirmPassword" type="password" />
          <CustomPhoneInput name="phone_no" defaultValue={phone} handlePhoneChange={handlePhoneChange}/>
          <div className="flex flex-col gap-1">
            {/* <div className='flex justify-between items-center'>
              {showOTP && (
                <>
                  <OTPInput
                    code={otpCode}
                    setCode={setOtpCode}
                    maximumLength={maximumCodeLength}
                    setIsPinReady={setIsPinReady}
                  />
                </>
              )}
              <div>
                <button
                  type="button"
                  className="rounded-lg border-[#FB4552] w-28 h-12 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
                  onClick={handleVerifyClick}
                >
                  Verify
                </button>
              </div>
            </div> */}
          </div>
        </FormWrapper>
       <div className="mt-[1rem] flex gap-[.5rem] justify-end">
       {showBackButton && (
         <button
         type="button"
         onClick={back}
         className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
         >
           Back
         </button>
       )}
       {isLoading ? (
         <div className="flex items-center justify-center">
           <ClipLoader color="#FB4552" loading={isLoading} size={35} />
         </div>
       ) : (
         <button
           type="submit"
           disabled={isLoading}
           className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
         >
           {isLastStep ? 'Finish' : 'Next'}
         </button>
       )}
     </div>
    </form>
  </FormProvider>
  );
}
