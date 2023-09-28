import {ChevronRightIcon} from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';

function AboutChevronDetails (props){
    return <><span className="flex flex-row">
        <ChevronRightIcon className="h-6 text-blue-500" /> <span className="font-bold ml-2 mr-6 dark:text-zinc-50">{props.title}</span>
    </span>
    <Typography className="dark:text-zinc-300">{props.content}</Typography></>
}

export default AboutChevronDetails;