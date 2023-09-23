import {Avatar, Tooltip} from "@material-tailwind/react";

function AvatarWithTooltip (props) {
    return <span className="ml-2">
                <Tooltip content={props.tooltip} placement="bottom">
                    <Avatar src={props.image} variant="rounded" className={props.border ? "border" : ""} />
                </Tooltip>
            </span>
}

export default  AvatarWithTooltip;