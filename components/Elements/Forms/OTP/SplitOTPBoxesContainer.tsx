import React, { ReactNode, useState } from 'react'

export default function SplitOTPBoxesContainer({ children }: { children: ReactNode }) {
    return (
        <div className='w-[80%] flex justify-evenly'>{children}</div>
    )
}
