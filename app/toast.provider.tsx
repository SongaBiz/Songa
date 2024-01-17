"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
    children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}