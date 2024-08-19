import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import style from "./styles.css";


export default function Home() {
  return (
    <>
    <body>
      
    
    {/* navbar */}
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

{/* corsone */}


<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/736x/c9/0e/4c/c90e4cd8c4884545b1332f855b026e25.jpg" className="d-block w-100" width="70%" height="500px" />
    </div>
    <div className="carousel-item">
      <img src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png" className="d-block w-100" width="100%" height="500px" />
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFqv8e10CblzJ9x_LoiWdI8__KwnUcEHG97XUN33g8a1j_n-rPfsX_QzgM8-6L2Nz-b4&usqp=CAU" className="d-block w-100" width="100%" height="500px" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br />
<div className="row my-2">
<div className="col-md-4 text-center bg-link p-5">
<div className="card" style={{width: '18rem'}}>
  <img src="https://dexwatdev.com/Nowtodev/assets/images/work02.jpg" className="card-img-top" width="100px"/>
  <div className="card-body">
    <h5 className="card-title" id="texteiei" >รางวัลเหรียญทอง</h5>
    <p className="card-text" id="texteiei">แข่งขันทักษะวิชาชีพ ปีพ.ศ.2565 รางวัลเหรียญทอง ทักษะการสร้างเว็บไซต์ ระดับชั้น ปวช. การแข่งขันทักษะวิชาชีพ การประกวดนวัตกรรมและสิ่งประดิษฐ์ สถานศึกษาอาชีวศึกษาเอกชน ระดับชาติ ประจำปีการศึกษา 2565</p>
  </div>
</div>
</div>
<div className="col-md-4 text-center bg-link p-5 ">
<div className="card" style={{width: '18rem'}}>
  <img src="https://dexwatdev.com/Nowtodev/assets/images/work03.jpg" className="card-img-top" width="100px" />
  <div className="card-body">
    <h5 className="card-title">รางวัลเหรียญทอง</h5>
    <p className="card-text">
แข่งขันทักษะวิชาชีพ ปีพ.ศ.2565
รางวัลเหรียญทอง ทักษะการสร้างเว็บไซต์ ระดับชั้น ปวช. การแข่งขันทักษะวิชาชีพ การประกวดนวัตกรรมและสิ่งประดิษฐ์ สถานศึกษาอาชีวศึกษาเอกชน ระดับชาติ ประจำปีการศึกษา 2565</p>
  </div>
</div>
</div>
<div className="col-md-4 text-center bg-link p-5 ">
<div className="card" style={{width: '18rem'}}>
  <img src="https://dexwatdev.com/Nowtodev/assets/images/work06.jpg" className="card-img-top" width="100px" />
  <div className="card-body">
    <h5 className="card-title">รางวัลเหรียญทอง</h5>
    <p className="card-text" id="texteiei">
แข่งขันทักษะวิชาชีพ ปีพ.ศ.2566
รางวัลเหรียญทอง ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับชั้น ปวช. การแข่งขันทักษะวิชาชีพ การประกวดนวัตกรรมและสิ่งประดิษฐ์ ระดับสถานศึกษา ประจำปีการศึกษา 2566</p>
  </div>
</div>
</div>
        </div>
        {/* footer */}
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
</body>
    </>
  );
}
