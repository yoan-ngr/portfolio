import { Card, Timeline, Typography } from "@material-tailwind/react"
import pp from '../assets/pp.jpg'
import AboutChevronDetails from "../components/AboutChevronDetails.jsx";
import React from '../assets/technos/react.png';

function About () {

    let date = new Date();
    let birth = new Date("2001-08-10");
    let age = Math.abs(new Date(birth-date).getUTCFullYear() - 1970);

    return <div className={"mt-12"}>
        <div>
            <Typography variant="h1" className="text-center dark:text-zinc-50">À propos</Typography>
        </div>
        <Card className="flex flex-row dark:bg-zinc-800 mt-12 shadow-lg">
            <div className="h-80">
                <img src={pp} className="h-60 ml-10 my-10 rounded-lg" alt="profile-picture" />
            </div>
            <div className="flex-1 px-12 py-12">
                <Typography variant="paragraph" className="dark:text-zinc-50">
                    Développeur Unity depuis près de 9 ans, j'ai travaillé sur de nombreux projets personnels. Depuis mes études en informatique, je me penche également un peu plus sur les technologies du web, les différents langages, frameworks et librairies disponibles. Je suis de nature curieuse et autodidacte.
                </Typography>
                <div className="mt-6 grid grid-cols-4 gap-2">
                    <AboutChevronDetails title="Nom" content="Yoan NOUGUÉ-RUIZ" />
                    <AboutChevronDetails title="Adresse mail" content={<a className={"text-blue-500"} href="mailto:yoan.nougueruiz@gmail.com">yoan.nougueruiz@gmail.com</a>} />
                    <AboutChevronDetails title="Âge" content={age + " ans"} />
                    <AboutChevronDetails title="N° de téléphone" content="06 86 52 57 31" />
                    <AboutChevronDetails title="Ville" content="Nancy (54), Neufchâteau (88)" />
                    <AboutChevronDetails title="Diplôme" content="Licence Informatique" />
                </div>
                
            </div>
        </Card>
    </div>
}
export default About