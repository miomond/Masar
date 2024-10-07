import React from 'react'
import  { useState } from 'react';
import { FaCheck } from "react-icons/fa";

import img15 from '../assets/Online-learning-amico.svg'
function HeroMahdy() {
  return (
<>

<section className="section mt-lg-5">
  <div className="container">
    <div className="row">
      <div className="d-none d-md-block col-md-4  ">
        <div className="custom-module">
          <img
            src={img15}
            alt=""
            className="img-responsive wow slideInLeft"
            style={{ visibility: "visible", animationName: "slideInLeft" }}
          />
        </div>
        {/* end module */}
      </div>
      {/* end col */}
      <div className="col-md-8">
        <div className=" ps-5">
          <h2>
            We are a passionate <mark>learning system</mark> from
            <br />
            London. Do beautiful and easy-to-use digital <br />
            design &amp; web development
          </h2>
          <p>
            Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus.
            Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor.
            Integer lectus. Praesent sed nisi eleifend, fermentum orci amet,
            iaculis libero.
          </p>
          <hr className="invis" />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 first">
              <ul className="check">
                <li><FaCheck />  Custom Shortcodes</li>
                <li><FaCheck />  Visual Page Builder</li>
                <li><FaCheck />  Unlimited Shortcodes</li>
                <li><FaCheck />  Responsive Theme</li>
                <li><FaCheck />  Tons of Layouts</li>
              </ul>
              {/* end check */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <ul className="check">
                <li> <FaCheck /> Font Awesome Icons</li>
                <li> <FaCheck /> Pre-Defined Colors</li>
                <li> <FaCheck /> AJAX Transitions</li>
                <li> <FaCheck /> High Quality Support</li>
                <li> <FaCheck /> Unlimited Options</li>
              </ul>
              {/* end check */}
            </div>
            {/* end col-lg-4 */}
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 last">
              <ul className="check">
                <li> <FaCheck /> Shopping Layouts</li>
                <li> <FaCheck /> Pre-Defined Fonts</li>
                <li> <FaCheck /> Style Changers</li>
                <li> <FaCheck /> Footer Styles</li>
                <li> <FaCheck /> Header Styles</li>
              </ul>
              {/* end check */}
            </div>
            {/* end col-lg-4 */}
          </div>
          {/* end row */}
          <hr className="invis" />
          <div className="btn-wrapper ms-xl-5">
            <a href="#" className=" btn btn-primary ms-xl-5 mt-5">
              Learn More About us
            </a>
          </div>
        </div>
        {/* end module */}
      </div>
      {/* end col */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</section>

</>  
  )
}

export default HeroMahdy