import { Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Subscribtion from './Pages/Subscribtion'
import { NavB } from './common/NavB'
import StudentLogin from './Pages/StudentLogin'
import StudentRegister from './Pages/StudentRegister'
import TeacherLogin from './Pages/TeacherLogin'
import TeacherRegister from './Pages/TeacherRegister'
import CourseDetails from './Pages/StudentLauout/CourseDetails'
import LessonDetails from './Pages/StudentLauout/LessonDetails'
import TProfile from './Pages/TeacherLayout/TProfile'
import TeacherLay from './Pages/TeacherLayout/TeacherLay'
import Tcources from './Pages/TeacherLayout/Tcources'
import TSittings from './Pages/TeacherLayout/TSittings'
import { AuthProvider, useAuth } from './context/auth'
import { RequireAuth } from './context/RequireAuth'

function App() {
  let auth = useAuth();

  return (
   <>
   <AuthProvider>

   <NavB></NavB>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="Subscribtion" element={<Subscribtion/>} />
      {/* registering and loging  */}
    <Route path="StudentLogin" element={<StudentLogin/>} />
    <Route path="StudentRegister" element={<StudentRegister/>} />
    <Route path="TeacherLogin" element={<TeacherLogin/>} />
    <Route path="TeacherRegister" element={<TeacherRegister/>} />
{/* student layout */}
    <Route path="CourseDetails" element={<CourseDetails />} />
    <Route path="LessonVideo" element={<LessonDetails />} />
{/* Teacher */}
   <Route path='/Teacherprofile' element={<RequireAuth><TeacherLay/></RequireAuth>}>
   <Route path='profile' element={<TProfile />}/>
   <Route path='cources' element={<Tcources />}/>
   <Route path='Sittings' element={<TSittings />}/>
</Route>

    </Routes>
   
   </AuthProvider>
   
   </>
  )
}

export default App
