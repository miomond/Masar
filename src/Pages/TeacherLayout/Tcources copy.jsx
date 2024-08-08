import Style from '../../Styles/TeacherProfile.module.css'
import Image from '../../assets/Quran.png'
import { Link } from 'react-router-dom'
import TCourseCard from '../../common/TCourseCard'




function Tcources() {
  return (
  <>
    <div className={`${Style.conter} row   `} >
    
    <TCourseCard/>

    </div>  
  
  
  </>

  )
}

export default Tcources