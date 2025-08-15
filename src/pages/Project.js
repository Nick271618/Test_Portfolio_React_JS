import gitHubIcon from "./../img/icons/gitHub-black.svg";

import { useParams } from "react-router-dom";

import { projects } from "../helpers/projectsList";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
    <main class="section">
        <div class="container">
            <div class="project-details">

                <h1 class="title-1">{project.title}</h1>

                <img src={project.imgBig} alt={project.title} class="project-details__cover" />

                <div class="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

                <a href="#!" class="btn-outline">
                    <img src={gitHubIcon} alt="" />
                    GitHub repo
                </a>

            </div>
        </div>
    </main>
    );
}

export default Project;