import { Typography } from "@material-tailwind/react";
import ProjectCard from "../components/ProjectCard.jsx";


function Portfolio () {
    return <>
        <div>
            <Typography variant="h1" className="text-center dark:text-zinc-50" >Portfolio</Typography>
            <Typography variant="lead" className="text-center dark:text-zinc-50">Découvrez les différents projets que j'ai réalisé !</Typography>
        </div>
        <div className="mt-12 grid gap-12 grid-cols-4 justify-items-center">
            <ProjectCard 
                projectName={'Institut Européen des Antioxydants'}
                catchphrase={'La plateforme web de l\'IEA a été réalisé lors de mon stage de L3.'}
                tags={['web', 'bulma', 'react', 'vite']}
                date={2023}
            />
            <ProjectCard 
                projectName={'Portfolio'}
                catchphrase={'Mon portfolio sur lequel vous vous trouvez actuellement, réalisé avec React, Material Tailwind et Vite.'}
                tags={['web', 'tailwind', 'react', 'vite']}
                date={2023}
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
            />
        </div>
        
    </>
}

export default Portfolio;