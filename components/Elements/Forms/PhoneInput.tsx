"use client";
import { Controller, useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

type FormInputProps = {
    label?: string
    defaultValue: string
    type?: string
    name: string
    required?: boolean
    value?: string
    handlePhoneChange: (e: string) => void
}

export default function CustomPhoneInput({ defaultValue, handlePhoneChange, name, required, value }: FormInputProps) {
    const {
      register,
      control,
      formState: { errors },
    } = useFormContext();
    return (
        <div className="flex flex-col gap-1">
        {/* <label htmlFor="phone">Phone</label> */}
        <Controller 
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
               <PhoneInput
                 country={'ke'}
                 value={field.value}
                 onChange={event=>{
                   handlePhoneChange(event);
                   field.onChange(event);
                 }}
                 inputClass='h-12'
                 inputStyle={{
                   width: '100%',
                   borderWidth: 0,
                   backgroundColor: '#222222',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
                 containerStyle={{
                   backgroundColor: '#222222',
                 }}
                 dropdownStyle={{
                   backgroundColor: '#222222',
                 }}
                 containerClass='border-2 bg-primary w-full h-12 rounded-lg flex items-center'
                 />
              )} 
            />
            {errors[name] && (
                <span className='text-red-500 text-xs pt-1 block'>
                {errors[name]?.message as string}
                </span>
            )}
        </div>
    )
}
