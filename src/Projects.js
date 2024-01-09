import './Projects.css';
import { Link } from 'react-router-dom';

function Projects() {

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
<div class="project"><h1>Projects</h1></div>
<div class="project1"><h2>LIBRARY MANAGEMENT SYSTEM</h2></div>
<div class="project2"><p>Technology Used : Java</p></div>
<div class="project3"><p>Created a console based application using jdbc to store book
data in MySql database. It will display the book details and
borrowers details of all books using crud operations.</p></div>
<div class="project1"><h2>AUTOMATIC ACCIDENT DETECTOR</h2></div>
<div class="project2"><p>Technology Used : Embedded System</p></div>
<div class="project3"><p>The theme of the project is to send message to family members
and to emergency service when a person met with an accident.</p></div>
<div class="project1"><h2>INTERNSHIP MANAGEMENT</h2></div>
<div class="project2"><p>Technology Used : HTML,CSS,JavaScript,React Js</p></div>
<div class="project3"><p>Developed front-end for an internship management system, emphasizing user interface design and seamless functionality. Implemented HTML, CSS, and JavaScript to craft user-centric layouts for Sign Up, login, and application submission and ensuring optimal user experience.

</p></div>
</>
  );
}
export default Projects;