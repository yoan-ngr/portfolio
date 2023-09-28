import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t bg-blue-gray-50 dark:bg-zinc-800 px-6 dark:border-zinc-800 border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal dark:text-blue-gray-100">
                &copy; 2023 Yoan Nougué-Ruiz.
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        Accueil
                    </Typography>
                </li>
                <li>
                    <Typography
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        Portfolio
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        À propos
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;