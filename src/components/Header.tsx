"use client"
import React, {useEffect, useState} from "react";
export default function Header() {
    const [visible, setVisible] = useState<boolean>(false);
    useEffect(() => {
        document.body.classList.contains("aside-hidden") ? setVisible(false) : setVisible(true);
    }, [])
    const setMenuVisible = () => {
        if (visible) {
            document.body.classList.add("aside-hidden");
            setVisible(false);
        } else {
            document.body.classList.remove("aside-hidden");
            setVisible(true);
        }
    }
    return (
        <div className={"w-full h-[60px] px-8 flex flex-row items-center justify-between border-b border-gray-200"}>
            <div className={"flex flex-row items-center cursor-pointer"} onClick={setMenuVisible}>

                {visible ?(
                    <>
                        <BackIcon />
                        <span className={"text-gray-300 ml-1"} >Visible</span>
                    </>
                    ):(
                    <>
                        <MenuIcon />
                        <span className={"text-gray-300 ml-1"} >Menu</span>
                    </>
                )}
            </div>
            <div className={"relative dropdown"}>
                <BellIcon />
                <div className={"dropdown-menu bg-white p-4 fixed border border-gray-200 shadow right-2 max-w-[400px]  rounded-lg top-10"}>
                        <ul className={"max-h-[500px] overflow-auto"}>
                            {Array.from(Array(10).keys()).map((item, index) => (
                                <li key={index} className={"flex flex-row items-center justify-between py-2"}>
                                    <div className={"flex flex-row items-center"}>
                                        <div className={"w-[4px] h-[40px] bg-gray-200 rounded-full mr-2"} />
                                        <div className={"flex flex-col"}>
                                            <span className={"text-sm font-semibold"}>Notification</span>
                                            <span className={"text-xs text-gray-300"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, animi.</span>
                                        </div>
                                    </div>
                                    <span className={"text-xs text-gray-300"}>10 min</span>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    )
}

function BackIcon(){
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625V5.625Z" fill="#C4C4C4"/>
        </svg>


    )
}
function BellIcon(){
    return(
        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5003 18.75C9.17044 18.75 9.71459 18.1883 9.71459 17.4988H10.9289C10.9289 18.8781 9.83905 20 8.5003 20C7.16155 20 6.07173 18.8781 6.07173 17.4988H7.28602C7.28602 18.1883 7.83017 18.75 8.5003 18.75ZM0.555078 13.0785C1.61606 12.0387 2.42736 10.9504 2.42736 7.26172C2.42736 4.15273 4.83278 1.61719 7.89316 1.31055V0.625C7.89316 0.279687 8.16486 0 8.5003 0C8.83575 0 9.10745 0.279687 9.10745 0.625V1.31094C12.1678 1.61758 14.5733 4.15273 14.5733 7.26172C14.5733 10.95 15.3849 12.0387 16.4459 13.0785C16.976 13.598 17.1434 14.3836 16.8728 15.0797C16.5966 15.7906 15.9317 16.25 15.1789 16.25H1.82173C1.06887 16.25 0.404051 15.7902 0.127801 15.0793C-0.142757 14.3832 0.0249662 13.598 0.555078 13.0785V13.0785ZM1.82173 15H15.1789C15.7189 15 15.9887 14.3566 15.6084 13.984C14.2856 12.6875 13.359 11.2363 13.359 7.26211C13.359 4.63008 11.1858 2.5 8.5003 2.5C5.81521 2.5 3.64164 4.62969 3.64164 7.26172C3.64164 11.2207 2.72296 12.6797 1.39218 13.9836C1.01044 14.3582 1.28403 15 1.82173 15Z" fill="#C4C4C4"/>
        </svg>

    )
}

function MenuIcon(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px" fillRule="nonzero"><g fill="#c4c4c4" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M3,5c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,11c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,17c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path></g></g></svg>
    )
}
