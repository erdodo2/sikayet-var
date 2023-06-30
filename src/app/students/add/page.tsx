"use client"
import React from "react";
import {User} from "@/components/students/UserListInterface";
import Inputs from "@/components/Inputs";
import {addData} from "@/service";
import toast from "@/components/Toast";
import {useRouter} from "next/navigation";
export default function Add() {
    const router = useRouter();
    const [params,setParams] = React.useState<User>({
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
    const saveData = ()=>{
        addData("users",params).then(()=>{
            toast.success("Student added successfully")
            router.push("/students")
        }).catch(()=>{
            toast.error("Something went wrong")
        })
    }


    return(
            <div className={"flex flex-col p-8 bg-[#f8f8f8]"}>

                <Inputs params={params} setParams={setParams} />




                <div className={"flex flex-row justify-between mt-4"}>
                    <button onClick={()=>router.push('/students')} className={"px-6 py-2 bg-[#F8D442] rounded-lg"}>Cancel</button>
                    <button onClick={saveData} className={"px-6 py-2 bg-green-400 rounded-lg"}>Save</button>
                </div>
            </div>
    )
}
