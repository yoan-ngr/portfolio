import {Typography} from "@material-tailwind/react";

function ProjectPortfolio () {
    return (
        <>
            <Typography variant="h4" className="my-3 dark:text-zinc-300">Description</Typography>
            <div>
                Afin de pouvoir partager mes projets et mes compétences, j'ai créé ce site, qui fait office de
                plateforme de contact, de suivi de projet et de portfolio.
                Cela m'a paru de plus un très bon moyen de s'entraîner au développement de site web moderne, à l'aide de
                frameworks relativement courants dans l'industrie.
                <Typography variant="h5" className="my-3">Technologies</Typography>
                Au niveau des technologies, j'utilise comme base le framework <a href="https://react.dev/"
                                                                                 target="_blank"
                                                                                 className="text-blue-500 hover:underline">React</a>.
                Il s'agit d'une bibliothèque JavaScript qui permet l'utilisation de composants réutilisables sur le
                site. Afin de leur donner une apparence plus élégante,
                j'utilise une bibliothèque CSS répandue sur le web aujourd'hui nommée <a href="https://tailwindcss.com/"
                                                                                         target="_blank"
                                                                                         className="text-blue-500 hover:underline">Tailwind</a>.
                Cette bibliothèque agit comme un système CSS qui utilise des classes utilitaires afin de définir le
                style d'une page ou en l'occurrence, de composants.
                Je m'en suis donc servi comme base, sur laquelle je vais utiliser une bibliothèque qui va créer des
                composants pré-faits dans le style <a href="https://m3.material.io/get-started"
                                                      target="_blank"
                                                      className="text-blue-500 hover:underline">material</a>,
                nommée <a href="https://www.material-tailwind.com/"
                          target="_blank"
                          className="text-blue-500 hover:underline">Material Tailwind</a>. Concernant les icônes, j'utilise également <a href="https://heroicons.com/"
                                                                                                                                         target="_blank"
                                                                                                                                         className="text-blue-500 hover:underline">HeroIcons</a>.
                Enfin, pour faire fonctionner le tout, j'utilise <a href="https://vitejs.dev/"
                                                                    target="_blank"
                                                                    className="text-blue-500 hover:underline">Vite</a> afin de pouvoir gérer un serveur Node
                et facilement déployer le site.
            </div>
            <br/>

        </>
    );
}

export default ProjectPortfolio;