"use client";
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
    label: string
    type: string
    name: string
    required?: boolean
    value: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ label, type, name, required, value, placeholder, onChange }: FormInputProps) {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor={label}>{label}</label>
                <input placeholder={placeholder} value={value} type={type} {...register(name)} required={required} onChange={onChange} className='bg-transparent border-[#FB4552] border-[1px] h-12 rounded-lg px-4' />
            </div>
            {errors[name] && (
                <span className='text-red-500 text-xs pt-1 block'>
                {errors[name]?.message as string}
                </span>
            )}
        </div>
    )
}
