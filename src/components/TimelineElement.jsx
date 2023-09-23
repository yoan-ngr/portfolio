import { TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import {AcademicCapIcon, BriefcaseIcon, BookOpenIcon, } from '@heroicons/react/24/solid';

function TimelineElement (props) {
    return <TimelineItem>
        {props.connector == true || props.connector == undefined && <TimelineConnector />}
        <TimelineHeader>
            <TimelineIcon className={"p-2 " + (props.type == "job" ? "bg-light-green-500" : props.type == "studies" ? "bg-orange-500" :  "")}>
                {
                    props.type == "diploma" ? <AcademicCapIcon className="h-4 w-4" /> : 
                    props.type == "job" ? <BriefcaseIcon className="h-4 w-4" /> :
                    <BookOpenIcon className="h-4 w-4" />
                }
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
                {props.time} - {props.title}
            </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
                {props.details}{props.details != undefined && <br />}
                {props.place}
            </Typography>
        </TimelineBody>
    </TimelineItem>
}

export default TimelineElement;