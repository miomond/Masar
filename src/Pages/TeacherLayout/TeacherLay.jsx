import { Outlet } from "react-router-dom"
import Style from "../../Styles/TeacherProfile.module.css"
import SideBar from "./SideBar"


function TeacherLay() {
  return (
    <>
    <div class={`row w-100 h-100  ${Style.cont}   `}>
        <div class=" col-1 col-md-2    "> <SideBar/> </div>
        <div class="col-10 p-lg-4 "> 
         <Outlet/>
             </div>
      </div>
    
    
    
    
    </>
  )
}

export default TeacherLay