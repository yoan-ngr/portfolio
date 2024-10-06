import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip, DialogFooter, DialogBody, DialogHeader, Dialog,
} from "@material-tailwind/react";

import {EyeIcon} from '@heroicons/react/24/solid';
import {InformationCircleIcon, XMarkIcon, CodeBracketIcon} from '@heroicons/react/24/outline';
import {useState} from "react";
import NoPic from "../assets/no-pic.png";

function formatTags (tags) {
    let res = [];
    for (let i = 0; i < tags.length; i++) {
        let color = "gray";

        if(tags[i] === "web")
            color = "teal";

        if(tags[i] === "jeu-vidéo")
            color = "pink";

        if(tags[i] === "php")
            color = "purple";

        if(tags[i] === "bootstrap")
            color = "blue";

        if(tags[i] === "vue")
            color = "purple";

        if(tags[i] === "vite")
            color = "yellow";

        if(tags[i] === "tailwind")
            color = "cyan";

        if(tags[i] === "react")
            color = "orange";

        if(tags[i] === "bulma")
            color = "green";

        res.push({value : tags[i], color : color});
    }
    return res;
}
   
function ProjectCard(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <Card className="overflow-hidden dark:bg-zinc-800 flex flex-col justify-between">
            <div className="flex flex-col"><CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
            >
            <img
                src={props.src === undefined ? NoPic : props.src}
                alt="ui/ux review check"
            />
            </CardHeader>
            <CardBody>
                <div className="flex flex-wrap gap-1 mb-2">
                    {
                        formatTags(props.tags).map((tag) => {
                            return <Chip key={tag.value} color={tag.color} variant="gradient" value={tag.value} />
                        })
                    }
                </div>
                <Typography variant="h4" color="blue-gray" className="dark:text-blue-gray-100">
                    {props.projectName}
                </Typography>
                <Typography  color="gray" className="mt-3 font-normal dark:text-gray-400">
                    {props.catchphrase}
                </Typography>
            </CardBody></div>
            <CardFooter className="flex items-center justify-between gap-2">
            
                <Typography className="font-normal dark:text-zinc-400">{props.date}</Typography>
                {props.openable && <Button variant="gradient" color="blue" className="flex items-center gap-3" onClick={handleOpen}>
                    <EyeIcon strokeWidth={2} className="h-5 w-5 hidden sm:block"/>En savoir plus
                </Button>}
            </CardFooter>

            <Dialog open={open} handler={handleOpen} className="dark:bg-zinc-800 h-5/6 overflow-y-scroll" size={"xl"}>
                <DialogHeader className="dark:text-white">
                    <figure className="relative h-80 w-full">
                        <img
                            className="h-full w-full rounded-xl object-cover object-center blur-sm"
                            src={props.src === undefined ? "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80" : props.src}
                            alt="nature image"
                        />
                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white dark:bg-zinc-800/75 dark:border-zinc-800 bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <div>
                                <Typography variant="h5" color="blue-gray" className="dark:text-white">
                                    {props.projectName}
                                </Typography>
                                <Typography color="gray" className="mt-2 font-normal dark:text-gray-500">
                                    {props.date}
                                </Typography>
                            </div>
                            <Typography variant="h5" color="blue-gray">
                                <div className="flex gap-1 flex-wrap">
                                    {
                                    formatTags(props.tags).map((tag) => {
                                        return <Chip key={tag.value} color={tag.color} variant="gradient"
                                                     value={tag.value}/>
                                    })
                                }
                                </div>
                            </Typography>
                        </figcaption>
                    </figure>
                </DialogHeader>
                <DialogBody className="dark:text-zinc-400">
                    <Typography variant="lead">{props.catchphrase}</Typography>
                    {props.content}
                    {props.link !== undefined && <Typography>Vous pouvez découvrir le projet en cliquant sur le bouton "consulter"
                        ci-dessous.</Typography>}
                </DialogBody>
                <DialogFooter className="flex gap-3">
                    {
                        props.link !== undefined &&
                        <a href={props.link} target="_blank" rel="external">
                            <Button variant="gradient" color="green" className="flex items-center gap-2"
                                    onClick={handleOpen}>
                                <InformationCircleIcon strokeWidth={2} className="h-5 w-5"/><span>Consulter</span>
                            </Button>
                        </a>
                    }
                    {
                        props.github !== undefined &&
                        <a href={props.github} target="_blank" rel="external">
                            <Button variant="gradient" color="white" className="flex items-center gap-2"
                                    onClick={handleOpen}>
                                <CodeBracketIcon strokeWidth={2} className="h-5 w-5"/><span>Code source</span>
                            </Button>
                        </a>
                    }
                    <Button variant="gradient" color="blue" className="flex items-center gap-2" onClick={handleOpen}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" /><span>Fermer</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Card>
    );
}

export default ProjectCard;