import React, { useEffect, useState } from 'react';
import FormInput from "@/components/Elements/Forms/FormInput";
import FormWrapper from "@/components/Elements/Forms/FormWrapper";
import { FormProvider, useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from 'react-spinners';
import { createRiderProfile } from '@/utils';
import { toast } from 'react-toastify';


const riderProfileSchema = object({
  location: string()
    .min(1, "Location is required"),
  stage: string()
    .min(1, "Stage is required"),
  address: string()
    .min(1, "Address is required"),
  gender: string()
    .min(1, "Gender is required")
    .max(1, "Gender can either be M or F")
})

export type RiderProfileInput = TypeOf<typeof riderProfileSchema>;

type RiderProfile = {
  location: string;
  stage: string;
  address: string;
  gender: string;
}

type RiderProfilePassedProps = {
  stepNumber: number;
  stepsCount: number;
}

type RiderProfileProps = RiderProfilePassedProps & {
  updateFields: (fields: Partial<RiderProfile>) => void;
  next: () => void;
  back: () => void;
}

const INITIAL_DATA: RiderProfile = {
  location: "",
  stage: "",
  address: "",
  gender: "",
}

export default function RiderProfile({ stepsCount, stepNumber, updateFields, next, back }: RiderProfileProps) {
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);


  function updateData(fields: Partial<RiderProfile>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
    updateFields(fields)
  }

  async function onSubmitHandler(values: RiderProfile) {
    try {
      setIsLoading(true);
      await createRiderProfile({
        address: values.address,
        gender: values.gender,
        location: values.location,
        stage: values.stage
      });
      next();
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

  let methods = useForm<RiderProfileInput>({
    resolver: zodResolver(riderProfileSchema),
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormInput value={data.location} type={"text"} label={"Location"}
                    required={false} name="location"
                    onChange={(e) => updateData({ location: e.target.value })} />
          <FormInput value={data.stage} type={"text"} label={"Stage"}
            required={false} name="stage"
            onChange={(e) => updateData({ stage: e.target.value })} />

          <FormInput value={data.address} type={"text"} label={"Address"}
            name={"address"} required={false}
            onChange={(e) => updateData({ address: e.target.value })} />

          <FormInput 
            label={"Gender"} 
            type={"text"} 
            name={"gender"} 
            placeholder="M or F"
            required={false} 
            value={data.gender}  
            onChange={(e) => updateData({ gender: e.target.value.toUpperCase() })}  
          />

        </div>
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
  )
}
