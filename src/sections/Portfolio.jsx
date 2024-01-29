import { Typography } from "@material-tailwind/react";
import ProjectCard from "../components/ProjectCard.jsx";
import GBH from "../assets/gbh.png";
import Crocosheets from "../assets/crocosheets.png";
import PortfolioImg from "../assets/portfolio.png";


function Portfolio () {
    return <>
        <div id="portfolio">
            <Typography variant="h1" className="text-center dark:text-zinc-50" >Portfolio</Typography>
            <Typography variant="lead" className="text-center dark:text-zinc-50">Découvrez les différents projets que j'ai réalisé !</Typography>
        </div>
        <div className="mt-12 grid gap-12 grid-cols-3 justify-items-center">
            <ProjectCard
                projectName={'CrocoSheets'}
                catchphrase={'CrocoSheets est un site de gestion de feuilles de calcul en temps réel réalisée avec une équipe de 4 personnes dans un cadre universitaire.'}
                tags={['web', 'express', 'react', 'tailwind', 'vite']}
                date={2023}
                src={Crocosheets}
            />
            <ProjectCard 
                projectName={'Institut Européen des Antioxydants'}
                catchphrase={'La plateforme web de l\'IEA a été réalisé lors de mon stage de L3.'}
                tags={['web', 'bulma', 'react', 'vite']}
                date={2023}
                link={"https://report.ie-antioxydants.com/"}
            />
            <ProjectCard 
                projectName={'Portfolio'}
                catchphrase={'Mon portfolio sur lequel vous vous trouvez actuellement, réalisé avec React, Material Tailwind et Vite.'}
                tags={['web', 'tailwind', 'react', 'vite']}
                date={2023}
                src={PortfolioImg}
            />
            <ProjectCard 
                projectName={'CrocoJourney'}
                catchphrase={'CrocoJourney est une plateforme de covoiturage réalisée avec une équipe de 11 personnes dans un cadre universitaire.'}
                tags={['web', 'bootstrap', 'vue', 'vite']}
                date={2023}
            />
            <ProjectCard 
                projectName={'Projet Boissons'}
                catchphrase={'Projet Boissons est projet universitaire de site de recettes de cocktails, avec des fonctions de recherche et de favoris.'}
                tags={['web', 'bootstrap', 'php']}
                date={2022}
            />
            <ProjectCard 
                projectName={'Treasury'}
                catchphrase={'Treasury est un projet tutoré de porte-monnaies virtuels, connecté à une carte RFID Arduino pour des paiements physiques.'}
                tags={['web', 'bootstrap', 'php']}
                date={2021}
            />
            <ProjectCard 
                projectName={'Get Back Home'}
                catchphrase={'Get Back Home est un jeu vidéo réalisé en 48h pour la TUTO UNITY FR Game Jam sous le moteur Unity, en collaboration avec deux autres personnes.'}
                tags={['jeu-vidéo', 'unity']}
                date={2020}
                src={GBH}
                link={"https://truenoo.itch.io/getbackhome"}
            />
        </div>
        
    </>
}

export default Portfolio;