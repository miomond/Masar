import React from 'react'
import style from '../Styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram , faTwitter , faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="container mt-5">
      <div className="row">
        <div className="col-2">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 offset-1">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div className="d-flex w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-between pt-4 mt-4 border-top">
        <p>© 2021 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width={24} height={24}>
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  
  )
}

export default Footer