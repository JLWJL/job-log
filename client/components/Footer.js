import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer>
      <div className="footer-links-container">
        <div className="footer-jargon">
          <span className="footer-title"> Job Log </span>
          <sub>
            We are here to help build your dream job
          </sub>
        </div>

        <div className="footer-contact">
          <span className="footer-title"> Our Team </span>
          <ul>
            <li><a href="">Contact us</a></li>
            <li><a href="">About us</a></li>
          </ul>
        </div>

        <div className="footer-resource">
          <span className="footer-title"> Resources </span>
          <ul>
            <li><a href=""> Blogs </a></li>
            <li><a href=""> Workshop </a></li>
            <li><a href=""> Interviews </a></li>
          </ul>
        </div>

        <div className="footer-resource">
          <span className="footer-title"> Join with us </span>
          <ul>
            <li><Link to='/login'> Log in </Link></li>
            <li><Link to='/login'> Sig up </Link></li>
            <li><Link to='/login'> Newsletters </Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-social-container">
        <i className="zmdi zmdi-twitter" title="twitter"></i>
        <i className="zmdi zmdi-facebook" title="facebook"></i>
        <i className="zmdi zmdi-linkedin" title="linkedin"></i>
      </div>
    </footer>
  );
}