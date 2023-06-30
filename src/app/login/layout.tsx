
import { Inter } from 'next/font/google'
import React from "react";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Login',
    description: 'Login page',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`${inter.className} `}>
                <div className={"bg-gradient-to-r from-[#FEAF00] to-[#F8D442] h-screen w-screen px-5"}>
                    {children}
                </div>
            </body>
        </html>
    )
}
