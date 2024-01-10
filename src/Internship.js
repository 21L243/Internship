import './Internship.css';
import { Link } from 'react-router-dom';

function Internship() {

  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/"><a class="navbar-brand" href="#">Roopika Sree S</a></Link>
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
<div class="intern"><h1>Internships</h1></div>
<div class="intern1"><h2>CodSoft</h2></div>
<div class="intern2"><h2>WEB DEVELOPMENT INTERN</h2></div>
<div class="intern3"><p>Completed a virtual web development internship at CodSoft from November 20 to December 20, 2023. Engaged in remote projects, collaborating on web development tasks, and acquiring practical skills in a remote work environment, showcasing adaptability and effective virtual collaboration.</p></div>
<div class="intern4"><h4>Internship Certificate : <a href="https://drive.google.com/file/d/1oYnMXSZzKm9lhsnzGnlkVA9FiloFEYj9/view?usp=sharing"class="fas fa-eye"></a></h4></div>
</>
  );
}
export default Internship;