import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./sections/Contact.jsx";
import Technos from "./sections/Technos.jsx";
import Cursus from "./sections/Cursus.jsx";
import About from "./sections/About.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Background from "./assets/6682222.jpg";
import {Button} from "@material-tailwind/react";
import AnchorLink from "react-anchor-link-smooth-scroll";


function App () {



    const [jumboState, setJumboState] = useState(0);

    const changeJumboState = () => {
        let j = jumboState + 1;
        if(j > 1)
            j = 0;
        setJumboState(j);
    }




    return <div className="dark:bg-zinc-900">
        <Header />
        <div id="home" className="relative overflow-hidden bg-cover bg-no-repeat h-[48rem]" style={{
            backgroundPosition:"50%",
            backgroundImage : `url(${Background})`
        }} >
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            <span className="">Je suis un </span><br /><span className="bg-amber-700 px-4 rounded-2xl select-none cursor-pointer" onClick={changeJumboState}>{
                                jumboState === 0 ? "développeur web" : "développeur de jeux-vidéos"
                        }</span>
                        </h1>
                        <Button variant="outlined" size="lg" color="white"><AnchorLink offset='125'  href="#portfolio">Découvrir mes projets</AnchorLink></Button>
                    </div>
                </div>
            </div>
        </div>
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