



import Styles from '../Styles/Register.module.css'

import Style from '../Styles/Reg-log.module.css'

import Facebook from '../assets/facebook.svg'
import FcGoogle from '../assets/google-color-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBFile, 
  MDBInputGroup
} from 'mdb-react-ui-kit';



function TeacherRegister() {
  return (
    <>

    {/* Form section */}
    <form>
    <div  className={` d-flex flex-column justify-content-around  p-2  ${Style.form}  `}>
    <h2 className={` text-center  pt-5`}>SIGN UP as a Teacher </h2>
      <div className="my-3  d-flex justify-content-around">
       <button className='btn border border-1 w-50 me-1 me-xl-2 d-flex py-2 justify-content-around'><img src={Facebook} alt="perfec" className={`me-xl-3 ${Style.SignLogo}`}  /><p className={`pt-lg-3 ${Style.haa}`}>Sign In With FacebooK</p></button>
       <button className='btn border border-1 w-50 ms-1 ms-xl-2 d-flex py-2 justify-content-around'><img src={FcGoogle} alt="porto"  className={`me-xl-3 ${Style.SignLogo}`}  /><p className={`pt-lg-3 ${Style.haa}`}>Sign In With Google</p></button>
      </div>
      <div className="  my-3 d-flex justify-content-center align-items-center">
        <hr className='w-100' />     <h6 className='mt-1 px-4'>Or</h6>     <hr className='w-100' />   </div>
    
    
        
          <MDBCol>
    
          <MDBRow className='mx-lg-3'>
            <div className='mb-4  w-50'>
          <MDBInput  type='text'  label='Name' />
            </div>
            <div className='mb-4  w-50'>
          <MDBInput  type='email'  label='Email address' />
            </div>
          </MDBRow>
          <MDBRow className=' mx-lg-3'>
          <div className='mb-4  w-50'>
          <MDBInput type='password'  label='Password' />
          </div>
    
          <div className='mb-4  w-50'>
          <MDBInput type='password'  label='Confirm Password' />
          </div>
          </MDBRow>
          <MDBRow>
    
          <div className='mb-4 mx-4 me-5 w-100 pe-5  '>
          <MDBFile label='Your Image' id='Image' />
        </div>
        <div className='mb-4 mx-4 me-5 w-100 pe-5  '>

        <MDBInputGroup textBefore='Bio '>
        <textarea className='form-control' />
      </MDBInputGroup>
        </div>
    
          </MDBRow>
            </MDBCol>
    
    
    
      {/* <div className="mb-3"> 
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> <input type="email" className="form-control  py-3" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
         <label htmlFor="Password" className="form-label"> Password </label> <input   type="password"   className="form-control  py-3"   id="Password"   placeholder="password" />
      </div>
      <div className="mb-3"> 
          <label htmlFor="confirmPassword" className="form-label"> confirm Password </label> <input   type="password"   className="form-control  py-3"   id="confirm Password"   placeholder="repeat password" />
      </div> */}
    
      <div className="mb-3 d-flex flex-column justify-content-center">
    
    <small className={`text-center w-100 ${Style.bgTotex} mt-5`}>by clicking “sign in,” you agree to our terms of use and our privacy policy</small>
    <p className={` text-center mt-4 ${Style.bgTotex}`}>if you are a Student please sign up from   <Link to='/StudentRegister'>here</Link> </p>
    <p className={` text-center mt-4 ${Style.bgTotex}`}>if you have an account please  <Link to='/StudentLogin'>log in</Link> </p>
    
      </div>
    
    
    </div>
    
    {/* Slider section */}
    <div className={`${Style.slid}    d-none d-lg-block`}  >
    
    <div  className={`${Style.banner} ${Styles.bannar} d-flex  flex-column justify-content-start mt-4 pt-5 w-50`}>
    
    <div  className={` mt-5   d-flex    flex-column justify-content-between align-items-center ${Style.content}    w-100  h-50 `}>
        <h2 className={`mt-5 mb-4  ${Style.h2} ${Style.tex} `}>Welcome Back !</h2>
        <h3 className={` my-3 ${Style.h3}     ${Style.tex}`}>Sign UP to You Account</h3>
        <p  className={` w-75 px-5 mx-5    ${Style.tex}    text-center`}>build skills for today , tomorrow , and beyond, education to futer proof your career..</p>
        <button  type="button"   className={`  rounded-5  px-5 py-1 mt-5  ${Style.bgTotex} ${Style.PRtoBG} ${Style.buhover}`} > sign IN</button>

    </div>
    
    
    </div>
    
    </div>
    </form>
    </>
  )
}

export default TeacherRegister