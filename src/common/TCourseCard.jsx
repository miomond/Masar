import Style from '../Styles/TeacherProfile.module.css'
import Image from '../assets/Quran.png'
import { Link, useNavigate } from 'react-router-dom'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { useState } from 'react';

function TCourseCard() {

const navigate = useNavigate()

function go (){
  navigate(`/Teacherprofile/cources/${num}`, { state: { id: 1 } })
}

  return (
    <>
        <div className="card m-5 d-flex  flex-column flex-md-row  justify-content-around fle w-100 " >
  <img src={Image} className={`card-img-top ${Style.courceImage}`} alt="..." />
  {/* <div className="card-body d-flex flex-column justify-content-between"> */}
    <div className={`p-3`}>

    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>

    <ul className={`mb-md-5 pb-lg-3`}>
      <li>number of lectures : 8 </li>
      <li>number of hours :8</li>
      <li>number of lectures done :2 </li>
      <li>number of lectures left :6 </li>
    </ul>

    <MDBProgress >
      <MDBProgressBar width={75} valuemin={0} valuemax={100} />
    </MDBProgress>    </div>
    <div className={`   `}>
      <div className={`h-75 d-none d-md-block`}></div>
    <Link className={`btn btn-primar`} onClick={go}>details</Link>
    </div>

  {/* </div> */}
</div> 
    
    
    </>
  )
}

export default TCourseCard