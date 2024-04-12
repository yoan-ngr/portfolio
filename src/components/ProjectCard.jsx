import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip, DialogFooter, DialogBody, DialogHeader, Dialog, Carousel, IconButton,
} from "@material-tailwind/react";

import {EyeIcon} from '@heroicons/react/24/solid';
import {InformationCircleIcon, XMarkIcon} from '@heroicons/react/24/outline';
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
                <div className="flex gap-1 mb-2">
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
            <CardFooter className="flex items-center justify-between">
            
                <Typography className="font-normal dark:text-zinc-400">{props.date}</Typography>
                <Button variant="gradient" className="flex items-center gap-3" onClick={handleOpen}>
                    <EyeIcon strokeWidth={2} className="h-5 w-5" />En savoir plus
                </Button>
            </CardFooter>

            <Dialog open={open} handler={handleOpen} className="dark:bg-zinc-800 h-[42rem] overflow-y-scroll" size={"lg"}>
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
                                <div className="flex gap-1">
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
                    <Typography variant="h4" className="my-3 dark:text-zinc-300">Description</Typography>
                    <span>{props.description}</span>
                    <Typography variant="h4" className="mt-3 mb-6 dark:text-zinc-300">Galerie</Typography>
                    <Carousel loop={true} autoplay={true} className="rounded-xl" navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )} prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                              nextArrow={({ handleNext }) => (
                                  <IconButton
                                      variant="text"
                                      color="white"
                                      size="lg"
                                      onClick={handleNext}
                                      className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                  >
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={2}
                                          stroke="currentColor"
                                          className="h-6 w-6"
                                      >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                          />
                                      </svg>
                                  </IconButton>
                              )}>
                        <img
                            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover object-center"
                        />
                    </Carousel>
                    <br/>
                    {props.link !== undefined && <Typography>Vous pouvez découvrir le projet en cliquant sur le bouton "consulter"
                        ci-dessous.</Typography>}
                </DialogBody>
                <DialogFooter>
                    {
                        props.link !== undefined &&
                        <a className="mr-3" href={props.link} target="_blank" rel="external">
                            <Button variant="gradient" color="green" className="flex items-center gap-2"
                                    onClick={handleOpen}>
                                <InformationCircleIcon strokeWidth={2} className="h-5 w-5"/><span>Consulter</span>
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