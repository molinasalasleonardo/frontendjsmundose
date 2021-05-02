import './App.scss';
import Hero from "../src/components/hero/Hero";
import Contact from "../src/containers/Contact";
import DataBar from "../src/components/databar/databar";
import InfoScroll from "../src/components/info_scroll/Info_scroll";
import AccordionSection4 from "../src/components/accordion/accordion";
import Footer from "../src/components/footer/footer";
import Navbar1 from "../src/components/header/Header";


const App = () =>  {
  return (
    <div className="App">
   <Navbar1></Navbar1>
   <Hero></Hero>
   <DataBar></DataBar>
   <InfoScroll></InfoScroll>
   <AccordionSection4></AccordionSection4>
   <Contact></Contact>
   <Footer></Footer>
    </div>
  );
}

export default App;
