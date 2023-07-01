import Navbar from './componenet/navbar';
import './sass.css';
import Home from './componenet/home.js/home';
import { useState, useEffect  } from 'react';
import About from './componenet/about/about';
import Services from "./componenet/services/services";
import Skills from "./componenet/skills.js/skill";
import Resuse from "./componenet/resuse/Resuse";
function App() {
  let [jj,jjSet]=useState(["UI Developer.", "front-end Developer.","freelancer."])
  let [hi , hiSet]=useState([window.innerWidth])
  let [hhi , hhiSet]=useState([window.screenY])
  //let [jjj,jjjset]=useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Home jj={jj} jjSet={jjSet} use={useState} us={useEffect}/>
    <About hii={hi} hiiset={hiSet} us={useEffect}/>
    <Services hii={hhi} hiiset={hhiSet} us={useEffect}/>
    <Skills/>
    <Resuse/>
    </div>
  );
}

export default App;
