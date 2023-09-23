import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t bg-blue-gray-50 px-6 border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal">
                &copy; 2023 Lawk Dev.
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                        >
                            Accueil
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to={'/blog'}>
                        <Typography
                            as="a"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                        >
                            Blog
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to={'/portfolio'}>
                        <Typography
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                        >
                            Portfolio
                        </Typography>
                    </Link>
                </li>
                <li>
                    <Link to={'/about'}>
                        <Typography
                            as="a"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                        >
                            À propos
                        </Typography>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;