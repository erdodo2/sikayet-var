"use client"
import {useParams,useRouter} from "next/navigation";
import {updateData, getData} from "@/service";
import React, {useEffect, useState} from "react";
import {User} from "@/components/students/UserListInterface";
import Inputs from "@/components/Inputs";
import toast from "@/components/Toast";

export default function (){
    const routeParams = useParams() ?? {id:0};
    const router = useRouter();
    const [editParams,setEditParams] = React.useState<User>({
        id:         0,
        firstName:  "",
        lastName:   "",
        maidenName: "",
        age:        0,
        gender:     "",
        email:      "",
        phone:      "",
        username:   "",
        password:   "",
        birthDate:  new Date().toDateString() as unknown as Date,
        image:      "",
        bloodGroup: "",
        height:     0,
        weight:     0,
        eyeColor:   "",
        hair:       {
            color: "",
            type:  "",
        },
        domain:     "",
        ip:         "",
        address:    {
            address:     "",
            city:        "",
            coordinates: {
                lat: 0,
                lng: 0,
            },
            postalCode:  "",
            state:       "",
        },
        macAddress: "",
        university: "",
        bank:       {
            cardExpire: "",
            cardNumber: "",
            cardType:   "",
            currency:   "",
            iban:       "",
        },
        company:    {
            address: {
                address:     "",
                city:        "",
                coordinates: {
                    lat: 0,
                    lng: 0,
                },
                postalCode:  "",
                state:       "",
            },
            department: "",
            name:       "",
            title:      "",
        },
        ein:        "",
        ssn:        "",
        userAgent:  "",
    })
    const [laoding,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData('users',routeParams.id ).then((res) => {
            setEditParams(res);
            setLoading(false);
        })
    }, [routeParams.id])
    const saveData = ()=>{
        setLoading(true);
        updateData("users",editParams).then(()=>{
            toast.success("Student added successfully")
            setLoading(false);
            router.push("/students")
        }).catch(()=>{
            toast.error("Something went wrong")
        })
    }

    return (
        <div className={"flex flex-col p-8 bg-[#f8f8f8]"}>
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

            <Inputs params={editParams} setParams={setEditParams} />
            }




            <div className={"flex flex-row justify-between mt-4"}>
                <button onClick={()=>router.push('/students')} className={"px-6 py-2 bg-[#F8D442] rounded-lg"}>Cancel</button>
                <button onClick={saveData} className={"px-6 py-2 bg-green-400 rounded-lg"}>Save</button>
            </div>
        </div>
    )
}
