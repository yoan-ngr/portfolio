import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavList() {
    
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={"/"} className="flex items-center hover:text-blue-500 transition-colors">
                Accueil
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={"/blog"} className="flex items-center hover:text-blue-500 transition-colors">
                Blog
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={"/portfolio"} className="flex items-center hover:text-blue-500 transition-colors">
                Portfolio
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to={"/about"} className="flex items-center hover:text-blue-500 transition-colors">
                    À propos
                </Link>
            </Typography>
        </ul>
    );
}

export default NavList;