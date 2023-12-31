export default function CourseCard(){
    return (
        <div className={" bg-[#FEF6FB] w-full rounded-lg  flex flex-col p-6"}>
            <CourseIcon/>
            <span className={"text-[14px] font-[500] mt-3"}>Course</span>
            <span className={"text-[30px] font-[700] mt-3 text-end"}>234</span>
        </div>
    )
}
function CourseIcon(){
    return(
        <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 0H24.5C26.433 0 28 1.46904 28 3.28125V35L14 27.3438L0 35V3.28125C0 1.46904 1.56698 0 3.5 0ZM2.33333 31.1915L14 24.8113L25.6667 31.1915V3.28125C25.6667 2.67818 25.1433 2.1875 24.5 2.1875H3.5C2.85673 2.1875 2.33333 2.67818 2.33333 3.28125V31.1915Z" fill="#EE95C5"/>
        </svg>

    )

}
