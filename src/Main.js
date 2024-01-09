import './Main.css';
import { Link } from 'react-router-dom';
import myPhoto from './Images/IMG-20230625-WA0003.png';

function Main() {

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
        </li>
        </Link>
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
<div className="img-container">
<img src={myPhoto}  alt="my photo"></img>
</div>
<div className='back'>
<div className="first-text">Hi! I am Roopika Sree S</div>
<div className="second-text"><p>Electronics and Communication Engineering</p></div>
<div className="icon">
<a href="mailto:roopikasree28srs@gmail.com" class="fas fa-envelope"></a>
<a href="tel:+7200129992" class="fas fa-phone"></a> 
<a href="https://www.linkedin.com/in/roopika-sree-s-b79b88247/" class="fab fa-linkedin"></a>
<a href="https://drive.google.com/file/d/1rwg-aIjm5KIBOle9ddBT_8VXcjt4XYfA/view?usp=sharing" class="fas fa-file-alt "></a>
</div>
</div>
</>
  );
}
export default Main;