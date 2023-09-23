import { Avatar, Button, Card, Input, Option, Select, Textarea, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Tooltip, Typography } from "@material-tailwind/react"
import pp from '../assets/pp.jpg'
import TimelineElement from "../components/TimelineElement";
import AboutChevronDetails from "../components/AboutChevronDetails";
import Unity from '../assets/Unity.png';
import Gimp from '../assets/GIMP.png';
import Tailwind from '../assets/tailwind.png';
import CSharp from '../assets/csharp.png';
import Rider from '../assets/rider.png';
import WebStorm from '../assets/webstorm.png';
import PyCharm from '../assets/pycharm.png';
import IntelliJ from '../assets/intellij.png';
import Blockbench from '../assets/blockbench.png';
import Trello from '../assets/trello.png';
import Milanote from '../assets/milanote.png';
import Bootstrap from '../assets/bootstrap.png';
import Bulma from '../assets/bulma.png';
import Plastic from '../assets/plastic.png';
import React from '../assets/react.png';
import Java from '../assets/java.png';
import Vite from '../assets/vite.png';
import Git from '../assets/git.png';
import Github from '../assets/github.png';
import Gitlab from '../assets/gitlab.png';
import Code from '../assets/code.png';
import Blender from '../assets/blender.png';
import Audacity from '../assets/audacity.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Js from '../assets/js.png';
import Php from '../assets/php.png';
import Figma from '../assets/figma.png';
import Walling from '../assets/walling.png';
import MagicaVoxel from '../assets/magicavoxel.png';
import Xml from '../assets/xml.png';
import Python from '../assets/python.png';
import C from '../assets/c.png';
import Cpp from '../assets/c++.png';
import AvatarWithTooltip from "../components/AvatarWithTooltip.jsx";

function About () {

    return <div>
        <div>
            <Typography variant="h1" className="text-center">À propos</Typography>
        </div>
        <Card className="flex flex-row dark:bg-zinc-800">
            <div className="h-80">
                <img src={pp} className="h-60 ml-10 my-10 rounded-lg" alt="profile-picture" />
            </div>
            <div className="flex-1 px-12 py-12">
                <Typography variant="paragraph">
                    Développeur Unity depuis près de 9 ans, j'ai travaillé sur de nombreux projets personnels. Depuis mes études en informatique, je me penche également un peu plus sur les technologies du web, les différents langages, frameworks et librairies disponibles. Je suis de nature curieuse et autodidacte.
                </Typography>
                <div className="mt-6 grid grid-cols-4 gap-2">
                    <AboutChevronDetails title="Nom" content="Yoan NOUGUÉ-RUIZ" />
                    <AboutChevronDetails title="Âge" content="yoan.nougueruiz@gmail.com" />
                    <AboutChevronDetails title="Adresse mail" content="22 ans" />
                    <AboutChevronDetails title="N° de téléphone" content="06 86 52 57 31" />
                    <AboutChevronDetails title="Ville" content="Nancy (54), Neufchâteau (88)" />
                    <AboutChevronDetails title="Diplôme" content="Licence Informatique" />
                </div>
                
            </div>
        </Card>

        <div className="mt-12">
            <Typography variant="h2" className="text-center">Parcours</Typography>

            <div className="flex justify-center gap-16 mt-16">
                <div className={""}>
                    <Timeline>
                        <TimelineElement
                            type="studies"
                            time={"2023 à aujourd'hui"}
                            title="Master Informatique"
                            place="Faculté des Sciences et Technologies - Vandœuvre-lès-Nancy (54547)"
                        />
                        <TimelineElement
                            type="diploma"
                            time={"2023"}
                            title="Licence Informatique"
                            place="Faculté des Sciences et Technologies - Vandœuvre-lès-Nancy (54547)"
                        />
                        <TimelineElement
                            type="job"
                            time={"2023"}
                            title="Stage"
                            place="Institut Européen des Antioxydants - Neuves-Maisons (54320)"
                            details="Continuation du dernier stage, remise à jour des technologies"
                        />
                        <TimelineElement
                            type="studies"
                            time={"2021 à 2023"}
                            title="Formation en Licence Informatique"
                            place="Faculté des Sciences et Technologies - Vandœuvre-lès-Nancy (54547)"
                        />
                        <TimelineElement
                            type="diploma"
                            time={"2021"}
                            title="Diplôme Universitaire de Technologie Informatique"
                            place="Institut Universitaire de Technologie Nancy-Charlemagne - Nancy (54000)"
                            connector={false}
                        />
                    </Timeline>
                </div>
                <div className={""}>
                    <Timeline>
                        <TimelineElement
                            type="job"
                            time={"2021"}
                            title="Stage"
                            place="Institut Européen des Antioxydants - Neuves-Maisons (54320)"
                            details="Réalisation d'une plateforme de gestion d'analyse et de rapports médicaux"
                        />
                        <TimelineElement
                            type="studies"
                            time={"2019 à 2021"}
                            title="Formation en DUT Informatique"
                            place="Institut Universitaire de Technologie Nancy-Charlemagne - Nancy (54000)"
                        />
                        <TimelineElement
                            type="diploma"
                            time={"2019"}
                            title="Baccalauréat Scientifique"
                            place="Lycée Pierre et Marie Curie - Neufchâteau (88300)"
                            details="Option Mathématiques"
                        />
                        <TimelineElement
                            type="diploma"
                            time={"2015"}
                            title="Brevet des collèges"
                            place="Collège Jeanne d'Arc - Neufchâteau (88300)"
                            details="Mention très bien"
                            connector={false}
                        />
                    </Timeline>
                </div>
            </div>
        </div>

        <div className="mt-12">
            <Typography variant="h2" className="text-center">Logiciels et technologies</Typography>

            <div className={"grid grid-cols-3 gap-y-8 mt-8"}>
                <div>
                    <Typography variant={"h4"} className={"text-center mb-3"}>Langages</Typography>
                    <div className={"flex gap-2 justify-center"}>
                        <AvatarWithTooltip tooltip={"C#"} image={CSharp}/>
                        <AvatarWithTooltip tooltip={"HTML"} image={Html}/>
                        <AvatarWithTooltip tooltip={"CSS"} image={Css}/>
                        <AvatarWithTooltip tooltip={"JavaScript"} image={Js}/>
                        <AvatarWithTooltip tooltip={"PHP"} image={Php}/>
                        <AvatarWithTooltip border={true} tooltip={"Java"} image={Java}/>
                        <AvatarWithTooltip tooltip={"XML"} image={Xml}/>
                    </div>
                    <div className={"flex gap-2 justify-center mt-2"}>
                        <AvatarWithTooltip tooltip={"Python"} image={Python}/>
                        <AvatarWithTooltip tooltip={"C"} image={C}/>
                        <AvatarWithTooltip tooltip={"C++"} image={Cpp}/>
                    </div>
                </div>
                <div>
                    <Typography variant={"h4"} className={"text-center mb-3"}>IDEs</Typography>
                    <div className={"flex gap-2 justify-center"}>
                        <AvatarWithTooltip tooltip={"Jetbrains Rider"} image={Rider}/>
                        <AvatarWithTooltip tooltip={"Jetbrains IntelliJ"} image={IntelliJ}/>
                        <AvatarWithTooltip tooltip={"Jetbrains Webstorm"} image={WebStorm}/>
                        <AvatarWithTooltip tooltip={"Jetbrains PyCharm"} image={PyCharm}/>
                        <AvatarWithTooltip tooltip={"Visual Studio Code"} image={Code}/>
                    </div>
                </div>
                <div>
                    <Typography variant={"h4"} className={"text-center mb-3"}>Modélisation & graphisme</Typography>
                    <div className={"flex gap-2 justify-center"}>
                        <AvatarWithTooltip tooltip={"GIMP"} image={Gimp}/>
                        <AvatarWithTooltip tooltip={"Blender"} image={Blender}/>
                        <AvatarWithTooltip tooltip={"Blockbench"} image={Blockbench}/>
                        <AvatarWithTooltip tooltip={"MagicaVoxel"} image={MagicaVoxel}/>
                    </div>
                </div>
                <div>
                    <Typography variant={"h4"} className={"text-center mb-3"}>Gestion et collaboration</Typography>
                    <div className={"flex gap-2 justify-center"}>
                        <AvatarWithTooltip tooltip={"Trello"} image={Trello}/>
                        <AvatarWithTooltip border={true} tooltip={"Walling"} image={Walling}/>
                        <AvatarWithTooltip tooltip={"Git"} image={Git}/>
                        <AvatarWithTooltip tooltip={"Github"} image={Github}/>
                        <AvatarWithTooltip tooltip={"GitLab"} image={Gitlab}/>
                        <AvatarWithTooltip tooltip={"Milanote"} image={Milanote}/>
                        <AvatarWithTooltip border={true} tooltip={"Plastic SCM"} image={Plastic}/>
                        <AvatarWithTooltip tooltip={"Figma"} image={Figma}/>
                    </div>
                </div>
                <div>
                    <Typography variant={"h4"} className={"text-center mb-3"}>Développement web</Typography>
                    <div className={"flex gap-2 justify-center"}>
                        <AvatarWithTooltip border={true} tooltip={"Tailwind"} image={Tailwind}/>
                        <AvatarWithTooltip tooltip={"Bootstrap"} image={Bootstrap}/>
                        <AvatarWithTooltip border={true} tooltip={"Bulma"} image={Bulma}/>
                        <AvatarWithTooltip tooltip={"React"} image={React}/>
                        <AvatarWithTooltip tooltip={"Vite"} image={Vite}/>
                    </div>

                </div>
                <div>
                    <Typography variant={"h4"} className={"text-center mb-3"}>Développement de jeux-vidéos</Typography>
                    <div className={"flex gap-2 justify-center"}>
                        <AvatarWithTooltip tooltip={"Unity"} image={Unity}/>
                        <AvatarWithTooltip tooltip={"Audacity"} image={Audacity}/>
                    </div>
                </div>
            </div>

        </div>

        <div className="mt-12">
            <Typography variant="h2" className="text-center">Contact</Typography>
            <Typography variant="lead" className="text-center">Vous souhaitez me contacter? Utilisez le formulaire ci-dessous !</Typography>
            <form className="mt-8 px-96">
                <div><Input label="Nom" /></div>
                <div className="mt-4"><Input label="Adresse e-mail" type="email" /></div>
                <div className="mt-4">
                    <Select label="Raison du contact">
                        <Option>Offre d'emploi</Option>
                        <Option>Autre</Option>
                    </Select>
                </div>
                <div className="mt-4"><Textarea label="Message"/></div>
                <div className="mt-4"><Button>Envoyer</Button></div>
            </form>
        </div>
    </div>
}
export default About