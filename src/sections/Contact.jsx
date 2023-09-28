import {Button, Input, Option, Select, Textarea, Typography} from "@material-tailwind/react";
import React from "../assets/technos/react.png";

function Contact () {
    return <div className="mt-12">
        <Typography variant="h2" className="text-center dark:text-blue-gray-100">Contact</Typography>
        <Typography variant="lead" className="text-center dark:text-blue-gray-100">Vous souhaitez me contacter? Utilisez le formulaire ci-dessous !</Typography>
        <form className="mt-8 px-96">
            <div><Input label="Nom" /></div>
            <div className="mt-4"><Input label="Adresse e-mail" type="email" /></div>
            <div className="mt-4">
                <Select label="Raison du contact">
                    <Option>Question</Option>
                    <Option>Mission en freelance</Option>
                    <Option>Proposition de collaboration</Option>
                    <Option>Offre d'emploi</Option>
                    <Option>Autre</Option>
                </Select>
            </div>
            <div className="mt-4"><Textarea label="Message"/></div>
            <Typography className="text-gray-600" variant="small">Tous les champs sont obligatoires.</Typography>
            <div className="mt-4"><Button>Envoyer</Button></div>
        </form>
    </div>
}

export default Contact;