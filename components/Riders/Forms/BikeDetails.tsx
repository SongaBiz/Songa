import {useState} from 'react'
import FormInput from '../../Elements/Forms/FormInput'
import FormWrapper from '../../Elements/Forms/FormWrapper'
import { FormProvider, useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from 'react-spinners';
import { createBikeDetails, createRiderAccount } from '@/utils';
import { toast } from 'react-toastify';


type RiderDetails = {
  bike_type: string;
  plate_no: string;
  insurance_provider?: string;
  insurance_policy_no?: string;
}

type BikeDetailsPassedProps = {
  stepNumber: number;
  stepsCount: number;
}

type RiderDetailsProps = BikeDetailsPassedProps & {
  updateFields: (fields: Partial<RiderDetails>) => void;
  next: () => void;
  back: () => void;
}

const INITIAL_DATA: RiderDetails = {
  bike_type: "",
  plate_no: "",
  insurance_provider: "",
  insurance_policy_no: "",
}

const bikeDetailsSchema = object({
  bike_type: string()
    .min(2, "Bike type is required"),
  plate_no: string()
    .min(1, "Plate Number is required")
    .min(5, "A valid Plate Number is required")
  // insurance_provider: string()
  //   .min(2, "Insurance Provider is required"),
  // insurance_policy_no: string()
  //   .min(1, "Insurance policy number is required")
})

export type BikeDetailsInput = TypeOf<typeof bikeDetailsSchema>;

export default function BikeDetails({ stepsCount, stepNumber, next, back, updateFields }: RiderDetailsProps) {

  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);

  function updateData(fields: Partial<RiderDetails>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
    updateFields(fields)
  }

  async function onSubmitHandler(data: RiderDetails) {
    try {
      setIsLoading(true);
      await createBikeDetails({
        bikeType: data.bike_type,
        insurancePolicyNumber: data.insurance_policy_no||"",
        insuranceProvider: data.insurance_provider||"",
        plateNumber: data.plate_no
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

  let methods = useForm<BikeDetailsInput>({
    resolver: zodResolver(bikeDetailsSchema),
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
        <FormWrapper title=''>
          <FormInput
            label='Type of Bike'
            value={data.bike_type}
            onChange={e => updateData({ bike_type: e.target.value })}
            type='text'
            name='bike_type'
            required
          />
          <FormInput
            label='Plate Number'
            value={data.plate_no}
            onChange={e => updateData({ plate_no: e.target.value })}
            type='text'
            name='plate_no'
            required
          />
          <FormInput
            label='Insuarance Provider'
            value={data.insurance_provider||""}
            onChange={e => updateData({ insurance_provider: e.target.value })}
            name='insuarance_provider'
            type='text'
            required={false}
          />
          <FormInput
            label='Insuarance Policy Number'
            value={data.insurance_policy_no||""}
            onChange={e => updateData({ insurance_policy_no: e.target.value })}
            name='insuarance_policy_no'
            type='text'
            required={false}
          />
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
  )
}
