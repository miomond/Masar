import React, { useRef, useState } from "react";
import style from "../Styles/nav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMagnifyingGlass, faUser,} from "@fortawesome/free-solid-svg-icons";
import NavLogo from "../assets/Log.svg";
import { FaDoorOpen } from "react-icons/fa6";

import "../Styles/Hamburger.css";
import Styles from "../Styles/NewNav.module.css";

export function NavB() {
  
    return (
      <>
        <div className={` fixed-top    `} >
          {/* <h1>hi pro</h1> */}
          <div className="container mt-3">
            <nav
              className={` navbar navbar-expand-lg navbar-expand-lg shadow  ${Styles.navbar} ${Styles.navbarexpandlg}  ${Styles.navbarfreya}  `}
            >
              <Link to="/" className={` navbar-brand ${Styles.navbarBrand}  position-relative  `}>
                {" "}
                <img
                  src={NavLogo}
                  width={50}
                  className={`${Styles.freyalogo} position-absolute `}
                  alt="Logo"
                />
              </Link>
              <button
                className={` nav-item navbar-toggler  ${Styles.navbarToggler}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className={`navbar-toggler-icon ${Styles.navbarTogglerIcon} `} />
              </button>
              <div className="collapse navbar-collapse ms-lg-5 " id="navbarNavDropdown">
                <ul className={`  navbar-nav ${Styles.navbarNav}  ms-lg-n1`}>
                  <li className={`nav-item ${Styles.navItem}`}>
                    <Link to="/" className={` nav-link  ${Styles.navLink}`}>
                      Home
                    </Link>
                  </li>
                  <li className={` nav-item ${Styles.navItem}`}>
                    <Link to="/subscribtion" className={` nav-link  ${Styles.navLink}`}>
                      subscription
                    </Link>
                  </li>
                  <li className={`${Styles.navItem}`}>
                    <Link to="/about" className={` nav-link  ${Styles.navLink}`}>
                      About
                    </Link>
                  </li>
                  <li className={`${Styles.navItem}`}>
                    <Link to="/contact" className={` nav-link  ${Styles.navLink}`}>
                      Contact
                    </Link>
                  </li>

                  <li className={`nav-item dropdown    ${Styles.navItem} ${Styles.dropdown} mx-lg-5  `}>
                    <a className={` nav-link   ${Styles.navLink} ${Styles.dropdownToggle} ${Styles.dropdownIndicator}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      route
                    </a>
                    <ul className={`dropdown-menu ${Styles.dropdownMenu}`}>
                      <li>
                        <Link className={` dropdown-item ${Styles.dropdownItem}`} to={"/StudentRegister"}>
                          Student Register
                        </Link>
                      </li>
                      <li>
                        <Link className={`   dropdown-item ${Styles.dropdownItem}`} to={"/StudentLogin"}>
                          Student Login
                        </Link>
                      </li>
                      <li>
                        <Link className={`   dropdown-item ${Styles.dropdownItem}`} to={"/TeacherLogin"}>
                          Teacher Login
                        </Link>
                      </li> 
                      <li>
                        <Link className={`   dropdown-item ${Styles.dropdownItem}`} to={"/TeacherRegister"}>
                          Teacher Register
                        </Link>
                      </li>

                      <li>
                        <Link className={`   dropdown-item ${Styles.dropdownItem}`} to={"/CourseDetails"}>
                          Cource Details
                        </Link>
                      </li>

                      <li>
                        <Link className={`   dropdown-item ${Styles.dropdownItem}`} to={"/LessonVideo"}>
                          Lessons
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                
                <ul className="navbar-nav       ms-lg-auto   ">
                  <li className={`${Styles.navItem}`}>
                 <Link
                      to="/StudentLogin"
                      className={`me-lg-3   `}
                    >
                      <button className={`${style.btn2} me-3`}>
                        <FontAwesomeIcon
                          className={`d-none d-lg-inline-block  ms-3  ${style.FontAwesomeIconUser}`}
                          icon={faUser}
                        />
                          <FaDoorOpen className={`d-inline-block d-lg-none `} />

                        <span className={`d-none d-lg-inline-block me-3`}>Log in</span>
                      </button>
                    </Link>
                    <button className={style.btn2}>EN</button>
                  </li>
                  <li className={`${Styles.navItem}`}>
                  </li>
                  <li className={`${Styles.navItem}`}></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }

