import './About.css';
import { Link } from 'react-router-dom';

function About() {

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
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <Link to="/internship">        
        <li class="nav-item">
          <a class="nav-link" href="#">Internships</a>
        </li></Link>
      </ul>
    </div>
  </div>
</nav>
<div className='about_me'><h1>About me</h1></div>
<div className='about'><p>I am currently pursuing my studies in Electronics and Communication Engineering at Karpagam College of Engineering, located in Coimbatore. I reside in Coimbatore, a city that I find both vibrant and inspiring. My academic focus has provided me with a strong foundation in various aspects of electronics and communication technology.</p>
<p>Beyond my academic pursuits, I have a keen interest in front-end development. Exploring the creative realm of web design and development has been an exciting journey for me. I find joy in crafting user-friendly interfaces and bringing designs to life through coding.One of my key strengths is my ability to learn quickly. I am adaptive by nature, allowing me to grasp new concepts efficiently and apply them effectively.</p><p> This adaptability has been particularly beneficial in the fast-paced field of technology, enabling me to stay updated with the latest trends and tools in front-end development.I am passionate about combining my engineering background with my interest in front-end development to create innovative and impactful solutions. I aspire to contribute my skills and knowledge to build intuitive and user-centric digital experiences.</p></div>

</>
  );
}
export default About;