import React, { ReactNode } from 'react'

type FormWrapperProps = {
    title: string;
    children: ReactNode
}

export default function FormWrapper({title, children}: FormWrapperProps) {
  return (
    <>
      {/* <h2 className='text-center font-bold text-xl m-0 mb-[2rem]'>{title}</h2> */}
    <div className='grid gap-[1rem] justify-center lg:justify-start lg:grid-cols-2'> {children}</div>
    </>
  )
}
