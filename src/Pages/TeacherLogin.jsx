
import Styles from "../Styles/login.module.css";

import Style from '../Styles/Reg-log.module.css'



import Facebook from "../assets/facebook.svg";
import FcGoogle from "../assets/google-color-svgrepo-com.svg";
import { Link } from "react-router-dom";



function TeacherLogin() {
  return (
    <>




    <form>
      {/* slider */}
      <div className={`${Style.slid}    d-none d-lg-block  `}>
      <div className={`${Style.bannar} ${Styles.bannar} d-flex  flex-column justify-content-around mt-4 w-50 `} >
          <div className={` mt-lg-3   d-flex    flex-column justify-content-start align-items-center ${Style.content} w-100  h-75 `}>
            <h2 className={`mb-4  ${Style.h2} ${Style.tex}`}>Welcome Back !</h2>
            <div className={`mt-3  d-flex flex-column justify-content-around align-items-center ${Style.content}    w-100 mb-5 `}>
              <h3 className={`${Style.h3} p-5 ${Style.tex}`}>Sign In to You Teaching Account</h3>
              <h5 className={` w-75 px-5 ${Style.tex} text-center`}>build skills for today , tomorrow , and beyond, education tofuter proof your career.</h5>
            </div>
            {/* form submit button */}
             <button  type="button"   className={`  rounded-5  px-5 py-1 mt-5  ${Style.bgTotex} ${Style.PRtoBG} ${Style.buhover}`} > sign IN</button>
          </div>
        </div>
      </div>
{/* End Slider  */}
{/* Form Section */}
<div  className={` d-flex flex-column justify-content-around  p-2 p-xl-5 mr-5  ${Style.form} float-lg-end  `}>
        <h2 className=" text-center mb-5">SIGN IN as a Teacher </h2>
        <div className="mb-3  d-flex justify-content-around">
 <button className='btn border border-1 w-50 me-1 me-xl-2 d-flex py-2 justify-content-around'><img src={Facebook} alt="perfe " className={`me-xl-3 ${Style.SignLogo}`}  /><p className={`pt-lg-3 ${Style.haa}`}>Sign In With FacebooK</p></button>
 <button className='btn border border-1 w-50 ms-1 ms-xl-2 d-flex py-2 justify-content-around'><img src={FcGoogle} alt="porto"  className={`me-xl-3 ${Style.SignLogo}`}  /><p className={`pt-lg-3 ${Style.haa}`}>Sign In With Google</p></button>
</div>
        <div className="my-3 d-flex justify-content-center align-items-center">
          <hr className="w-100" />
          <h6 className="mt-1 px-4">Or</h6>
          <hr className="w-100" />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>{" "}
          <input
            type="email"
            className="form-control  py-3"
            id="Email"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3"> <label htmlFor="Password" className="form-label"> Password </label> <input   type="password"   className="form-control  py-3"   id="Password"   placeholder="password" />
        </div>
        <div className="mb-3 d-flex flex-column"> 
          <small className={`text-center w-100 ${Style.bgTotex} `}>   by clicking “sign in,” you agree to our terms of use and our   privacy policy </small>
          <p className={` text-center mt-4 ${Style.bgTotex}`}>forgot your password ?</p>
          <div className="  my-3 d-flex justify-content-center align-items-center">
            <hr className="w-100" />
            <h6 className="mt-1 px-4">Or</h6>
            <hr className="w-100" />{" "}
          </div>
<p className={` text-center mt-4 ${Style.bgTotex}`}>if you don't have an account please  <Link to='/TeacherRegister' className={Style.bgTotex}>sign Up</Link> </p>
<Link to='/TeacherProfile' className={Style.bgTotex}>Next</Link>

</div>
      </div>
    </form>
    {/* End Form section */}
  </>
  )
}

export default TeacherLogin