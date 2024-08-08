import React from 'react'
import Style from '../../Styles/TeacherProfile.module.css'
import TeacherProfile from '../../assets/TeacherProfile.jpg'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [ { subject: 'Math', A: 120, B: 110, fullMark: 150},
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150, }, 
  { subject: 'English', A: 86, B: 130, fullMark: 150, }, 
  { subject: 'Geography', A: 99, B: 100, fullMark: 150, },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150, },
  { subject: 'History', A: 65, B: 85, fullMark: 150, },
];

function TProfile() {

  return (
    <>
    <div className={`${Style.conter} row   `} >
    <div className={`${Style.Imageconter} py-3 col`}>
    <img src={TeacherProfile} className={`${Style.ImageProfile}`} alt="..." />
    </div>
    <div className={`${Style.info} w-50 col`}>
    <p>name : Mohammed Yaser Mohammmed </p>
    <p>Email : MohammedYaser@gmail.com</p>
    <p>Address : Abomosa Elansary  </p>
    <p>speciality : Arabic </p>
    </div>

    <div className={`${Style.info} w-50 col`}>
    <p>name : Mohammed Yaser Mohammmed </p>
    <p>Email : MohammedYaser@gmail.com</p>
    <p>Address : Abomosa Elansary  </p>
    <p>speciality : Arabic </p>
    </div>


    </div>


    <div className={`${Style.conter} row  mt-5  w-100`} >


    <div className={`${Style.info} col`}>

    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

</div>
<div className={`${Style.info} col` }>

    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

      </div>

    </div>



    
    </>
  )
}

export default TProfile;