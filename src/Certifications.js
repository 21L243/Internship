import './Certification.css';
import { Link } from 'react-router-dom';

function Certification() {

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
<div class="ram"><h1>Certifications</h1></div>
<div class="ram1"><h3>NPTEL</h3></div>
<div class="ram2">
    <li>Introduction To Programming In C <a href="https://drive.google.com/file/d/1WfklELCabGq0bT75IhQyiLeZj5TFIjRi/view?usp=sharing "class="fas fa-eye"></a></li>
     <li>Soft Skill Development <a href="https://drive.google.com/file/d/128Zut6KbG0CZOt4lKPaz2xRoDZgtYits/view?usp=sharing"class="fas fa-eye"></a></li>
     <li>Programming In Java <a href="https://drive.google.com/file/d/1IwLNoksMCQXrdtLKDiiIZixeghZHXfNa/view?usp=sharing"class="fas fa-eye"></a></li>
    </div>
    <div class="ram3"><h3>HackerRank</h3></div>
<div class="ram4">
    <li>JavaScript Basic <a href="https://drive.google.com/file/d/19eoJxLYocWzXZG0eqQV-4JFttdMisV_B/view?usp=sharing" class="fas fa-eye"></a></li>
     <li>Java Basic <a href="https://drive.google.com/file/d/1LbbgiRh4VuvALtfDwzxLo6Z-AgxNGdPY/view?usp=sharing"class="fas fa-eye"> </a></li>
    </div>
    
</>
  );
}
export default Certification;