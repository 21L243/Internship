import './Education.css';
import { Link } from 'react-router-dom';

function Education() {

  return (
   <>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <Link to="/"> <a class="navbar-brand" href="#">Roopika Sree S</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <Link to="/about">
      <li class="nav-item">
          <a class="nav-link" href="#">About me</a>
        </li></Link>
        <Link to="/skills">
        <li class="nav-item">
          <a class="nav-link" href="#">Skills</a>
        </li></Link>
        <Link to="/education">
        <li class="nav-item">
          <a class="nav-link" href="#">Education</a>
        </li></Link>
        <Link to="/certification">
        <li class="nav-item">
          <a class="nav-link" href="#">Certifications</a>
        </li></Link>
        <Link to="/projects">
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li></Link>
        <Link to="/internship">
        <li class="nav-item">
          <a class="nav-link" href="#">Internships</a>
        </li></Link>
      </ul>
    </div>
  </div>
</nav>
<div class="school"><h1>Educational Qualifications</h1></div>
<div class="school1"><h3>BACHELOR OF ENGINEERING</h3></div>
<div class="school2"><p>Karpagam College Of Engineering</p></div>
<div class="school3"><p>2021-2025</p></div>
<div class="school1"><h3>HIGHER SECONDARY EDUCATION</h3></div>
<div class="school2"><p>Alvernia Matriculation Higher Secondary School</p></div>
<div class="school3"><p>2020-2021</p></div>
<div class="school4"><p>HSC Percentage : 90.5</p></div>
<div class="school1"><h3>SECONDARY SCHOOL EDUCATION</h3></div>
<div class="school2"><p>Alvernia Matriculation Higher Secondary School</p></div>
<div class="school3"><p>2018- 2019 </p></div>
<div class="school4"><p>SSLC Percentage : 87.4</p></div>
</>
  );
}
export default Education;