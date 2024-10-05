import {Typography} from "@material-tailwind/react";

function ProjectGetBackHome(){
    return (
        <>
            <Typography variant="h4" className="my-3 dark:text-zinc-300">Description</Typography>
            <div>
                <b className="font-bold">Get Back Home</b> est un jeu-vidéo que j'ai conçu lors d'une game jam organisée en 2020 par la chaîne YouTube de TUTO UNITY FR.
                En collaboration avec deux autres développeurs, nous avons fait en 48h un petit jeu de survie en vue top-down, dans lequel le joueur doit gérer une petite île et réparer un phare afin de pouvoir s'enfuir.<br/>
                Le jeu a été fait avec le moteur Unity et programmé en C#.
            </div>
            <br/>

        </>
    );
}

export default ProjectGetBackHome;