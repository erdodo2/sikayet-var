"use client"
import '../app/globals.scss'
export default function Error() {
    return (
        <div className={"bg-gradient-to-r from-[#FEAF00] to-[#F8D442] h-screen w-screen"}>
        <div className={`flex flex-col h-full w-full items-center justify-center`}>
            <div className={"bg-white rounded-lg p-10 flex flex-col items-center"}>
                <span className={"text-9xl font-thin mb-5"}>404</span>
                <h1 className={"text-[32px]  border-l-8 pl-3 border-[#F8D442] font-[700]"}>Page Not Found</h1>
                <a href={"/"} className={"text-[18px] mt-8 font-bold"}>Back to Home</a>

            </div>
        </div>
        </div>
    )
}
