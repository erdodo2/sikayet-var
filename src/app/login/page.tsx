

export default function Login() {
    return (
        <div className={`flex flex-col h-full w-full items-center justify-center`}>
            <div className={"bg-white rounded-lg p-10 flex flex-col items-center"}>

                <h1 className={"text-[32px]  border-l-8 pl-3 border-[#F8D442] font-[700]"}>MANAGE COURSES</h1>
                <h2 className={"text-[22px] mt-8 font-bold"}>SIGN IN</h2>
                <p className={"font-thin text-sm"}>Enter your credentials to access your account</p>
                <form className={"flex flex-col items-start w-full mt-10"}>
                    <label className={"text-[14px] text-[#6C6C6C]"}>Email</label>
                    <input className={"border border-gray-200 rounded-md w-full px-6 py-3 mt-1 text-[12px] font-thin w-[415px]"} type="text" placeholder={"Enter your email"} />
                    <label className={"text-[14px] text-[#6C6C6C] mt-4"}>Password</label>
                    <input className={"border border-gray-200 rounded-md w-full px-6 py-3 mt-1 text-[12px] font-thin"} type="password" placeholder={"Enter your password"} />
                    <a href={"/"} className={"bg-[#FEAF00] text-white text-center rounded-md w-full px-6 py-3 mt-4 text-[14px] font-normal"}>SIGN IN</a>
                    </form>
                <label className={"text-[14px] text-[#6C6C6C] mt-4"}>
                    Forgot your password?
                    <a className={"text-[#FEAF00] underline ml-2 "} href="#">Reset Password</a>
                </label>
            </div>
        </div>
    )
}
