"use client"
import {getList,deleteData,getFiltered} from "@/service";
import {useEffect, useState} from "react";
import {useSearchParams,useRouter} from "next/navigation";
import {EditIcon,DeleteIcon,LeftIcon,RightIcon} from "@/components/students/Icons";
import {UserList} from './UserListInterface';
import toast from "@/components/Toast";

export default function List() {
    const linkParams = useSearchParams() ?? {get:()=>{}};
    const router = useRouter();
    const [list, setList] = useState<UserList>();
    const [params, setParams] = useState({
        page: linkParams.get("page") ? parseInt(linkParams.get("page") as string) : 0,
        limit: linkParams.get("limit") ? parseInt(linkParams.get("limit") as string) : 6,
        searchKey: linkParams.get("searchKey") ?? null,
        searchValue: linkParams.get("searchValue") ?? null
    })
    const [recordCount, setRecordCount] = useState<number>(0);
    const [laoding, setLoading] = useState<boolean>(true);
    useEffect(() => {

    }, [])
    useEffect( () => {
        getUsers(params);
    }, [params])
    const getUsers = async (prm:any) => {
        setLoading(true);
        setList(undefined)
        console.log(prm)
        if(prm.searchKey && prm.searchValue){
            await getFiltered('users',prm.searchKey,prm.searchValue).then((res) => {
                setList(res.users);
                setRecordCount(res.total);
                setLoading(false);
            })
        }else{
            await getList('users',prm.limit,prm.page).then((res) => {
                setList(res.users);
                setRecordCount(res.total);
                setLoading(false);
            })
        }

    }
    const setLimit = (limit: any) => {
        setParams({...params,limit:limit})
        router.push('/students?page='+params.page+'&limit='+limit)
        //getUsers({...params,limit:limit});
    }
    const beforePage = () => {
        if(params.page > 0){
            setParams({...params,page:params.page-1})
            router.push('/students?page='+(params.page-1)+'&limit='+params.limit)
            //getUsers({...params,page:params.page-1});
        }
    }
    const nextPage = () => {
        if(params.page < Math.ceil(recordCount/params.limit)){
            setParams({...params,page:params.page+1})
            router.push('/students?page='+(params.page+1)+'&limit='+params.limit)
            //getUsers({...params,page:params.page+1});

        }
    }
    const deleteStudent = (id:any) => {
        setLoading(true);
        deleteData('users',id).then(() => {
            toast.success("Student deleted successfully");
            getUsers(params);

        })
    }
    return(
        <div className={"flex flex-col  w-full overflow-auto"}>
            {laoding ? (
                <div className={"w-full h-full min-h-[70vh] flex items-center justify-center"}>
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                  <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span
                  >
                    </div>
                </div>
            ):
                (<table className={"w-full"}>
                <thead>
                    <tr className={""}>
                        <th className={"text-[#ACACAC] text-[12px] font-[600] text-start p-4"}></th>
                        <th className={"text-[#ACACAC] text-[12px] font-[600] text-start p-4"}>Name</th>
                        <th className={"text-[#ACACAC] text-[12px] font-[600] text-start p-4"}>Email</th>
                        <th className={"text-[#ACACAC] text-[12px] font-[600] text-start p-4"}>Phone</th>
                        <th className={"text-[#ACACAC] text-[12px] font-[600] text-start p-4"}>WebSite</th>
                        <th className={"text-[#ACACAC] text-[12px] font-[600] text-start p-4"}>Company Name</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody >
                    {!!list && Object.values(list).map((item, index) => (
                        <>
                            <tr className={" leading-4"} key={item.id+index}>
                                <td className={"text-[#6C6C6C] text-[14px] font-normal p-4 bg-white rounded-tl-lg rounded-bl-lg"}>
                                    <img src={item.image} className={"h-[55px] w-[55px] rounded-md"} loading={"lazy"} alt={item.firstName}/>
                                </td>
                                <td className={"text-[#6C6C6C] text-[14px] font-[400] p-4 bg-white"}>{item.firstName} {item.lastName}</td>
                                <td className={"text-[#6C6C6C] text-[14px] font-normal p-4 bg-white"}>{item.email}</td>
                                <td className={"text-[#6C6C6C] text-[14px] font-normal p-4 bg-white"}>{item.phone}</td>
                                <td className={"text-[#6C6C6C] text-[14px] font-normal p-4 bg-white"}>{item.domain}</td>
                                <td className={"text-[#6C6C6C] text-[14px] font-normal p-4 bg-white"}>{item.company.name}</td>
                                <td className={"bg-white px-3 rounded-r-lg"}>
                                    <div className={"flex flex-row "}>
                                        <a href={`/students/edit/${item.id}`} className={"hover:bg-[#F8D442] p-3 rounded-lg cursor-pointer"} >
                                            <EditIcon />
                                        </a>
                                        <div className={"hover:bg-[#F8D442] p-3 rounded-lg cursor-pointer"} onClick={()=>{deleteStudent(item.id)}}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className={"h-4"}></tr>
                        </>
                    ))}
                    {list === undefined || Object.keys(list).length == 0 && <tr className={" leading-4"}>
                        <td colSpan={7} className={"text-[#6C6C6C] text-[14px] font-[400] p-4 bg-white text-center"}>No data found</td>
                    </tr>}

                </tbody>
                </table>)}
            <div className={"flex flex-row justify-end items-center"}>
                <span className={"text-[#9FA2B4] text-[14px] font-[400] font-[Mulish]"}>Rows per page:</span>
                <select className={"bg-transparent cursor-pointer rounded-md p-1 text-[14px] font-[400]"} value={params.limit} onChange={(e)=> setLimit(e.target.value )}>
                    <option>6</option>
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                </select>
                <span className={"text-[#9FA2B4] text-[14px] font-[400] mx-8 "}>{params.page * params.limit + 1} - {Number(params.page * params.limit )+ Number(params.limit)} of {recordCount} </span>
                <a onClick={beforePage} className={"mx-3 cursor-pointer"}><LeftIcon /></a>
                <a onClick={nextPage} className={"mx-3 cursor-pointer"}><RightIcon /></a>
            </div>
        </div>

    )
}



