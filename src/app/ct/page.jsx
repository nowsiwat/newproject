import React from "react";
import Link from "next/link";
import stylee from "./styless.css";
function Service (){
    return(
        <>
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


<center>
<h1> Content</h1>
<div>
  <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
  <form name="sentMessage" id="contactForm" noValidate>
    <div className="control-group">
      <div className="form-group floating-label-form-group controls">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
        <p className="help-block text-danger" />
      </div>
    </div>
    <div className="control-group">
      <div className="form-group floating-label-form-group controls" >
        <label>Email Address</label>
        <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
        <p className="help-block text-danger" />
      </div>
    </div>
    <div className="control-group">
      <div className="form-group col-xs-12 floating-label-form-group controls" id="textboxeiei">
        <label>Phone Number</label>
        <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." aria-invalid="false" />
        <p className="help-block text-danger" />
      </div>
    </div>
    <div className="control-group">
      <div className="form-group floating-label-form-group controls" id="textboxeiei">
        <label>Message</label>
        <textarea rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." aria-invalid="false" defaultValue={""} />
        <p className="help-block text-danger" />
      </div>
    </div>
    <br />
    <div id="success" />
    <div className="form-group">
      <button type="submit" className="btn btn-outline-success" id="sendMessageButton">Send</button>
    </div>
  </form>
</div>

</center>

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
export default Service
