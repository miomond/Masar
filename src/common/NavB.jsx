import React, { useState } from 'react'
import style from '../Styles/nav.module.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown , faMagnifyingGlass ,faUser} from '@fortawesome/free-solid-svg-icons'

export function NavB (){
    return (
        <>
     <div className={`${style.cont}`}>
    
     </div>
    
     <nav className={`navbar navbar-expand-lg bg-body-tertiary  `}>
      <div className="container-fluid">
      <Link to='/' className={`${style.dec} mx-xl-3 `}><h3>Masar Academy</h3></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-xl-4">
            <li className="nav-item">
            <Link to='/' className={`nav-link`}>Home</Link>              
            </li>
            <li className="nav-item">
            <Link to='/subscribtion' className={`nav-link`}>subscription</Link>
            </li>
            <li className="nav-item">
            <Link to='/about' className={`nav-link`}>About</Link>
            </li>
            <li className="nav-item">
            <Link to='/contact' className={`nav-link`}>Contact</Link>
            </li>
    
            <li className="nav-item dropdown mx-lg-5  ">
              <a
                className="nav-link dropdown-toggle"
                href='#'
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               route
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={'/StudentRegister'}>
                  Student Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={'/StudentLogin'}>
                  Student Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={'/TeacherLogin'}>
                  Teacher Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={'/TeacherRegister'}>
                  Teacher Register
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to={'/CourseDetails'}>
                  Cource Details
                  </Link>
                </li>


                <li>
                  <Link className="dropdown-item" to={'/LessonVideo'}>
                  Lessons
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav  ">
          <li className="nav-item">
          <div className={`${style.search} d-none  d-xl-block`}>
            <input type="search" name="" id="" placeholder='Search in Site'/>
            <FontAwesomeIcon className={style.FontAwesomeIconSearch} icon={faMagnifyingGlass} />
            </div>
          </li>
          </ul>
    
          <ul className="navbar-nav  ms-xl-5  ">
          
          <li className="nav-item ms-xl-5   ">
          <Link to='/StudentLogin' className={`${style.decoration1}  align-self-auto  `}> 
              <button className={style.btn1}>
                <FontAwesomeIcon className={style.FontAwesomeIconUser} icon={faUser}/>
                  Log in
              </button>
          </Link>
          </li>
          <li className="nav-item">
                            <button className={style.btn2}>EN</button>
          </li>
          </ul>
    
        </div>
      </div>
    </nav>
    
    
    
       </>
      )
}