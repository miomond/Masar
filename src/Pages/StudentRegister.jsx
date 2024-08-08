import Styles from "../Styles/Register.module.css";

import Style from "../Styles/Reg-log.module.css";



var op = {
  name: "string",
  email: "string",
  password: "string",
  passwordConfirm: "string",
  profilePicture: "string",
  age: 0,
  country: "string",
  gender: "male",
  phoneNumber: "string",
  address: {
    street: "string",
    city: "string",
    state: "string",
    zip: "string",
  },
};

import Facebook from "../assets/facebook.svg";
import FcGoogle from "../assets/google-color-svgrepo-com.svg";
import { Link } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBFile,
} from "mdb-react-ui-kit";
import { Autocomplete, TextField } from "@mui/material";
import FaceLogo from "../components/FaceLogo";

import { useForm } from "react-hook-form";
import { useState } from "react";

function StudentRegister() {

  const [gender, setgender]= useState(null);

  const { register, handleSubmit, formState: { errors },} = useForm();
  const onSubmit = (data) => {
    let m;
    if (data.gender==1) {
      m = 'Male'
    }else if (data.gender==0){
       m = 'female'
    }


    let former = {
      name: data.name,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      profilePicture: 'profile not defined',
      age: 0,
      country: data.country,
      gender: m,
      phoneNumber: data.phoneNumber,
      address: { street: "string", city: "string", state: "string", zip: "string"  }
    }
    data.push(address)
    console.log(address);
    console.log(data);
    
  
  }
  console.log(errors);

  return (
    <>
      {/* Form section */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div  className={` d-flex flex-column justify-content-around  p-2   ${Style.form}  `}>
          <h2 className={` text-center  pt-5`}>SIGN UP</h2>
          <div className="my-3  d-flex flex-column  flex-sm-row justify-content-center align-items-center px-0 px-md-0  px-xl-2 px-xxl-5    ">
            <button className=" border border-1 rounded-4 w-100 w-sm-75 w-md-50  mt-md-0 me-md-1 me-lg-3 p-0 d-flex ms-0    ms-lg-1 ms-xl-5  justify-content-around  align-items-center">  
                   <img src={Facebook} alt="perfec" className={`me-xl-1 ${Style.SignLogo}`}/><p className={`${Style.haa}`}>Sign In With FacebooK</p>
            </button>
            <button className=" border border-1 rounded-4 w-100 w-sm-75 w-md-50 mt-2 mt-sm-0  ms-md-1 ms-lg-3 p-0  d-flex me-0  me-lg-1 me-xl-5 justify-content-around   align-items-center">
              <img src={FcGoogle} alt="porto" className={`me-xl-2 ${Style.SignLogo}`}/><p className={`  ${Style.haa}`}>Sign In With Google</p>
            </button>
          </div>
          <div className="  my-3 d-flex justify-content-center align-items-center"><hr className="w-100" /> <h6 className="mt-1 px-4">Or</h6>{" "}<hr className="w-100" />{" "}</div>
          <MDBCol>
            <MDBRow className="mx-lg-3">
              <div className="mb-4  w-50"><MDBInput  type="text"  label="Full Name"  {...register("name", { required: true, maxLength: 80 })}/></div>
              <div className="mb-4  w-50">
                <MDBInput  type="email"  label="Email address"  {...register("email", { required: true, maxLength: 80 })}/></div>
            </MDBRow>
            <MDBRow className=" mx-lg-3">
              <div className="mb-4  w-50"> <MDBInput   type="password"   label="Password"   {...register("password", { required: true, maxLength: 80 })} />       </div>
              <div className="mb-4  w-50"><MDBInput type="password" label="Confirm Password" {...register("passwordConfirm",{ required:true, maxLength: 80})}/></div>
            </MDBRow>
            <MDBRow className="mx-lg-3   ">
              <div className="mb-4  w-50"> <Autocomplete disablePortal id="combo-box-demo" options={top100Films} sx={{ width: 330 }} 
                renderInput={(params) => ( <TextField   {...params}   label="Country"   {...register("country", {required: true,maxLength: 80})} />)} /></div>
              <div className="mb-4    w-50 "> <button className={`w-100    ${Style["container-btn-file"]}`}> 
                  <FaceLogo /> Upload your Profile photo   <input className={`${Style['input[type="file"]']}`} name="text" type="file"/> </button>{" "}</div>
              <div className="mb-4   w-25  "> <MDBInput   className="h-auto"   type="number" label="Age" {...register("age", { required: true, maxLength: 80 })} /></div>
              <div className={`${Style.btnContainer} mb-4 w-25`}> 
                <label className={` ${Style.btnColorModeSwitch}`}>   <input defaultValue={1} id="color_mode" name="color_mode" type="checkbox" {...register("gender", { required: true, maxLength: 80, })} /> 
                <label className={`${Style.btnColorModeSwitchInner}`} data-off="Male" data-on="Female" htmlFor="color_mode"/> </label> 
              </div>
              <div className="mb-4  w-50  "> <MDBInput className="h-auto" type="number" label="Phone" {...register("phoneNumber", { required: true, maxLength: 80, })} /></div>
            </MDBRow>
            <MDBRow className="mx-lg-3">
              <p className="w-50">Address</p>
            </MDBRow>
            <MDBRow className="mx-lg-3">
              <div className="mb-4  w-50 "> <MDBInput  label="Street" type="text" 
              // {...register("street", { required: true, maxLength: 80 })}
               /></div>
              <div className="mb-4  w-50 "> <MDBInput  type="text"   label="city" 
                // {...register("city", { required: true, maxLength: 80 })} 
                /></div>
            </MDBRow>
            <MDBRow className="mx-lg-3"><div className="mb-4  w-50 "> <MDBInput  label="state" type="text" 
            // {...register("state", { required: true, maxLength: 80 })} 
            /></div>
              <div className="mb-4  w-50 "> <MDBInput type="text" label="zip"
              //  {...register("zip", { required: true, maxLength: 80 })} 
               /></div>
            </MDBRow> 
              </MDBCol>   
              
              <button type="submit" className={`rounded-5 py-2 mx-5  ${Style.bgTotex} ${Style.PRtoBG} ${Style.buhover}`}> Sign Up</button>
     

          <div className="mb-3   d-flex d-lg-none flex-column justify-content-center">
            <small className={`text-center w-100 ${Style.bgTotex} mt-5`}>
              by clicking “sign in,” you agree to our terms of use and our
              privacy policy
            </small>
            <p className={` text-center mt-4 ${Style.bgTotex}`}>
              if you are a teacher please sign up from{" "}
              <Link to="/TeacherRegister">here</Link>{" "}
            </p>
            <p className={` text-center mt-4 ${Style.bgTotex}`}>
              if you have an account please{" "}
              <Link to="/TeacherLogin">log in</Link>{" "}
            </p>
          </div>
        </div>

        {/* Slider section */}
        <div className={`${Style.slid}    d-none d-lg-block`}>
          <div
            className={`${Style.banner} ${Styles.bannar} d-flex  flex-column justify-content-start mt-4 pt-5 w-50`}
          >
            <div
              className={` mt-5   d-flex    flex-column justify-content-between align-items-center ${Style.content}    w-100  h-50 `}
            >
              <h2 className={`mt-5 mb-4  ${Style.h2} ${Style.tex} `}>
                Welcome Back !
              </h2>
              <h3 className={` my-3 ${Style.h3}     ${Style.tex}`}>
                Sign UP to You Account
              </h3>
              <p className={` w-75 px-5 mx-5    ${Style.tex}    text-center`}>
                build skills for today , tomorrow , and beyond, education to
                futer proof your career..
              </p>
              <div className="mb-3 d-flex flex-column justify-content-center">
                <small className={`text-center w-100 ${Style.tex} mt-5`}>
                  by clicking “sign in,” you agree to our terms of use and our
                  privacy policy
                </small>
                <p className={` text-center mt-4 ${Style.tex}`}>
                  if you are a teacher please sign up from{" "}
                  <Link to="/TeacherRegister">here</Link>{" "}
                </p>
                <p className={` text-center mt-4 ${Style.tex}`}>
                  if you have an account please{" "}
                  <Link to="/TeacherLogin">log in</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

const top100Films = [
  { label: "Afghanistan", id: 0 },
  { label: "Albania", id: 1 },
  { label: "Algeria", id: 2 },
  { label: "Andorra", id: 3 },
  { label: "Angola", id: 4 },
  { label: "Anguilla", id: 5 },
  { label: "Antigua &amp; Barbuda", id: 6 },
  { label: "Argentina", id: 7 },
  { label: "Armenia", id: 8 },
  { label: "Aruba", id: 9 },
  { label: "Australia", id: 10 },
  { label: "Austria", id: 11 },
  { label: "Azerbaijan", id: 12 },
  { label: "Bahamas", id: 13 },
  { label: "Bahrain", id: 14 },
  { label: "Bangladesh", id: 15 },
  { label: "Barbados", id: 16 },
  { label: "Belarus", id: 17 },
  { label: "Belgium", id: 18 },
  { label: "Belize", id: 19 },
  { label: "Benin", id: 20 },
  { label: "Bermuda", id: 21 },
  { label: "Bhutan", id: 22 },
  { label: "Bolivia", id: 23 },
  { label: "Bosnia &amp; Herzegovina", id: 24 },
  { label: "Botswana", id: 25 },
  { label: "Brazil", id: 26 },
  { label: "British Virgin Islands", id: 27 },
  { label: "Brunei", id: 28 },
  { label: "Bulgaria", id: 29 },
  { label: "Burkina Faso", id: 30 },
  { label: "Burundi", id: 31 },
  { label: "Cambodia", id: 32 },
  { label: "Cameroon", id: 33 },
  { label: "Canada", id: 34 },
  { label: "Cape Verde", id: 35 },
  { label: "Cayman Islands", id: 36 },
  { label: "Central Arfrican Republic", id: 37 },
  { label: "Chad", id: 38 },
  { label: "Chile", id: 39 },
  { label: "China", id: 40 },
  { label: "Colombia", id: 41 },
  { label: "Congo", id: 42 },
  { label: "Cook Islands", id: 43 },
  { label: "Costa Rica", id: 44 },
  { label: "Cote D Ivoire", id: 45 },
  { label: "Croatia", id: 46 },
  { label: "Cuba", id: 47 },
  { label: "Curacao", id: 48 },
  { label: "Cyprus", id: 49 },
  { label: "Czech Republic", id: 50 },
  { label: "Denmark", id: 51 },
  { label: "Djibouti", id: 52 },
  { label: "Dominica", id: 53 },
  { label: "Dominican Republic", id: 54 },
  { label: "Ecuador", id: 55 },
  { label: "Egypt", id: 56 },
  { label: "El Salvador", id: 57 },
  { label: "Equatorial Guinea", id: 58 },
  { label: "Eritrea", id: 59 },
  { label: "Estonia", id: 60 },
  { label: "Ethiopia", id: 61 },
  { label: "Falkland Islands", id: 62 },
  { label: "Faroe Islands", id: 63 },
  { label: "Fiji", id: 64 },
  { label: "Finland", id: 65 },
  { label: "France", id: 66 },
  { label: "French Polynesia", id: 67 },
  { label: "French West Indies", id: 68 },
  { label: "Gabon", id: 69 },
  { label: "Gambia", id: 70 },
  { label: "Georgia", id: 71 },
  { label: "Germany", id: 72 },
  { label: "Ghana", id: 73 },
  { label: "Gibraltar", id: 74 },
  { label: "Greece", id: 75 },
  { label: "Greenland", id: 76 },
  { label: "Grenada", id: 77 },
  { label: "Guam", id: 78 },
  { label: "Guatemala", id: 79 },
  { label: "Guernsey", id: 80 },
  { label: "Guinea", id: 81 },
  { label: "Guinea Bissau", id: 82 },
  { label: "Guyana", id: 83 },
  { label: "Haiti", id: 84 },
  { label: "Honduras", id: 85 },
  { label: "Hong Kong", id: 86 },
  { label: "Hungary", id: 87 },
  { label: "Iceland", id: 88 },
  { label: "India", id: 89 },
  { label: "Indonesia", id: 90 },
  { label: "Iran", id: 91 },
  { label: "Iraq", id: 92 },
  { label: "Ireland", id: 93 },
  { label: "Isle of Man", id: 94 },
  { label: "Israel", id: 95 },
  { label: "Italy", id: 96 },
  { label: "Jamaica", id: 97 },
  { label: "Japan", id: 98 },
  { label: "Jersey", id: 99 },
  { label: "Jordan", id: 100 },
  { label: "Kazakhstan", id: 101 },
  { label: "Kenya", id: 102 },
  { label: "Kiribati", id: 103 },
  { label: "Kosovo", id: 104 },
  { label: "Kuwait", id: 105 },
  { label: "Kyrgyzstan", id: 106 },
  { label: "Laos", id: 107 },
  { label: "Latvia", id: 108 },
  { label: "Lebanon", id: 109 },
  { label: "Lesotho", id: 110 },
  { label: "Liberia", id: 111 },
  { label: "Libya", id: 112 },
  { label: "Liechtenstein", id: 113 },
  { label: "Lithuania", id: 114 },
  { label: "Luxembourg", id: 115 },
  { label: "Macau", id: 116 },
  { label: "Macedonia", id: 117 },
  { label: "Madagascar", id: 118 },
  { label: "Malawi", id: 119 },
  { label: "Malaysia", id: 120 },
  { label: "Maldives", id: 121 },
  { label: "Mali", id: 122 },
  { label: "Malta", id: 123 },
  { label: "Marshall Islands", id: 124 },
  { label: "Mauritania", id: 125 },
  { label: "Mauritius", id: 126 },
  { label: "Mexico", id: 127 },
  { label: "Micronesia", id: 128 },
  { label: "Moldova", id: 129 },
  { label: "Monaco", id: 130 },
  { label: "Mongolia", id: 131 },
  { label: "Montenegro", id: 132 },
  { label: "Montserrat", id: 133 },
  { label: "Morocco", id: 134 },
  { label: "Mozambique", id: 135 },
  { label: "Myanmar", id: 136 },
  { label: "Namibia", id: 137 },
  { label: "Nauro", id: 138 },
  { label: "Nepal", id: 139 },
  { label: "Netherlands", id: 140 },
  { label: "Netherlands Antilles", id: 141 },
  { label: "New Caledonia", id: 142 },
  { label: "New Zealand", id: 143 },
  { label: "Nicaragua", id: 144 },
  { label: "Niger", id: 145 },
  { label: "Nigeria", id: 146 },
  { label: "North Korea", id: 147 },
  { label: "Norway", id: 148 },
  { label: "Oman", id: 149 },
  { label: "Pakistan", id: 150 },
  { label: "Palau", id: 151 },
  { label: "Palestine", id: 152 },
  { label: "Panama", id: 153 },
  { label: "Papua New Guinea", id: 154 },
  { label: "Paraguay", id: 155 },
  { label: "Peru", id: 156 },
  { label: "Philippines", id: 157 },
  { label: "Poland", id: 158 },
  { label: "Portugal", id: 159 },
  { label: "Puerto Rico", id: 160 },
  { label: "Qatar", id: 161 },
  { label: "Reunion", id: 162 },
  { label: "Romania", id: 163 },
  { label: "Russia", id: 164 },
  { label: "Rwanda", id: 165 },
  { label: "Saint Pierre &amp; Miquelon", id: 166 },
  { label: "Samoa", id: 167 },
  { label: "San Marino", id: 168 },
  { label: "Sao Tome and Principe", id: 169 },
  { label: "Saudi Arabia", id: 170 },
  { label: "Senegal", id: 171 },
  { label: "Serbia", id: 172 },
  { label: "Seychelles", id: 173 },
  { label: "Sierra Leone", id: 174 },
  { label: "Singapore", id: 175 },
  { label: "Slovakia", id: 176 },
  { label: "Slovenia", id: 177 },
  { label: "Solomon Islands", id: 178 },
  { label: "Somalia", id: 179 },
  { label: "South Africa", id: 180 },
  { label: "South Korea", id: 181 },
  { label: "South Sudan", id: 182 },
  { label: "Spain", id: 183 },
  { label: "Sri Lanka", id: 184 },
  { label: "St Kitts &amp; Nevis", id: 185 },
  { label: "St Lucia", id: 186 },
  { label: "St Vincent", id: 187 },
  { label: "Sudan", id: 188 },
  { label: "Suriname", id: 189 },
  { label: "Swaziland", id: 190 },
  { label: "Sweden", id: 191 },
  { label: "Switzerland", id: 192 },
  { label: "Syria", id: 193 },
  { label: "Taiwan", id: 194 },
  { label: "Tajikistan", id: 195 },
  { label: "Tanzania", id: 196 },
  { label: "Thailand", id: 197 },
  { label: "Timor L'Este", id: 198 },
  { label: "Togo", id: 199 },
  { label: "Tonga", id: 200 },
  { label: "Trinidad &amp; Tobago", id: 201 },
  { label: "Tunisia", id: 202 },
  { label: "Turkey", id: 203 },
  { label: "Turkmenistan", id: 204 },
  { label: "Turks &amp; Caicos", id: 205 },
  { label: "Tuvalu", id: 206 },
  { label: "Uganda", id: 207 },
  { label: "Ukraine", id: 208 },
  { label: "United Arab Emirates", id: 209 },
  { label: "United Kingdom", id: 210 },
  { label: "United States of America", id: 211 },
  { label: "Uruguay", id: 212 },
  { label: "Uzbekistan", id: 213 },
  { label: "Vanuatu", id: 214 },
  { label: "Vatican City", id: 215 },
  { label: "Venezuela", id: 216 },
  { label: "Vietnam", id: 217 },
  { label: "Virgin Islands (US)", id: 218 },
  { label: "Yemen", id: 219 },
  { label: "Zambia", id: 220 },
  { label: "Zimbabwe", id: 221 },
];

export default StudentRegister;
