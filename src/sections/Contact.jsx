import {Alert, Avatar, Button, Card, Input, Option, Select, Textarea, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import emailjs from '@emailjs/browser';
import {ExclamationCircleIcon} from '@heroicons/react/24/outline';
import {CheckCircleIcon} from '@heroicons/react/24/solid';
import LinkedIn from "../assets/LinkedIn_logo_initials.png";
import Github from "../assets/technos/github.png";

function Contact () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    const [success, setSuccess] = useState(0)

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validateName = (name) => {
        return name.length > 1;
    }

    const validateType = (type) => {
        return type !== "";
    }

    const validateMessage = (message) => {
        return message.length > 0;
    }

    const valid = validateName(name) && validateEmail(email) && validateType(type) && validateMessage(message);

    const handleChangeName = (e) => {
        setName(e.target.value);
        setNameValid(validateName(e.target.value));
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setEmailValid(validateEmail(e.target.value));
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
        setMessageValid(validateMessage(e.target.value));
    }



    useEffect(() => {
        emailjs.init("pLYqGt18SAkEzpekp");
    }, []);

    const sendMessage = () => {
        emailjs.send('service_mxrydtr', 'template_hrwtvpn',  {
            name: name,
            email : email,
            type : type,
            message : message
        }).then(function() {
            setSuccess(1);
            setName("");
            setEmail("");
            setType("");
            setMessage("");
        }, function(error) {
            console.log('FAILED...', error);
            setSuccess(-1);
        });
    }

    return <div className="mt-12" id="contact">
        <Card className="dark:bg-zinc-800 mt-12 shadow-lg py-8">
            <Typography variant="h2" className="text-center dark:text-blue-gray-100">Contact</Typography>
            <div className="flex mt-6 2xl:flex-row flex-col">
                <div className="2xl:w-2/3">
                    <Typography variant="lead" className="text-center dark:text-blue-gray-100 px-2">Vous souhaitez me
                        contacter directement? Utilisez le formulaire ci-dessous !</Typography>

                    <Alert
                        variant="gradient"
                        color="green"
                        className="my-3  w-3/4 md:w-2/3 xl:w-1/2 mx-auto"
                        icon={<CheckCircleIcon/>}
                        onClose={() => setSuccess(0)}
                        open={success === 1}
                    >
                        Votre message a été envoyé avec succès !
                    </Alert>

                    <Alert
                        variant="gradient"
                        color="red"
                        className="my-3 w-3/4 md:w-2/3 xl:w-1/2 mx-auto"
                        icon={<CheckCircleIcon/>}
                        onClose={() => setSuccess(0)}
                        open={success === -1}
                    >
                        Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ultérieurement, ou
                        envoyer un
                        mail directement à <a className="font-semibold hover:underline"
                                              href="mailto:yoan.nougueruiz@gmail.com">yoan.nougueruiz@gmail.com</a>.
                    </Alert>

                    <form className="mt-8 mx-6 sm:w-2/3 sm:mx-auto xl:w-2/5">
                        <div>
                            <Input label="Nom" color="blue" value={name} onChange={handleChangeName}
                                   error={!nameValid}/>
                            {
                                !nameValid && <Typography
                                    variant="small"
                                    color="red"
                                    className="mt-1 flex items-center gap-1 font-normal"
                                >
                                    <ExclamationCircleIcon className="w-5"/>
                                    Ce champ doit contenir au moins 2 caractères.
                                </Typography>
                            }
                        </div>
                        <div className="mt-4">
                            <Input error={!emailValid} color="blue" label="Adresse e-mail" type="email" value={email}
                                   onChange={handleChangeEmail}/>
                            {
                                !emailValid && <Typography
                                    variant="small"
                                    color="red"
                                    className="mt-1 flex items-center gap-1 font-normal"
                                >
                                    <ExclamationCircleIcon className="w-5"/>
                                    Cette adresse e-mail est invalide.
                                </Typography>
                            }
                        </div>
                        <div className="mt-4">
                            <Select color="blue" label="Raison du contact" value={type} onChange={(e) => setType(e)}>
                                <Option value="Question">Question</Option>
                                <Option value="Mission en freelance">Mission en freelance</Option>
                                <Option value="Proposition de collaboration">Proposition de collaboration</Option>
                                <Option value="Offre d'emploi">Offre d'emploi</Option>
                                <Option value="Autre">Autre</Option>
                            </Select>
                        </div>
                        <div className="mt-4">
                            <Textarea value={message} color="blue" onChange={handleChangeMessage} error={!messageValid}
                                      className="" label="Message"/>
                            {
                                !messageValid && <Typography
                                    variant="small"
                                    color="red"
                                    className="mb-2 flex items-center gap-1 font-normal"
                                >
                                    <ExclamationCircleIcon className="w-5"/>
                                    Ce champ est obligatoire.
                                </Typography>
                            }
                        </div>
                        <Typography className="text-gray-600" variant="small">
                            Tous les champs sont obligatoires.
                        </Typography>
                        <div className="mt-4">
                            <Button disabled={!valid} onClick={sendMessage}>Envoyer</Button>
                        </div>
                    </form>
                </div>
                <div className="2xl:w-[1px] 2xl:mx-0 mx-16 2xl:h-96 h-[1px] 2xl:my-0 my-6 bg-gray-700"/>
                <div className="2xl:w-1/3">
                    <Typography variant="lead" className="text-center dark:text-blue-gray-100 px-2">Retrouvez-moi sur
                        les réseaux !</Typography>

                    <div className="flex flex-col gap-3 pt-6 2xl:mx-12 mx-6 lg:mx-auto lg:w-1/3">
                        <div className="flex items-center gap-4 md:w-96">
                            <Avatar src={LinkedIn} alt="avatar"
                                    variant="rounded"/>
                            <div>
                                <Typography variant="h6" className="text-gray-200">LinkedIn</Typography>
                                <Typography variant="small" color="blue" className="font-normal sm:block hidden">
                                    <a href="https://www.linkedin.com/in/yoannougueruiz/" target="_blank" rel="noreferrer">
                                        https://www.linkedin.com/in/yoannougueruiz/</a>
                                </Typography>
                                <Typography variant="small" color="blue" className="font-normal sm:hidden block">
                                    <a href="https://www.linkedin.com/in/yoannougueruiz/" target="_blank" rel="noreferrer">
                                        Lien</a>
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 md:w-96">
                            <Avatar src={Github} alt="avatar"
                                    variant="rounded"/>
                            <div>
                                <Typography variant="h6" className="text-gray-200">Github</Typography>
                                <Typography variant="small" color="blue" className="font-normal sm:block hidden">
                                    <a href="https://github.com/yoan-ngr" target="_blank" rel="noreferrer">https://github.com/yoan-ngr</a>
                                </Typography>
                                <Typography variant="small" color="blue" className="font-normal sm:hidden block">
                                    <a href="https://github.com/yoan-ngr" target="_blank" rel="noreferrer">Lien</a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>


    </div>
}

export default Contact;