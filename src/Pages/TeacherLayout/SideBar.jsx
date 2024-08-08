import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../../Styles/TeacherProfile.module.css'
function SideBar() {
  return (
<>
<div className={`d-flex flex-column mt-3  ${Style.Sider}`} >
    <div className='w-100 d-flex flex-column'>

    <Link className={`${Style.mute} `} to='profile'>Profile</Link>
    <Link className={`${Style.mute} `} to='Sittings'>Sittings</Link>
    </div>
    <div className='w-100 d-flex flex-column mt-5'>
    <Link className={`${Style.mute} `} to='cources'>Cources</Link>
    <Link className={`${Style.mute} `} to='cources'>dashboard</Link>
    <Link className={`${Style.mute} `} to='skeduale'>skeduale</Link>
    <Link className={`${Style.mute} `} to='Analytics'>Analytics</Link>


</div>

</div>
</>

  )
}

export default SideBar