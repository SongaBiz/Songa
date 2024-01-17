import React, { useEffect, useState } from 'react';
import FormWrapper from '../Elements/Forms/FormWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from 'react-toastify';
import Image from 'next/image';

type RiderDetails = {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone_no: string;
  ID_front: any;
  ID_back: any;
  license_front: any;
  license_back: any;
  bike_type: string;
  plate_no: string;
  insurance_provider: string;
  insurance_policy_no: string;
};

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
  next: () => void;
  back: () => void;
  stepNumber: number;
  stepsCount: number;
};

export default function Preview({ stepNumber, stepsCount, back, next, ...riderDetails}: RiderDetailsProps) {
  let methods = useForm<RiderDetails>({
    // resolver: zodResolver(riderProfileSchema),
  });

  const showBackButton = stepNumber && stepNumber !== 1;
  const isLastStep = stepNumber === stepsCount

  const [idFrontImageUrl, setIdFrontImageUrl] = useState<string>('');
  const [dlFrontImageUrl, setDlFrontImageUrl] = useState<string>('');


  useEffect(() => {
    if (riderDetails.ID_front) {
      const reader = new FileReader();
      reader.onload = () => {
        setIdFrontImageUrl(reader.result as string);
      };
      reader.readAsDataURL(riderDetails.ID_front);
    }

    if (riderDetails.license_front) {
      const reader = new FileReader();
      reader.onload = () => {
        setDlFrontImageUrl(reader.result as string);
      };
      reader.readAsDataURL(riderDetails.license_front);
    }
  }, [riderDetails.ID_front, riderDetails.license_front]);

  async function onSubmitHandler() {
    toast.success("Account created successfully.")
  }

  return (
    <FormProvider { ...methods}>
      <FormWrapper title="">
        <div className="h-96 bg-[#222222] text-white p-6">
          <div className="mb-8">
            <h1 className="mb-2 text-lg font-semibold">Personal Information</h1>
            <div>
              <p className="mb-2">First Name: {riderDetails.first_name}</p>
              <p className="mb-2">Last Name: {riderDetails.last_name}</p>
              <p className="mb-2">Phone Number: {riderDetails.phone_no}</p>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="mb-2 text-lg font-semibold">Bike Information</h1>
            <div>
              <p className="mb-2">Bike Type: {riderDetails.bike_type}</p>
              <p className="mb-2">Plate Number: {riderDetails.plate_no}</p>
            </div>
          </div>

          <div>
            <h1 className="mb-2 text-lg font-semibold">Insurance Information</h1>
            <div>
              <p className="mb-2">Insurance Provider: {riderDetails.insurance_provider}</p>
              <p className="mb-2">Insurance Policy Number: {riderDetails.insurance_policy_no}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#222222] text-white p-6 t-4">
          <h1 className="mb-2 text-lg font-semibold">Uploaded Photos</h1>
          <div>
            <p className="mb-2">ID Photo: </p>
            {riderDetails.ID_front&&
              <Image src={idFrontImageUrl} alt="ID Front" width={100} height={100} />
            }
            <br />
            <p className="mb-2">Driver&apos;s License Photo:</p>
            {riderDetails.license_front&&
            <Image src={dlFrontImageUrl} alt="DL Front" width={100} height={100} />
            }
          </div>
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
          {(
            <button
              onClick={onSubmitHandler}
              className="rounded-lg border-[#FB4552] px-4 py-2 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          )}
        </div>
     </FormProvider>
  );
}
