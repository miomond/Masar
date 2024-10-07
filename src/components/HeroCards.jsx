import React from 'react'
import { faCaretDown, faMagnifyingGlass, faUser,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoMdTime } from "react-icons/io";
import CourseCard from '../common/CourseCard'
import "../Styles/CorseD.css"; // Assuming you have a CSS file for CourseDetails-specific styles
import { courses } from "../components/CourseDetails/db.js";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function HeroCards() {
  return (
//     <div className="row row-cols-1 row-cols-md-3 g-4">
//   <div className="col">
//     <div className="card h-100">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
//         className="card-img-top"
//         alt="Skyscrapers"
//       />
//       <div className="card-body">
//         <h6 className={`text-primary`}>subject</h6>
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This content is a little bit longer.
//         </p>
//       </div>
//       <div className="card-footer">
//         <small className=""><FontAwesomeIcon className={`px-3 py-0`} icon={faUser}/> 58 </small>
//         <small className={` px-3 py-0`} > <IoMdTime /> 30:15        </small>
//         <p className={`color-success d-inline-block  float-end py`}>$55.00</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card h-100">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
//         className="card-img-top"
//         alt="Los Angeles Skyscrapers"
//       />
//       <div className="card-body">
//       <h6 className={`text-primary`}>subject</h6>
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">
//           This card has supporting text below as a natural lead-in to additional
//           content.
//         </p>
//       </div>
//       <div className="card-footer">
//         <small className=""><FontAwesomeIcon className={`px-3 py-0`} icon={faUser}/> 58 </small>
//         <small className={` px-3 py-0`} > <IoMdTime /> 30:15        </small>
//         <p className={`color-success d-inline-block  float-end py-0`}>$55.00</p>
//       </div>
//     </div>
//   </div>
//   <div className="col">
//     <div className="card h-100">
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
//         className="card-img-top"
//         alt="Palm Springs Road"
//       />
//       <div className="card-body">
//       <h6 className={`text-primary`}>subject</h6>
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text ">
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This card has even longer content than the
//           first to show that equal height action.
//         </p>
//       </div>
//       <div className="card-footer">
//         <small className=""><FontAwesomeIcon className={`px-3 py-0`} icon={faUser}/> 58 </small>
//         <small className={` px-3 py-0`} > <IoMdTime /> 30:15        </small>
//         <p className={`color-success d-inline-block  float-end py-0`}>$55.00</p>
//       </div>
//     </div>
//   </div>
// </div>


<div className="row justify-content-center align-items-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            390: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            824: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {courses.map((item, index) => (
            <SwiperSlide key={index}>
              <CourseCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


  )
}

export default HeroCards