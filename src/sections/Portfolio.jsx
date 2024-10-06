import { Typography } from "@material-tailwind/react";
import ProjectCard from "../components/ProjectCard.jsx";
import GBH from "../assets/gbh.png";
import Crocosheets from "../assets/crocosheets.png";
import PortfolioImg from "../assets/portfolio.png";
import IeaImg from "../assets/iea.png";
import TetrisImg from "../assets/tetris.png";
import ProjectCrocosheets from "../projects/ProjectCrocosheets.jsx";
import ProjectPortfolio from "../projects/ProjectPortfolio.jsx";
import ProjectGetBackHome from "../projects/ProjectGetBackHome.jsx";


function Portfolio () {
    return <>
        <div id="portfolio">
            <Typography variant="h1" className="text-center dark:text-zinc-50" >Portfolio</Typography>
            <Typography variant="lead" className="text-center dark:text-zinc-50 px-3">Découvrez les différents projets que j'ai réalisé !</Typography>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 xl:grid-cols-3 px-6 justify-items-center">
            <ProjectCard
                projectName={'Portfolio'}
                catchphrase={'Mon portfolio sur lequel vous vous trouvez actuellement, réalisé avec React, Material Tailwind et Vite.'}
                tags={['web', 'tailwind', 'react', 'vite']}
                date={2024}
                src={PortfolioImg}
                content={<ProjectPortfolio />}
                openable={true}
            />
            <ProjectCard
                projectName={'TETRIS'}
                catchphrase={'TETRIS est un jeu-vidéo mobile développé sur Unity, basé sur le jeu d\'arcade.'}
                tags={['unity', 'jeu-vidéo']}
                github={"https://github.com/yoan-ngr/TETRIS"}
                date={2024}
                openable={true}
                src={TetrisImg}
            />
            <ProjectCard
                projectName={'CrocoSheets'}
                catchphrase={'CrocoSheets est un site de gestion de feuilles de calcul en temps réel réalisée avec une équipe de 4 personnes dans un cadre universitaire.'}
                tags={['web', 'express', 'react', 'tailwind', 'vite']}
                date={2023}
                src={Crocosheets}
                content={<ProjectCrocosheets />}
                github={"https://github.com/yoan-ngr/crocosheets-front-end"}
                openable={true}
            />
            <ProjectCard
                projectName={'Institut Européen des Antioxydants'}
                catchphrase={'La plateforme web de l\'IEA a été réalisé lors de mon stage de L3.'}
                tags={['web', 'bulma', 'react', 'vite']}
                date={2023}
                link={"https://report.ie-antioxydants.com/"}
                openable={true}
                src={IeaImg}
            />
            <ProjectCard
                projectName={'CrocoJourney'}
                catchphrase={'CrocoJourney est une plateforme de covoiturage réalisée avec une équipe de 11 personnes dans un cadre universitaire.'}
                tags={['web', 'bootstrap', 'vue', 'vite']}
                date={2023}
                openable={true}
                github={"https://github.com/CrocoJourney/frontend"}
            />
            {/*<ProjectCard
                projectName={'Projet Boissons'}
                catchphrase={'Projet Boissons est un projet universitaire de site de recettes de cocktails, avec des fonctions de recherche et de favoris.'}
                description={<p><b>Projet Boissons</b> est un site de recettes de cocktail réalisé dans le cadre d'un
                    projet universitaire, utilisant des technologies web telles que le PHP ainsi que Bootstrap comme
                    bibliothèque CSS.</p>}
                tags={['web', 'bootstrap', 'php']}
                date={2022}
                openable={false}
            />
                <ProjectCard
                projectName={'Treasury'}
            catchphrase={'Treasury est un projet tutoré de porte-monnaies virtuels, connecté à une carte RFID Arduino pour des paiements physiques.'}
            tags={['web', 'bootstrap', 'php']}
            date={2021}
            openable={false}
        />*/
        }
            <ProjectCard 
                projectName={'Get Back Home'}
                catchphrase={'Get Back Home est un jeu vidéo réalisé en 48h pour la TUTO UNITY FR Game Jam sous le moteur Unity, en collaboration avec deux autres personnes.'}
                tags={['jeu-vidéo', 'unity']}
                date={2020}
                src={GBH}
                link={"https://truenoo.itch.io/getbackhome"}
                content={<ProjectGetBackHome/>}
                openable={true}
            />
        </div>
        
    </>
}

export default Portfolio;