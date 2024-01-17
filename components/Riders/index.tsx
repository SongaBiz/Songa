"use client"
import { useMultistepForm } from '@/hooks/useMultistepForm';
/* eslint-disable react/jsx-key */
import React, { FormEvent, useState } from 'react';
import ProgressSteps from '../Elements/Loaders/ProgressSteps';
import BikeDetails from './Forms/BikeDetails';
import RiderDetails from './Forms/RiderDetails';
import Upload from './Forms/Upload';
import Preview from './Preview';
import { createRiderAccount, uploadDocuments } from '@/utils';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import RiderProfile from "@/components/Riders/Forms/RiderProfile";
import { FormProvider, useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


type FormData = {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone_no: string;
  location: string;
  stage: string;
  address: string;
  gender: string;
  ID_front: any;
  ID_back: any;
  license_front: any;
  license_back: any;
  bike_type: string;
  plate_no: string;
  insurance_provider: string;
  insurance_policy_no: string;
};

const INITIAL_DATA: FormData = {
  first_name: '',
  last_name: '',
  password: '',
  confirmPassword: '',
  phone_no: '',
  location: '',
  stage: '',
  address: '',
  gender: '',
  ID_front: '',
  ID_back: '',
  license_front: '',
  license_back: '',
  bike_type: '',
  plate_no: '',
  insurance_provider: '',
  insurance_policy_no: '',
};



export default function RegistrationForm() {
  const [data, setData] = useState(INITIAL_DATA);
  const { currentStepIndex, step, steps, isFirstStep, isLastStep, goTo, next, back } = useMultistepForm([
    { component: <RiderDetails stepsCount={5} stepNumber={1} next={goToNext} back={goBack} updateFields={updateFields} />, step: { number: 1, label: 'Rider Details' } },
    { component: <RiderProfile stepsCount={5} stepNumber={2} next={goToNext} back={goBack} updateFields={updateFields} />, step: { number: 2, label: 'Profile' } },
    { component: <Upload stepsCount={5} stepNumber={3} next={goToNext} back={goBack}  updateFields={updateFields} />, step: { number: 3, label: 'Upload' } },
    { component: <BikeDetails stepsCount={5} stepNumber={4} next={goToNext} back={goBack} updateFields={updateFields} />, step: { number: 4, label: 'Bike Details' } },
    { component: <Preview {...data} stepsCount={5} stepNumber={3} next={goToNext} back={goBack} updateFields={updateFields} />, step: { number: 5, label: 'Preview' } },
  ]);

  const showBackButton = !isFirstStep && currentStepIndex !== 0;
  
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  function goToNext(){
    next()
  }

  function goBack(){
    back()
  }

  const progressPercentage = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div id="rider_reg"  className="frosted-glass relative text-white py-5 px-3 border-transparent md:mx-20 w-[86vw] bg-primary md:w-auto md:my-10 rounded-lg shadow-md">
      {/* Custom Progress Bar */}
      <ProgressSteps steps={steps} currentStepIndex={currentStepIndex} />
      {step}
    </div>
  );
}