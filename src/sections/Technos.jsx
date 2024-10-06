import {Typography} from "@material-tailwind/react";
import AvatarWithTooltip from "../components/AvatarWithTooltip.jsx";
import CSharp from "../assets/technos/csharp.png";
import Html from "../assets/technos/html.png";
import Css from "../assets/technos/css.png";
import Js from "../assets/technos/js.png";
import Php from "../assets/technos/php.png";
import Java from "../assets/technos/java.png";
import Xml from "../assets/technos/xml.png";
import Python from "../assets/technos/python.png";
import C from "../assets/technos/c.png";
import Cpp from "../assets/technos/c++.png";
import Rider from "../assets/technos/rider.png";
import IntelliJ from "../assets/technos/intellij.png";
import WebStorm from "../assets/technos/webstorm.png";
import PyCharm from "../assets/technos/pycharm.png";
import Code from "../assets/technos/code.png";
import Gimp from "../assets/technos/gimp.png";
import Blender from "../assets/technos/blender.png";
import Blockbench from "../assets/technos/blockbench.png";
import MagicaVoxel from "../assets/technos/magicavoxel.png";
import Trello from "../assets/technos/trello.png";
import Walling from "../assets/technos/walling.png";
import Git from "../assets/technos/git.png";
import Github from "../assets/technos/github.png";
import Gitlab from "../assets/technos/gitlab.png";
import Milanote from "../assets/technos/milanote.png";
import Plastic from "../assets/technos/plastic.png";
import Figma from "../assets/technos/figma.png";
import Tailwind from "../assets/technos/tailwind.png";
import Bootstrap from "../assets/technos/bootstrap.png";
import Bulma from "../assets/technos/bulma.png";
import React from "../assets/technos/react.png";
import Vite from "../assets/technos/vite.png";
import Unity from "../assets/technos/unity.png";
import Audacity from "../assets/technos/audacity.png";

function Technos () {
    return <div className="mt-12">
        <Typography variant="h2" className="text-center dark:text-zinc-50">Logiciels et technologies</Typography>

        <div className={"lg:grid lg:grid-cols-3 gap-y-8 mt-8 flex flex-col"}>
            <div>
                <Typography variant={"h4"} className={"text-center mb-3 dark:text-zinc-50"}>Langages</Typography>
                <div className={"flex gap-2 justify-center flex-wrap w-3/5 mx-auto lg:w-full"}>
                    <AvatarWithTooltip tooltip={"C#"} image={CSharp}/>
                    <AvatarWithTooltip tooltip={"HTML"} image={Html}/>
                    <AvatarWithTooltip tooltip={"CSS"} image={Css}/>
                    <AvatarWithTooltip tooltip={"JavaScript"} image={Js}/>
                    <AvatarWithTooltip tooltip={"PHP"} image={Php}/>
                    <AvatarWithTooltip border={true} tooltip={"Java"} image={Java}/>
                    <AvatarWithTooltip tooltip={"XML"} image={Xml}/>
                    <AvatarWithTooltip tooltip={"Python"} image={Python}/>
                    <AvatarWithTooltip tooltip={"C"} image={C}/>
                    <AvatarWithTooltip tooltip={"C++"} image={Cpp}/>
                </div>
            </div>
            <div>
                <Typography variant={"h4"} className={"text-center mb-3 dark:text-zinc-50"}>IDEs</Typography>
                <div className={"flex gap-2 justify-center flex-wrap w-3/5 mx-auto lg:w-full"}>
                    <AvatarWithTooltip tooltip={"Jetbrains Rider"} image={Rider}/>
                    <AvatarWithTooltip tooltip={"Jetbrains IntelliJ"} image={IntelliJ}/>
                    <AvatarWithTooltip tooltip={"Jetbrains Webstorm"} image={WebStorm}/>
                    <AvatarWithTooltip tooltip={"Jetbrains PyCharm"} image={PyCharm}/>
                    <AvatarWithTooltip tooltip={"Visual Studio Code"} image={Code}/>
                </div>
            </div>
            <div>
                <Typography variant={"h4"} className={"text-center mb-3 dark:text-zinc-50"}>Modélisation & graphisme</Typography>
                <div className={"flex gap-2 justify-center flex-wrap w-3/5 mx-auto lg:w-full"}>
                    <AvatarWithTooltip tooltip={"GIMP"} image={Gimp}/>
                    <AvatarWithTooltip tooltip={"Blender"} image={Blender}/>
                    <AvatarWithTooltip tooltip={"Blockbench"} image={Blockbench}/>
                    <AvatarWithTooltip tooltip={"MagicaVoxel"} image={MagicaVoxel}/>
                </div>
            </div>
            <div>
                <Typography variant={"h4"} className={"text-center mb-3 dark:text-zinc-50"}>Gestion et collaboration</Typography>
                <div className={"flex gap-2 justify-center flex-wrap w-3/5 mx-auto lg:w-full"}>
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
                <Typography variant={"h4"} className={"text-center mb-3 dark:text-zinc-50"}>Développement web</Typography>
                <div className={"flex gap-2 justify-center flex-wrap w-3/5 mx-auto lg:w-full"}>
                    <AvatarWithTooltip border={true} tooltip={"Tailwind"} image={Tailwind}/>
                    <AvatarWithTooltip tooltip={"Bootstrap"} image={Bootstrap}/>
                    <AvatarWithTooltip border={true} tooltip={"Bulma"} image={Bulma}/>
                    <AvatarWithTooltip tooltip={"React"} image={React}/>
                    <AvatarWithTooltip tooltip={"Vite"} image={Vite}/>
                </div>

            </div>
            <div>
                <Typography variant={"h4"} className={"text-center mb-3 dark:text-zinc-50"}>Développement de jeux-vidéos</Typography>
                <div className={"flex gap-2 justify-center flex-wrap w-3/5 mx-auto lg:w-full"}>
                    <AvatarWithTooltip tooltip={"Unity"} image={Unity}/>
                    <AvatarWithTooltip tooltip={"Audacity"} image={Audacity}/>
                </div>
            </div>
        </div>
    </div>
}

export default Technos;