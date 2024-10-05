import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./sections/Contact.jsx";
import Technos from "./sections/Technos.jsx";
import Cursus from "./sections/Cursus.jsx";
import About from "./sections/About.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Hero from "./components/Hero.jsx";

function App () {

    return <div className="dark:bg-zinc-900">
        <Header />
        <Hero />
        <div className="mx-24 my-12 h-/5">
            <Portfolio />
            <About />
            <Cursus />
            <Technos />
            <Contact />
        </div>
        <Footer />
    </div>
}
            
export default App;