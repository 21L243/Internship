import {Route,Routes} from "react-router-dom";
import './App.css';
import Main from "./Main";
import About from"./About";
import Skills from "./Skills";
import Education from "./Education";
import Certification from "./Certifications";
import Projects from "./Projects";
import Internship from "./Internship";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Main/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/certification" element={<Certification/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/internship" element={<Internship/>}></Route>
    </Routes>
    </>
  );
}

export default App;
