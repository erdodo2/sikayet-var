import React from "react";
import {DownIcon,UpIcon} from "@/components/students/Icons";

export default function Inputs(props:{params:any,setParams:any}) {
    const [visible,setVisible] = React.useState<any>({});
    React.useEffect(()=>{
        Object.keys(props.params).map((key)=>{
            if(typeof props.params[key] === "object"){
                let _visible = visible;
                _visible[key] = false;
                setVisible(_visible)
                Object.keys(props.params[key]).map((key2)=>{
                    let _visible = visible;
                    _visible[key+key2] = false;
                    setVisible(_visible)
                })
            }
        })
        console.log(visible)
    },[props.params])
    const splitCamelCase = (text:string) => {
        const result = text.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
    const changeInput = (e:any)=>{
        props.setParams({...props.params,[e.target.name]:e.target.value})

    }
    return(
        <>
            {!!props.params && Object.keys(props.params).map((key)=>(
                <>
                    {key === "id" ? (""):
                        (<div key={key} className={"bg-white mb-2 p-2 pb-0 px-4 rounded-lg"}>
                            {typeof props.params[key] === "string" && (
                                <>
                                    <span>{splitCamelCase(key)}: </span>
                                    <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="text" placeholder={splitCamelCase(key)} name={key} onKeyPress={changeInput} value={props.params[key]} />
                                </>
                            )}
                            {typeof props.params[key] === "number" && (
                                <>
                                    <span>{splitCamelCase(key)}: </span>
                                    <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="number" placeholder={splitCamelCase(key)} name={key} onKeyPress={changeInput} value={props.params[key]} />
                                </>
                            )}
                            {typeof props.params[key] === "object" && (
                                <div  className={"border p-2 mb-2 cursor-pointer bg-gray-100 rounded-lg"}>
                                    <div className={"flex flex-row justify-between items-center"} onClick={()=>setVisible({...visible,[key]:!visible[key]})}>
                                        <span>{splitCamelCase(key)}: </span>
                                        <span>{typeof props.params[key] === "object" && (visible[key]? (<UpIcon/>):(<DownIcon/>))}</span>
                                    </div>
                                    {visible[key] && (<div className={"p-3  rounded-lg"}>
                                        {Object.keys(props.params[key]).map((key2)=>(
                                            <div key={key2}>

                                                {typeof props.params[key][key2] === "string" && (
                                                    <>
                                                        <span>{splitCamelCase(key2)}:</span>
                                                        <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="text" placeholder={splitCamelCase(key2)} name={key2} onKeyPress={changeInput}  value={props.params[key][key2]} />
                                                    </>
                                                )}
                                                {typeof props.params[key][key2] === "number" && (
                                                    <>
                                                        <span>{splitCamelCase(key2)}:</span>
                                                        <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="number" placeholder={splitCamelCase(key2)} name={key2} onKeyPress={changeInput}  value={props.params[key][key2]} />
                                                    </>

                                                )}
                                                {typeof props.params[key][key2] === "object" && (
                                                    <div  className={"border-b p-2 mb-2 border rounded-lg bg-gray-200"}>
                                                        <span>{splitCamelCase(key2)}:</span>
                                                        <div className={"p-3 "}>

                                                            {Object.keys(props.params[key][key2]).map((key3)=>(
                                                                <div key={key3}>

                                                                    {typeof props.params[key][key2][key3] === "string" && (
                                                                        <>
                                                                            <span>{splitCamelCase(key3)}:</span>
                                                                            <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="text" placeholder={splitCamelCase(key3)} name={key3} onKeyPress={changeInput}   value={props.params[key][key2][key3]} />
                                                                        </>
                                                                    )}
                                                                    {typeof props.params[key][key2][key3] === "number" && (
                                                                        <>
                                                                            <span>{splitCamelCase(key3)}:</span>
                                                                            <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="number" placeholder={splitCamelCase(key3)} name={key3} onKeyPress={changeInput}  value={props.params[key][key2][key3]}/>
                                                                        </>
                                                                    )}
                                                                    {typeof props.params[key][key2][key3] === "object" && (
                                                                        <div  className={"border-b p-2 mb-2 border rounded-lg bg-gray-300"}>
                                                                            <span>{splitCamelCase(key3)}:</span>
                                                                            <div className={"p-3 "}>
                                                                                {Object.keys(props.params[key][key2][key3]).map((key4)=>(
                                                                                    <div key={key4}>
                                                                                        <span>{splitCamelCase(key4)}</span>
                                                                                        {typeof props.params[key][key2][key3][key4] === "string" && (
                                                                                            <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="text" placeholder={splitCamelCase(key4)} name={key4} onKeyPress={changeInput}  value={props.params[key][key2][key3][key4]}/>
                                                                                        )}
                                                                                        {typeof props.params[key][key2][key3][key4] === "number" && (
                                                                                            <input className={"border border-gray-200 rounded-md px-4 py-2 mt-1 mb-3 text-[12px]  w-full"} type="number" placeholder={splitCamelCase(key4)} name={key4} onKeyPress={changeInput}  value={props.params[key][key2][key3][key4]}/>
                                                                                        )}
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}


                                    </div>)}
                                </div>
                            )}
                        </div>)
                    }
                </>
            ))}
    </>
    )

}
