import StudentsCard from "@/components/dashboard/students-card";
import CourseCard from "@/components/dashboard/course-card";
import PaymentsCard from "@/components/dashboard/payments-card";
import UsersCard from "@/components/dashboard/users-card";
import Aside from "@/components/Aside";
import Header from "@/components/Header";

export default function Home() {
  return (
      <div className={"flex flex-row w-full"}>
          <div className={"aside"}>

              <Aside/>


          </div>
          <div className={"flex flex-col w-full "}>
              <Header/>
              <div className={"h-[calc(100vh-60px)] overflow-auto"}>
                <div className={"p-8"}>
                    <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full "}>
                        <div className={""}>
                            <StudentsCard />
                        </div>
                        <div className={""}>
                            <CourseCard />
                        </div>
                        <div className={""}>
                            <PaymentsCard />
                        </div>
                        <div className={""}>
                            <UsersCard />
                        </div>

                    </div>
                </div>
              </div>
          </div>
      </div>
  )
}
