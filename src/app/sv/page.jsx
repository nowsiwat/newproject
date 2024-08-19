import React from "react";
import Link from "next/link";
import stle from "./sv.css";

function Service (){
    return(
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
<div className="container-fluid">
  {/* Page Heading */}
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <center>
    <h1 className="h3 mb-0 text-gray-800">Service</h1>
    </center>
    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
  </div>
  {/* Content Row */}
  <div className="row">
    {/* Earnings (Monthly) Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                Earnings (Monthly)</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Earnings (Monthly) Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                Earnings (Annual)</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-dollar-sign fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Earnings (Monthly) Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                </div>
                <div className="col">
                  <div className="progress progress-sm mr-2">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Pending Requests Card Example */}
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                Pending Requests</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
            </div>
            <div className="col-auto">
              <i className="fas fa-comments fa-2x text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Content Row */}
  <div className="row">

    {/* Pie Chart */}

  </div>
  {/* Content Row */}
  <div className="row">
    {/* Content Column */}
    <div className="col-lg-6 mb-4">
      {/* Project Card Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </div>
      {/* Color System */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              Primary
              <div className="text-white-50 small">#4e73df</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              Success
              <div className="text-white-50 small">#1cc88a</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-info text-white shadow">
            <div className="card-body">
              Info
              <div className="text-white-50 small">#36b9cc</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-warning text-white shadow">
            <div className="card-body">
              Warning
              <div className="text-white-50 small">#f6c23e</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-danger text-white shadow">
            <div className="card-body">
              Danger
              <div className="text-white-50 small">#e74a3b</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-secondary text-white shadow">
            <div className="card-body">
              Secondary
              <div className="text-white-50 small">#858796</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-light text-black shadow">
            <div className="card-body">
              Light
              <div className="text-black-50 small">#f8f9fc</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
              Dark
              <div className="text-white-50 small">#5a5c69</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6 mb-4">
      {/* Illustrations */}

      {/* Approach */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
        </div>
        <div className="card-body">
          <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
            CSS bloat and poor page performance. Custom CSS classes are used to create
            custom components and custom utility classes.</p>
          <p className="mb-0">Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.</p>
        </div>
      </div>
    </div>
  </div>
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
        </div>

        
    )
}
export default Service
