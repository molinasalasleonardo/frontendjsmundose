import './App.scss';
import Hero from "../src/components/hero/Hero";
import Contact from "../src/containers/Contact";
import DataBar from "../src/components/databar/databar";
import InfoScroll from "../src/components/info_scroll/Info_scroll";
import AccordionSection4 from "../src/components/accordion/accordion";
import Footer from "../src/components/footer/footer";
import Navbar1 from "../src/components/header/Header";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";



const App = () =>  {
  return (

    <Router>
    <div className="App">

   <Navbar1></Navbar1>
   <div className='contentRoute'>
   <Switch>
     <Route exact path="/">
       <Hero />
       <DataBar />
       <InfoScroll />
       <AccordionSection4 />
       <Contact />
     </Route>
     <Route exact path="/databar">
       <DataBar />
       <InfoScroll />
     </Route>
     <Route exact path="/accordion">
       <AccordionSection4 />
     </Route>
     <Route exact path="/Contact">
       <Contact />
     </Route>
   </Switch>
   </div>
   <Footer></Footer>

    </div>
    </Router>
  );
}

export default App;
