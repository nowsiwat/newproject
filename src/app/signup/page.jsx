import React from "react";
import Link from "next/link";
import stlyle from "./signup.css";

function login(){
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

<div className="container">
  <div className="row justify-content-md-center">
    <div className="col-12">
      <br />
      <div className="card  border-secondary mb-6 " style={{maxWidth: '100rem'}}>
        <div className="card-header text-white bg-secondary">
          <i className="fas fa-address-card" /> ฟอร์มสมัครข้อมูล
        </div>
        <div className="card-body">
         <div className="row">
         <div className="col md-2">
         <p>คำนำหน้าชื่อ</p>
											<div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="first_n" id="Mr." defaultValue="นาย" required />
    <label className="form-check-label" htmlFor="Mr.">นาย</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="first_n" id="Mrs." defaultValue="นาง" required />
    <label className="form-check-label" htmlFor="Mrs.">นาง</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="first_n" id="Miss." defaultValue="นางสาว" required />
    <label className="form-check-label" htmlFor="Miss.">นางสาว</label>
  </div>
</div>

         </div>

         <div className="col md-5">
            
            <label>ชื่อ</label>
            <input type="text" class="form-control"  />
         </div>
         <div className="col md-5">
            <label>นามสกุล</label>
            <input type="text" class="form-control"  />
         </div>
         </div>
        </div>
        <div className="card-body">
         <div className="row">
         <div className="col md-4">

            <label>ชื่อเล่น</label>
            <input type="text" class="form-control"/>
         </div>
         <div className="col md-4">

            <label>วันเกิด</label>
            <input type="date" class="form-control"/>
         </div>
         <div className="col md-4">

         <label>เลขที่บัตรประชาชน</label>
         <input type="text" class="form-control"/>
         </div>
         </div>
         </div>

         <div className="card-body">
         <div className="row">
         <div className="col md-4">

            <label>ชื่อบิดา</label>
            <input type="text" class="form-control"/>
         </div>
         <div className="col md-4">

            <label>นามสกุลบิดา</label>
            <input type="text" class="form-control"/>
         </div>
         <div className="col md-4">

         <label>เบอร์โทร</label>
         <input type="text" class="form-control"/>
         </div>
         </div>
         </div>

         <div className="card-body">
         <div className="row">
         <div className="col md-4">

            <label>ชื่อมารดา</label>
            <input type="text" class="form-control"/>
         </div>
         <div className="col md-4">

            <label>นามสกุลมารดา</label>
            <input type="text" class="form-control"/>
         </div>
         <div className="col md-4">

         <label>เบอร์โทร</label>
         <input type="text" class="form-control"/>
         </div>
         </div>
         </div>

         <div className="card-body">
         <div className="row">
         <div className="col md-4">

            <label>อีเมล</label>
            <input type="email" class="form-control"/>
         </div>
         <div className="col md-4">

            <label>รหัสผ่าน</label>
            <input type="password" class="form-control"/>
         </div>
         <div className="col md-4">

         <label>ยืนยันรหัสผ่าน</label>
         <input type="password" class="form-control"/>
         </div>
         </div>
         </div>

         <div className="card-body">
         <div className="row">
         <div className="col md-4">

            <label>IDfacebook</label>
            <input type="text" class="form-control"/>
         </div>

         <div className="col md-4">

         <label>IDLinek</label>
         <input type="text" class="form-control"/>
         </div>
         </div>
         </div>


            </div>
            </div>
            </div>
            </div>
<br />

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

export default login
