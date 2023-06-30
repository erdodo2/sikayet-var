"use client"
import List from "@/components/students/List";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import Dialog from "@/components/Dialog";

export default function Students() {
    const router = useRouter();
    const linkParams = useSearchParams() ?? {get:()=>{}};
    const searchText = (linkParams.get('searchKey')?linkParams.get('searchKey')+':':"") +(linkParams.get('searchValue')??"")
    const [searchDialogVisible, setSearchDialogVisible] = useState<boolean>(false);
    const openSearchDialog = () => {
        setSearchDialogVisible(true)
    }
    return (

                <div className={"bg-[#f8f8f8] min-h-[100%] p-8"}>
                    <div className={"flex flex-row flex-wrap justify-between items-center border-b border-gray-200 py-2"}>
                        <h1 className={"text-[22px] font-[700]"}>Students List</h1>
                        <div className={"flex flex-row flex-wrap items-center"}>
                            <div className={"relative mr-4"}>
                                <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 text-[12px] font-thin w-[212px]"} type="text" placeholder={"Search"} value={searchText} onClick={openSearchDialog} onFocus={openSearchDialog} />
                                <SearchIcon className={"absolute top-[calc(50%-4px)] right-3"} />

                            </div>
                            <button onClick={()=>router.push('/students/add')} className={"bg-[#FEAF00] hover:bg-[#F8D442] text-white rounded-md px-6 py-2 mt-1 text-[14px] font-normal"}>ADD NEW STUDENT</button>
                        </div>
                    </div>
                    <List/>
                    <SearchDialog visible={searchDialogVisible} onClose={()=>setSearchDialogVisible(false)} />
                </div>
    )
}

function SearchDialog(props: { visible: boolean, onClose: () => void }) {
    const linkParams = useSearchParams() ?? {get:()=>{}}
    const [filterKey, setFilterKey] = useState<string>("firstName");
    const [searchValue, setSearchValue] = useState<string>("");
    useEffect(() => {
        setFilterKey(linkParams.get('searchKey') as string ?? "firstName")
        setSearchValue(linkParams.get('searchValue')as string)
    }, [])
    const search = () => {
        if(filterKey==="" || searchValue==="" || filterKey === null || searchValue === null)window.location.href=(`/students?limit=6&page=0`)
        else window.location.href=`/students?searchKey=${filterKey}&searchValue=${searchValue}`
    }
    const changeSearchValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            search()
        } else {
            setSearchValue(e.currentTarget.value)
        }
    }
    return(
        <Dialog show={props.visible} setShow={props.onClose} title={"Search Student"}>
            <div className={"flex flex-col justify-between items-center  py-2"}>
                <select className={"border border-gray-200 rounded-md px-4 py-2 mt-1 text-[12px] font-thin w-[212px]"} value={linkParams.get('searchKey') as string} onChange={(e)=>setFilterKey(e.target.value)}>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="domain">WebSite</option>
                    <option value="company.name">Company Name</option>
                </select>
                <div className={"flex flex-row items-center"}>
                    <div className={"relative"}>
                        <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 text-[12px] font-thin w-[212px]"} type="text" placeholder={"Search"} defaultValue={linkParams.get('searchValue') as string} onKeyUp={(e) => changeSearchValue(e)} />
                        <SearchIcon className={"absolute top-[calc(50%-4px)] right-3"} />

                    </div>
                </div>
                <button onClick={search} className={"bg-[#FEAF00] text-center hover:bg-[#F8D442] text-white rounded-md px-6 py-2 mt-1 text-[14px] font-normal  w-[212px]"}>SEARCH</button>
            </div>
        </Dialog>
    )
}

function SearchIcon(props: { className?: string }) {
    return(
        <div className={props.className}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9043 13.1687L10.377 9.64141C10.3141 9.57852 10.232 9.5457 10.1445 9.5457H9.86289C10.8008 8.53125 11.375 7.17773 11.375 5.6875C11.375 2.5457 8.8293 0 5.6875 0C2.5457 0 0 2.5457 0 5.6875C0 8.8293 2.5457 11.375 5.6875 11.375C7.17773 11.375 8.53125 10.8008 9.5457 9.86562V10.1445C9.5457 10.232 9.58125 10.3141 9.64141 10.377L13.1687 13.9043C13.2973 14.0328 13.5051 14.0328 13.6336 13.9043L13.9043 13.6336C14.0328 13.5051 14.0328 13.2973 13.9043 13.1687ZM5.6875 10.5C3.02695 10.5 0.875 8.34805 0.875 5.6875C0.875 3.02695 3.02695 0.875 5.6875 0.875C8.34805 0.875 10.5 3.02695 10.5 5.6875C10.5 8.34805 8.34805 10.5 5.6875 10.5Z" fill="#C4C4C4"/>
            </svg>
        </div>

    )
}
