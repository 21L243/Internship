import './Skills.css';
import { Link } from 'react-router-dom';

function Skills() {

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
<div class="Skillsss">
<h1>Soft Skills</h1></div>
<div class="Skill1">
  <li>Time Management</li>
  <li>Problem Solving</li>
  <li>Listening Skills</li>
  <li>Self Motivation</li>
</div>
<div class="Skill3"><h1>Technical Skills</h1></div>
<div class="Skill2">
  <li>Core Java</li>
  <li>C Programming</li>
  <li>Data Structures</li>
  <li>Data Base Management System</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>React Js(Basics)</li>
  <li>JavaScript(Basics)</li>
</div>
</>
  );
}
export default Skills;