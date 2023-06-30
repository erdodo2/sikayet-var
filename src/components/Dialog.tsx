import React from "react";


export default function Dialog(props:{show:boolean ,setShow:any,children:any,title:string}) {
    React.useEffect(()=>{
        document.addEventListener("click",function (e:any){
            if(e.target !== null ){
                if(e.target.classList !== null && e.target.classList.contains("dialog-area")) props.setShow(false)
            }
        })
    },[])
    return(
        <div className={"relative"}>
            {props.show && (
                <div className={"fixed top-0 left-0 w-screen h-screen bg-gray-800/20 flex items-center justify-center dialog-area"}>
                    <div className={"bg-white rounded-lg p-4 w-[450px] max-w-[98vw] dialog-body"}>
                        <div className={"flex justify-between items-center border-b border-gray-200 mb-4 pb-1"}>
                            <span className={"font-bold text-lg"}>{props.title}</span>
                            <span className={"text-red-400 hover:text-red-600 cursor-pointer"} onClick={()=>props.setShow(false)}>X</span>
                        </div>
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    )
}
