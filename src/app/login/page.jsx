import React from "react";
import Link from "next/link";
import stye from "./login.css";

function login(){
    return(
       <>
<div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="30px"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link active" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
          <Link href="/sv" className="nav-link active" aria-current="page">Service</Link>
        </li>
        <li className="nav-item">
          <Link href="/ct" className="nav-link active" aria-current="page">Content</Link>
        </li>
      </ul>
      <div className="d-flex">
        <Link href="/login">
      <button type="button" class="btn btn-outline-primary mx-2">Login</button>
      </Link>

      <Link href="/signup">
      <button type="button" class="btn btn-outline-secondary">Sign up</button>
      </Link>
      </div>
    </div>
  </div>
</nav>
</div>
 
 <div className="my-4">
  <center>
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Login</h3>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typePasswordX-2">Password</label>
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
              <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
            </div>
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
          </div>
        </div>
      </div>
      </center>
      </div>

      <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">Hello, my name is Siwat Sangkhaanan. I am a student at Chiang Mai Technical College, studying for a Vocational Diploma in Information Technology, Software, and Applications. In the future, I want to work as a developer, specifically as a Full-Stack Developer. Currently, I am learning from various courses on Futureskill and Borntodev School. Thank you to everyone who is reading this. Welcome to my website!</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
          <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
          <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
          <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
          <li><a href="http://scanfcode.com/category/android/">Android</a></li>
          <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="http://scanfcode.com/about/">About Us</a></li>
          <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
          <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
          <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
          <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#">Scanfcode</a>.
        </p>
      </div>
    </div>
  </div>
</footer>
       </>
    )
}

export default login;
