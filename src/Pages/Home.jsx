import React, { useRef, useState } from 'react'
import Footer from '../common/Footer'
import style from '../Styles/landing.module.css'
import Quran from '../assets/Quran.png'
import img1 from '../assets/Screenshot1.png'
import img2 from '../assets/Screenshot2.png'
import img3 from '../assets/Screenshot3.png'
import img4 from '../assets/Screenshot4.png'
import img5 from '../assets/Screenshot5.png'
import img9 from '../assets/screen4.jpg'
import img10 from '../assets/cuteChild.jpg'
import img11 from '../assets/GroupLearning.jpg'
import img12 from '../assets/BriliantWoman.jpg'
import img13 from '../assets/person1.avif'
import img14 from '../assets/person2.avif'
import img15 from '../assets/GraduatedStudent.jpg'
import vid from '../assets/vid.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Styles from '../Styles/NewNav.module.css'
import Recommended from '../components/Recommended/Recommended'
import { NavB } from '../common/NavB'
import { motion, useScroll } from "framer-motion";
import HeroMahdy from '../components/HeroMahdy'
import HeroCards from '../components/HeroCards'


function Home() {
     const scrollRef = useRef(null)
     const {scrollYProgress} = useScroll()


  return (
    <>
       <>
       <NavB></NavB>
       <div  className=" text-center  bg-image  position-relative w-100"style={{ height: 750}}>

<video  className={`w-100 h-100  `} autoPlay loop  muted>
  <source src={vid} type="video/mp4" />
</video>
  <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a
          data-mdb-ripple-init=""
          className="btn btn-primary "
          href="#!"
          role="button"
        >
          Call to action
        </a>
      </div>
    </div>
  </div>
</div>
        {/* <div className={style.hero}>
          <div className={style.hero_content}>
            <h1>Welcome to our Masar Learning <br>
            </br> Website!</h1>
            <p>Master the memorization and recitation of the Quran in both Arabic and English.</p>
            <button>Get Started</button>
          </div>
          <div className={style.hero_img}>
            <img src={Quran} alt="" />
          </div>
        </div> */}
<HeroMahdy></HeroMahdy>
<div className={`container `}>
<div className={`text-center m-5`}>
  <h3 className='m-5'>Recent Courses</h3>
  <p className={`m-5 p-5`}>Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. Donec consectetur accumsan arcu, sit amet fringilla ex ultricies.
</p>
</div>
<HeroCards></HeroCards>
</div>
{/* 
<div className='mt-5 container Her' ref={scrollRef} style={{  }}>

<motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ root: scrollRef }}>

<h1 className='mt-5 '>hi</h1>
<img src={Quran} width={"700px"} alt="" />

</motion.div>
</div>    */}




      <div className={style.sec2}>

        <div className={style.sec2_imgs}>
          <img src={img1} className={`rounded-5 `} alt="" />
          <img src={img2} className={`rounded-5 `} alt="" />
          <img src={img3} className={`rounded-5 `} alt="" />
          <img src={img4} className={`rounded-5 `} alt="" />
          <img src={img5} className={`rounded-5 `} alt="" />
          <img src={img9} className={`rounded-5 `} alt="" />
        </div>
        <div className={style.sec2_content}>
          <h2>Our religious lessons are relevant to the school <br></br> curriculum </h2>
          <p>Dive into our informative articles on Quranic studies and Arabic teachings.</p>
          <button>Start Learning</button>
        </div>
      </div>
      <div className={style.sec3}>
        <img src={img10} className={`rounded-4`} alt="" />
        <div className={style.sec3_content}>
          <h2>Learn religious lessons and everything related to the <br></br>Islamic religion </h2>
          <p>Read what our students have to say about their Quran learning experience.</p>
          <button>Learn more</button>
        </div>
      </div>
      <div className={style.sec4}>
        <h3>An extensive library of video lessons,<br></br> tests, religious exams and religious consultations</h3>
        <p>Explore our premium courses for Quran memorization and Arabic learning.</p>

      </div>
      {/* < Recommended /> */}
      <div className={style.sec5}>
        <div className={style.sec5_top}>
          <div className={style.sec5_top_left}>
            <h2>Over 7,352 interactive<br></br> Quizzes , Tests and Exams.</h2>
            <p>Read what our students have to say about their Quran learning <br></br>experience.</p>
            <button>Start Learning</button>
          </div>
          <div className={style.sec5_top_right}>
            <img src={img11} className={`rounded-4`} alt="" />
          </div>
        </div>
        <div className={style.sec5_bottom}>
          <div className={style.sec5_bottom_left}>
            <img src={img12} className={`rounded-4`} alt="" />
          </div>
          <div className={style.sec5_bottom_right}>
            <h2>Reports and analytics on <br />student’s performance</h2>
            <p>Read what our students have to say about their Quran learning <br></br>experience.</p>
            <button>Start Learning</button>
          </div>
        </div>
      </div>
      <div className={style.sec6}>
        <div className={style.sec6_right}>
          <div className={style.sec6_right_top}>
            <h2>Student Testimonials</h2>
            <p>Read what our students have to say about their Quran learning <br></br>experience.</p>
          </div>
          <div className={style.sec6_right_bottom}>
            <div className={style.reviews}>
              <div className={style.reviews_top}>
                <div className={style.reviews_top_name}>
                  <img src={img13}  alt="" width={50} />
                  <p> Ahmed</p>
                </div>
                <div className={style.reviews_top_rate}>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                </div>
              </div>
              <div className={style.reviews_bottom}>
                  <p>I never thought memorizing ...</p>
              </div>
            </div>
            <div className={style.reviews}>
              <div className={style.reviews_top}>
                <div className={style.reviews_top_name}>
                  <img src={img13} alt="" width={50} />
                  <p> Ahmed</p>
                </div>
                <div className={style.reviews_top_rate}>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                  <FontAwesomeIcon icon={faStar} className={style.reviews_top_rate_icon}/>
                </div>
              </div>
              <div className={style.reviews_bottom}>
                  <p>I never thought memorizing ...</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.sec6_left}>
          <img src={img15}className={`rounded-4`} alt="" />
        </div>
      </div>
      <div className={style.sec7}>
        <div className={style.sec7_vid}>
        <video width="900" height="300"  controls>
         <source src={vid} type="video/mp4"/>
              </video>
        </div>
        <div className={style.sec7_content}>
        <h2>Our courses are certificated by the most <br></br>qualified specialist in there feild
        </h2>
        <p>Dive into our informative articles on Quranic studies and Arabic teachings.</p>
        <button>Let's Go</button>
        </div>
      </div>
      {/* <div className={style.sec_contact}>
         <div className={style.sec_contact_head}>
                <h2>Contact Us</h2>
                <p>Reach out to us for inquiries and registration </p>
         </div>
         <div className={style.sec_contact_form}>
               <form>
               <label htmlFor="">Name</label>  <br></br>     
               <input placeholder='Your Name' type="text"  className={style.sec_contact_form_input}/>    <br />  
               <label htmlFor="">Course Name</label>  <br></br>     
               <input placeholder='Course Name' type="text" className={style.sec_contact_form_input} />    <br />
               <label htmlFor="">The Circle to JOin</label>  <br></br>     
               <select name="" id="" >
                         <option value="" className={style.option}>-Please Choose an option-</option>
                         <option value="">AAA</option>
                         <option value="">AAA</option>
               </select><br />
               <label htmlFor="">Massage</label>  <br></br>     
               <textarea rows="2" cols="50" placeholder='tpye your massege here'> </textarea> <br></br>
               <label htmlFor=""  className={style.email_label}>Email</label>  <br></br>     
               <input placeholder='Your Email Address' type="email" className={style.email} />     <br />
               <label htmlFor=""  className={style.email_label}>Student Code</label>  <br></br>     
               <input placeholder='Your Student Code' type="text" className={style.email}  />     <br />
               <input type="submit" className={style.submit} />
               </form>
         </div>
      </div> */}
    </>
    <Footer/>
    
    </>
  )
}

export default Home