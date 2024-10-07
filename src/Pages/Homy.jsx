import React from 'react'
import HeroMahdy from '../components/HeroMahdy'

import './Homy.css'

function Homy() {
  return (
    <>
    
    <div className="fixed-top">
  <div className="container px-0">
    <nav className="navbar navbar-expand-lg navbar-freya navbar-light">
      {" "}
      <a className="navbar-brand" href="index.html">
        <div className="freya-logo">Freya</div>
      </a>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#primaryNavbarCollapse"
        aria-controls="primaryNavbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="hamburger hamburger--emphatic">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="primaryNavbarCollapse">
        <ul className="navbar-nav py-3 py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-indicator"
              href="JavaScript:void(0)"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="index.html">
                  Slider Header
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="homes/header-slider-classic.html"
                >
                  Slider Classic
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="homes/header-static.html">
                  Static Header
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="homes/header-static-classic.html"
                >
                  Static Classic
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="homes/header-youtube-video.html"
                >
                  Youtube Background
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="homes/header-youtube-video-classic.html"
                >
                  Youtube Classic
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="homes/header-selfhosted-video.html"
                >
                  Self-hosted Video
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="homes/header-selfhosted-video-classic.html"
                >
                  Self-hosted Classic
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-indicator"
              href="JavaScript:void(0)"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="pages/about.html">
                  About
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/recognition.html">
                  Recognition
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/blank.html">
                  Blank Page
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages/404.html">
                  404 Page
                </a>
              </li>
              <li className="dropend">
                <a
                  className="dropdown-item dropdown-toggle dropdown-indicator"
                  href="JavaScript:void(0)"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <a className="dropdown-item" href="pages/login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item" href="pages/registration.html">
                      Registration
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-indicator"
              href="JavaScript:void(0)"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Projects
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="projects/projects.html">
                  Projects Gallery
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="projects/project.html">
                  Single Project
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-indicator"
              href="JavaScript:void(0)"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="blog/blog-list.html">
                  Blog List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="blog/blog.html">
                  Single Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-indicator"
              href="JavaScript:void(0)"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="contact/contact1.html">
                  Contact 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="contact/contact2.html">
                  Contact 2
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle dropdown-indicator"
              href="JavaScript:void(0)"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Elements
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="elements/buttons.html">
                  Buttons
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/colors.html">
                  Colors
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/googlemap.html">
                  Google Map
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/grid.html">
                  Grid
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/icons.html">
                  Icons
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/layouthelpers.html">
                  Layout Helpers
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/modal-video.html">
                  Modal Video
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/swiper.html">
                  Swiper
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="elements/typography.html">
                  Typography
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-nav ms-lg-auto flex-row justify-content-center py-3 py-lg-0 me-n2">
          <li>
            <a className="nav-link px-2" href="#">
              <svg
                className="svg-inline--fa fa-facebook-f fa-w-10"
                data-fa-transform="shrink-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
                style={{ transformOrigin: "0.3125em 0.5em" }}
              >
                <g transform="translate(160 256)">
                  <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      transform="translate(-160 -256)"
                    />
                  </g>
                </g>
              </svg>
              {/* <span class="fab fa-facebook-f" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}
            </a>
          </li>
          <li>
            <a className="nav-link px-2" href="#">
              <svg
                className="svg-inline--fa fa-twitter fa-w-16"
                data-fa-transform="shrink-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
                style={{ transformOrigin: "0.5em 0.5em" }}
              >
                <g transform="translate(256 256)">
                  <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      transform="translate(-256 -256)"
                    />
                  </g>
                </g>
              </svg>
              {/* <span class="fab fa-twitter" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}
            </a>
          </li>
          <li>
            <a className="nav-link px-2" href="#">
              <svg
                className="svg-inline--fa fa-instagram fa-w-14"
                data-fa-transform="shrink-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
                style={{ transformOrigin: "0.4375em 0.5em" }}
              >
                <g transform="translate(224 256)">
                  <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      transform="translate(-224 -256)"
                    />
                  </g>
                </g>
              </svg>
              {/* <span class="fab fa-instagram" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}
            </a>
          </li>
          <li>
            <a className="nav-link px-2" href="#">
              <svg
                className="svg-inline--fa fa-dribbble fa-w-16"
                data-fa-transform="shrink-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="dribbble"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
                style={{ transformOrigin: "0.5em 0.5em" }}
              >
                <g transform="translate(256 256)">
                  <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                    <path
                      fill="currentColor"
                      d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
                      transform="translate(-256 -256)"
                    />
                  </g>
                </g>
              </svg>
              {/* <span class="fab fa-dribbble" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

    </>
  )
}

export default Homy