import React, { ReactNode } from 'react'

type FormWrapperProps = {
    title: string;
    children: ReactNode
}

export default function FormWrapper({title, children}: FormWrapperProps) {
  return (
    <>
      {/* <h2 className='text-center font-bold text-xl m-0 mb-[2rem]'>{title}</h2> */}
    <div className='max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5'> {children}</div>
    </>
  )
}
