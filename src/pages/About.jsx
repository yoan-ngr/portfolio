import { Avatar, Button, Card, Input, Option, Select, Textarea, Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Tooltip, Typography } from "@material-tailwind/react"
import pp from '../assets/pp.jpg'
import {ChevronRightIcon} from '@heroicons/react/24/outline';
import {HomeIcon, AcademicCapIcon, BriefcaseIcon, BookOpenIcon, } from '@heroicons/react/24/solid';
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

function About () {

    return <div>
        <div>
            <Typography variant="h1" className="text-center">À propos</Typography>
        </div>
        <Card className="flex flex-row">
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

            <div className="w-3/5 mx-auto mt-12">
                <Timeline>
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
                    />
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

        <div className="mt-12">
            <Typography variant="h2" className="text-center">Logiciels et technologies</Typography>
            <Typography className="text-center">
                <ul className="">
                    <li className="line-through">Unity</li>
                    <li className="line-through">GIMP</li>
                    <li>Audacity</li>
                    <li>Blender</li>
                    <li className="line-through">Blockbench</li>
                    <li>Visual Studio Code</li>
                    <li className="line-through">Rider</li>
                    <li className="line-through">IntelliJ</li>
                    <li className="line-through">C#</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li className="line-through">Webstorm</li>
                    <li className="line-through">Bootstrap</li>
                    <li className="line-through">Bulma</li>
                    <li>Vite</li>
                    <li className="line-through">Tailwind</li>
                    <li>Git / Github / Gitlab</li>
                    <li>Plastic SCM</li>
                    <li className="line-through">Trello</li>
                    <li className="line-through">Milanote</li>
                    <li>Walling</li>
                </ul>
            </Typography>
            
            <span>
                <Tooltip content="Unity" placement="bottom">
                    <Avatar src={Unity} variant="rounded" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="GIMP" placement="bottom">
                    <Avatar src={Gimp} variant="rounded" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Tailwind" placement="bottom">
                    <Avatar src={Tailwind} variant="rounded" className="border" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="C#" placement="bottom">
                    <Avatar src={CSharp} variant="rounded" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Jetbrains Rider" placement="bottom">
                    <Avatar src={Rider} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Jetbrains IntelliJ" placement="bottom">
                    <Avatar src={IntelliJ} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Jetbrains Webstorm" placement="bottom">
                    <Avatar src={WebStorm} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Jetbrains PyCharm" placement="bottom">
                    <Avatar src={PyCharm} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Blockbench" placement="bottom">
                    <Avatar src={Blockbench} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Trello" placement="bottom">
                    <Avatar src={Trello} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Milanote" placement="bottom">
                    <Avatar src={Milanote} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Bootstrap" placement="bottom">
                    <Avatar src={Bootstrap} variant="rounded" className="" />
                </Tooltip>
            </span>

            <span className="ml-2">
                <Tooltip content="Bulma" placement="bottom">
                    <Avatar src={Bulma} variant="rounded" className="border" />
                </Tooltip>
            </span>
        </div>

        <div className="mt-12">
            <Typography variant="h2" className="text-center">Contact</Typography>
            <Typography variant="lead" className="text-center">Vous souhaitez me contacter? Utilisez le formulaire ci-dessous !</Typography>
            <form className="mt-8 px-96">
                <div><Input label="Nom" /></div>
                <div className="mt-4"><Input label="Adresse e-mail" type="mail" /></div>
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