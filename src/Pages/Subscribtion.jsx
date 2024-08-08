import React , { useState } from "react";
import headimg from "../assets/Frame 427318998.png";
import img from "../assets/image container.png";
import img2 from "../assets/image 92.png";
import img3 from "../assets/image 93.png";
import img4 from "../assets/image 94.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import facebook from "../assets/Frame 150.svg"
import twitter from "../assets/Frame 181.svg"
import linkedin from "../assets/Frame 182.svg"
import instagram from "../assets/Frame 183.svg"
import '../Styles/Subsribtion.css'


const images = [img2 , img3 , img4];

function Subscribtion() {
  const bStyle = {
    backgroundImage: `url(${headimg})`,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className="rcont1" style={bStyle}>

      </section>

      <section className="rcont2">
        {/* <div className="general-rule"> */}
        <div className="services">
          <p className="roboto-bold">Services</p>
          <p className="roboto-medium">
            Thanks to our extensive experience, we offer exceptional services
            for mastering the Holy Quran in detail.
          </p>
        </div>
        <div className="services-items">
          <div className="services-item">
            <img className="img-item" loading="lazy" src={img} />
            <div className="text-item">
              <p className="title-text-item">Quran Tajweed</p>
              <p className="para-text-item">
                To provide quality education on Quran memorization and Arabic
                language in a nurturing environment.
              </p>
            </div>
          </div>
          <div className="services-item">
            <img className="img-item" loading="lazy" src={img} />
            <div className="text-item">
              <p className="title-text-item">Quran Memorization</p>
              <p className="para-text-item">
                Dedication, compassion, and excellence are at the core of our
                teachings.
              </p>
            </div>
          </div>
          <div className="services-item">
            <img className="img-item" loading="lazy" src={img} />
            <div className="text-item">
              <p className="title-text-item">Arabic Language Teaching</p>
              <p className="para-text-item">
                Our experienced instructors use interactive methods to engage
                students effectively.
              </p>
            </div>
          </div>
          <div className="services-item">
            <img className="img-item" loading="lazy" src={img} />
            <div className="text-item">
              <p className="title-text-item">Quran Reading</p>
              <p className="para-text-item">
                Our experienced instructors use interactive methods to engage
                students effectively.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <section className="rcont3">
        <p className="subscription-title">Subscription</p>
        <div className="subscription-items">
          <div className="subscription-item">
            <p className="subscription-item-head">The First Package</p>
            {/* <div className="subscription-item-space"></div> */}
            <div className="subscription-item-content">
              <p className="item-content-title">350 SAR Monthly</p>
              <div className="item-content-list">
                <p>1. Noor Al-Bayan</p>
                <p>2. Word Formation</p>
                <p>3. Reading and Writing</p>
                <p>4. Juz Amma</p>
              </div>
            </div>
            <div className="subscription-item-tail">
              <p className="item-tail-line">
                . 6hour -12 sessions -30 min/per session
              </p>
              <button className="item-tail-btn">Subscribe now</button>
            </div>
          </div>
          <div className="subscription-item">
            <p className="subscription-item-head">The First Package</p>
            {/* <div className="subscription-item-space"></div> */}
            <div className="subscription-item-content">
              <p className="item-content-title">350 SAR Monthly</p>
              <div className="item-content-list">
                <p>1. Noor Al-Bayan</p>
                <p>2. Word Formation</p>
                <p>3. Reading and Writing</p>
                <p>4. Juz Amma</p>
              </div>
            </div>
            <div className="subscription-item-tail">
              <p className="item-tail-line">
                . 6hour -12 sessions -30 min/per session
              </p>
              <button className="item-tail-btn">Subscribe now</button>
            </div>
          </div>
          <div className="subscription-item">
            <p className="subscription-item-head">The First Package</p>
            {/* <div className="subscription-item-space"></div> */}
            <div className="subscription-item-content">
              <p className="item-content-title">350 SAR Monthly</p>
              <div className="item-content-list">
                <p>1. Noor Al-Bayan</p>
                <p>2. Word Formation</p>
                <p>3. Reading and Writing</p>
                <p>4. Juz Amma</p>
              </div>
            </div>
            <div className="subscription-item-tail">
              <p className="item-tail-line">
                . 6hour -12 sessions -30 min/per session
              </p>
              <button className="item-tail-btn">Subscribe now</button>
            </div>
          </div>
          <div className="subscription-item">
            <p className="subscription-item-head">The First Package</p>
            {/* <div className="subscription-item-space"></div> */}
            <div className="subscription-item-content">
              <p className="item-content-title">350 SAR Monthly</p>
              <div className="item-content-list">
                <p>1. Noor Al-Bayan</p>
                <p>2. Word Formation</p>
                <p>3. Reading and Writing</p>
                <p>4. Juz Amma</p>
              </div>
            </div>
            <div className="subscription-item-tail">
              <p className="item-tail-line">
                . 6hour -12 sessions -30 min/per session
              </p>
              <button className="item-tail-btn">Subscribe now</button>
            </div>
          </div>
          <div className="subscription-item">
            <p className="subscription-item-head">The First Package</p>
            {/* <div className="subscription-item-space"></div> */}
            <div className="subscription-item-content">
              <p className="item-content-title">350 SAR Monthly</p>
              <div className="item-content-list">
                <p>1. Noor Al-Bayan</p>
                <p>2. Word Formation</p>
                <p>3. Reading and Writing</p>
                <p>4. Juz Amma</p>
              </div>
            </div>
            <div className="subscription-item-tail">
              <p className="item-tail-line">
                . 6hour -12 sessions -30 min/per session
              </p>
              <button className="item-tail-btn">Subscribe now</button>
            </div>
          </div>
          <div className="subscription-item">
            <p className="subscription-item-head">The First Package</p>
            {/* <div className="subscription-item-space"></div> */}
            <div className="subscription-item-content">
              <p className="item-content-title">350 SAR Monthly</p>
              <div className="item-content-list">
                <p>1. Noor Al-Bayan</p>
                <p>2. Word Formation</p>
                <p>3. Reading and Writing</p>
                <p>4. Juz Amma</p>
              </div>
            </div>
            <div className="subscription-item-tail">
              <p className="item-tail-line">
                . 6hour -12 sessions -30 min/per session
              </p>
              <button className="item-tail-btn">Subscribe now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="rcont4">
        <p className="achieve-title">Achievements</p>
        <div className="achieve-slider">
          <ArrowCircleLeftIcon sx={{ fontSize: 70, color: "#064041" , cursor:"pointer" , '&:hover': {color: '#00211b'}}} onClick={handlePrev}/>
          <img src={images[currentIndex]} width={700} />
          <ArrowCircleRightIcon sx={{ fontSize: 70, color: "#064041" , cursor:"pointer" , '&:hover': {color: '#00211b'}}} onClick={handleNext}/>
        </div>
      </section>

      <section className="rcont5">
        <div className="contactUs-title">
          <p className="achieve-title">Contact Us</p>
          <p className="roboto-medium">
            Reach out to us for inquiries and registration
          </p>
        </div>

        <form action="/submit-form" method="post" className="contactUs-form">
          <div className="form-fields-item">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required=""
              placeholder="Your Name"
            />
            <br />
            <br />
          </div>
          <div className="form-fields-item">
            <label htmlFor="course">Course Name</label>
            <br />
            <input
              type="text"
              id="course"
              name="course"
              required=""
              placeholder="Your Course Name"
            />
            <br />
            <br />
          </div>
          <div className="form-fields-item">
            <label htmlFor="circle">The Circle to Join?</label>
            <br />
            
            <select required="" id="circle" name="circle">
              <option value="">-Please Choose an Option-</option>
              <option value="">-Please Choose an Option-</option>
              <option value="">-Please Choose an Option-</option>
              <option value="">-Please Choose an Option-</option>
            </select>
            <br />
            <br />
          </div>
          <div className="form-fields-item">
            <label htmlFor="message">Message</label>
            <br />
            <input
              type="text"
              id="message"
              name="message"
              required=""
              placeholder="Type your message here"
            />
            <br />
            <br />
          </div>
          <div className="form-fields-item">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              required=""
              placeholder="Your Email Address"
            />
            <br />
            <br />
          </div>
          <div className="form-fields-item">
            <label htmlFor="code">Student Code</label>
            <br />
            <input
              type="text"
              id="code"
              name="code"
              required=""
              placeholder="Your Student Code"
            />
            <br />
            <br />
          </div>
          <div className="form-fields-item">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>

      <section className="rcont6">
        <div className="newsLetter">
          <p className="newsLetter-title">sign up to stay updated on the latest in technology</p>
          <div className="newsLetter-input">
            <input
              type="text"
              id="subscribe"
              name="subscribe"
              placeholder="Email Address"
            />
            <button>Subscribe To Newsletter</button>
          </div>
        </div>
        <div className="socialIcons">
          <img src={facebook}/>
          <img src={twitter}/>
          <img src={linkedin}/>
          <img src={instagram}/>
        </div>
      </section>
    </>
  );
}

export default Subscribtion;
