import {Timeline, Typography} from "@material-tailwind/react";
import TimelineElement from "../components/TimelineElement.jsx";

function Cursus () {
    return <div className="mt-12 px-2 sm:px-6 md:px-24">
        <Typography variant="h2" className="text-center dark:text-zinc-50">Parcours</Typography>

        <div className="lg:flex lg:justify-center lg:gap-16 mt-8 md:mt-16">
            <div className={""}>
                <Timeline>
                    <TimelineElement
                        type="studies"
                        time={"2023 à aujourd'hui"}
                        title="Master Informatique"
                        place="Faculté des Sciences et Technologies - Vandœuvre-lès-Nancy (54547)"
                    />
                    <TimelineElement
                        type="diploma"
                        time={"2023"}
                        title="Licence Informatique"
                        place="Faculté des Sciences et Technologies - Vandœuvre-lès-Nancy (54547)"
                    />
                    <TimelineElement
                        type="job"
                        time={"2023"}
                        title="Stage (15 semaines)"
                        place="Institut Européen des Antioxydants - Neuves-Maisons (54320)"
                        details="Continuation du dernier stage, remise à jour des technologies"
                    />
                    <TimelineElement
                        type="studies"
                        time={"2021 à 2023"}
                        title="Formation en Licence Informatique"
                        place="Faculté des Sciences et Technologies - Vandœuvre-lès-Nancy (54547)"
                    />
                    <TimelineElement
                        type="diploma"
                        time={"2021"}
                        title="Diplôme Universitaire de Technologie Informatique"
                        place="Institut Universitaire de Technologie Nancy-Charlemagne - Nancy (54000)"
                        connector={false}
                    />
                </Timeline>
            </div>
            <div className={""}>
                <Timeline>
                    <TimelineElement
                        type="job"
                        time={"2021"}
                        title="Stage (10 semaines)"
                        place="Institut Européen des Antioxydants - Neuves-Maisons (54320)"
                        details="Réalisation d'une plateforme de gestion d'analyse et de rapports médicaux"
                    />
                    <TimelineElement
                        type="studies"
                        time={"2019 à 2021"}
                        title="Formation en DUT Informatique"
                        place="Institut Universitaire de Technologie Nancy-Charlemagne - Nancy (54000)"
                    />
                    <TimelineElement
                        type="diploma"
                        time={"2019"}
                        title="Baccalauréat Scientifique"
                        place="Lycée Pierre et Marie Curie - Neufchâteau (88300)"
                        details="Option Mathématiques"
                    />
                    <TimelineElement
                        type="diploma"
                        time={"2015"}
                        title="Brevet des collèges"
                        place="Collège Jeanne d'Arc - Neufchâteau (88300)"
                        details="Mention très bien"
                        connector={false}
                    />
                </Timeline>
            </div>
        </div>
    </div>
}

export default Cursus;