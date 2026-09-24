import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "AWS",
    "Terraform",
    "AWS CDK",
    "CloudFormation",
    "IAM",
    "VPC",
    "EC2",
    "ECS",
    "Lambda",
    "S3",
    "CloudWatch"
];

const labelsSecond = [
    "GitHub Actions",
    "Jenkins",
    "GitLab CI",
    "Docker",
    "Kubernetes",
    "ECR",
    "Linux",
    "Python",
    "Bash",
    "Shell Scripting"
];

const labelsThird = [
    "AWS Organizations",
    "Microsoft Active Directory",
    "Wiz",
    "Security Governance",
    "Cross-Account Access",
    "AWS Systems Manager",
    "Aurora MySQL",
    "AWS Glue"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Cloud Platform Engineering</h3>
                    <p>I design and automate secure AWS platforms with a focus on lifecycle management, governance, identity access, networking, and scalable deployment workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I implement CI/CD pipelines, infrastructure automation, and deployment standardization to improve reliability, consistency, and platform delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Security & Governance</h3>
                    <p>I work on strong security controls, cross-account access patterns, AWS Organizations, platform security governance, and operational visibility across cloud environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;