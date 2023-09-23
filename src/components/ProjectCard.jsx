import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
    Chip,
  } from "@material-tailwind/react";

  import {
    CloudArrowUpIcon,
    ArrowLongRightIcon,
    ArrowPathIcon,
    BookmarkIcon,
  } from "@heroicons/react/24/outline";

import {EyeIcon} from '@heroicons/react/24/solid';

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
    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
            >
            <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
            />
            </CardHeader>
            <CardBody>
                <div className="flex gap-1 mb-2">
                    {
                        formatTags(props.tags).map((tag) => {
                            return <Chip color={tag.color} variant="gradient" value={tag.value} />
                        })
                    }
                </div>
                <Typography variant="h4" color="blue-gray">
                    {props.projectName}
                </Typography>
                <Typography  color="gray" className="mt-3 font-normal">
                    {props.catchphrase}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
            
                <Typography className="font-normal">{props.date}</Typography>
                <Button variant="gradient" className="flex items-center gap-3">
                    <EyeIcon strokeWidth={2} className="h-5 w-5" />En savoir plus
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;