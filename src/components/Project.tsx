import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

const projectItems = [
    {
        title: 'AWS CloudFormation Security Governance Hook',
        description: 'Developed a CloudFormation Hook with a Lambda backend to evaluate AWS resources against security and governance controls before deployment.',
        image: mock01,
        link: '#'
    },
    {
        title: 'AWS Landing Zone Automation',
        description: 'Contributed to automation and redesign of account provisioning, configuration, and governance workflows across AWS environments.',
        image: mock02,
        link: '#'
    },
    {
        title: 'Aurora MySQL Migration',
        description: 'Migrated approximately 1 TB of MySQL data to Amazon Aurora MySQL and modernized a PHP Laravel application for AWS ECS Fargate.',
        image: mock03,
        link: '#'
    },
    {
        title: 'Platform Deployment Automation',
        description: 'Built AWS CDK, CodePipeline, and deployment automation for containerized workloads, reductions in manual provisioning, and safer production delivery.',
        image: mock04,
        link: '#'
    }
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Work</h1>
        <div className="projects-grid">
            {projectItems.map((project, index) => (
                <div className="project" key={index}>
                    <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} className="zoom" alt={project.title} width="100%"/></a>
                    <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;