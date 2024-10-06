import { TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import {AcademicCapIcon, BriefcaseIcon, BookOpenIcon, } from '@heroicons/react/24/solid';

function TimelineElement (props) {
    return <TimelineItem>
        {props.connector === true || props.connector === undefined && <TimelineConnector />}
        <TimelineHeader>
            <TimelineIcon className={"p-2 " + (props.type === "job" ? "bg-light-green-500" : props.type === "studies" ? "bg-orange-500" :  "bg-blue-500")}>
                {
                    props.type === "diploma" ? <AcademicCapIcon className="h-4 w-4" /> :
                    props.type === "job" ? <BriefcaseIcon className="h-4 w-4" /> :
                    <BookOpenIcon className="h-4 w-4" />
                }
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray" className="dark:text-blue-gray-200 text-sm sm:text-base">
                {props.time} - {props.title}
            </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 dark:text-gray-500">
                {props.details}{props.details !== undefined && <br />}
                {props.place}
            </Typography>
        </TimelineBody>
    </TimelineItem>
}

export default TimelineElement;