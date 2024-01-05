import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import FooterBar from './components/FooterBar/FooterBar.jsx';

function App(){
  console.log(window.location.pathname)
  let ComponentMb
  let ComponentFt
  switch (window.location.pathname) {
    case "/portfolio-react":
      ComponentMb = <Home/>
      break;
    case "/portfolio-react/About":
      ComponentMb = <About/>
      break;
    case "/portfolio-react/Portfolio":
      ComponentMb = <Portfolio/>
      break;
    case "/portfolio-react/Contact":
      ComponentMb = <Contact/>
      ComponentFt = <FooterBar/>
      break;
  }

  /*Render and structuring*/
  return (
  <div id="mega_structure">
    <div id="header">
      <NavBar/>
    </div>
    <div id="main_body">
      {ComponentMb}
    </div>
    <div id="footer">
      {ComponentFt}
    </div>
  </div>
  )
}

export default App;