import { Typography } from "@material-tailwind/react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Footer () {

    let date = new Date();

    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t bg-blue-gray-50 dark:bg-zinc-800 px-6 dark:border-zinc-800 border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal dark:text-blue-gray-100">
                &copy; {date.getFullYear()} Yoan Nougué-Ruiz.
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        color="blue-gray"
                        className="font-normal transition-colors dark:text-gray-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        <AnchorLink href="#home">Accueil</AnchorLink>
                    </Typography>
                </li>
                <li>
                    <Typography
                        color="blue-gray"
                        className="font-normal transition-colors dark:text-gray-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        <AnchorLink offset='125' href="#portfolio">Portfolio</AnchorLink>
                    </Typography>
                </li>
                <li>
                    <Typography
                        color="blue-gray"
                        className="font-normal transition-colors dark:text-gray-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        <AnchorLink offset='125' href="#about">À propos</AnchorLink>
                    </Typography>
                </li>
                <li>
                    <Typography
                        color="blue-gray"
                        className="font-normal transition-colors dark:text-gray-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer"
                    >
                        <AnchorLink offset='125' href="#contact">Contact</AnchorLink>
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;