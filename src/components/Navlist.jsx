import {Switch, Typography} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavList() {
    
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                Accueil
            </Typography>
            <Typography
                as="a"
                href="#portfolio"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                Portfolio
            </Typography>
            <Typography
                as="a"
                href="#about"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                À propos
            </Typography>
            <Switch/>
        </ul>
    );
}

export default NavList;