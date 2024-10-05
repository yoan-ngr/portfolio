import {Typography} from "@material-tailwind/react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function NavList() {
    
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                <AnchorLink href="#home">Accueil</AnchorLink>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                <AnchorLink offset='125' href="#portfolio">Portfolio</AnchorLink>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                <AnchorLink offset='125' href="#about">À propos</AnchorLink>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="p-1 font-medium dark:text-blue-gray-100"
            >
                <AnchorLink offset='125' href="#contact">Contact</AnchorLink>
            </Typography>
        </ul>
    );
}

export default NavList;