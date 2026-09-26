import React from "react";
import Chip from '@mui/material/Chip';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SecurityIcon from '@mui/icons-material/Security';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "AWS",
    "Azure",
    "Cloud Architecture",
    "Cloud Migration",
    "Cloud Networking",
    "Infrastructure as Code",
    "Terraform",
    "TFE",
    "AWS CDK",
    "CloudFormation"
];

const labelsSecond = [
    "CI/CD",
    "Git",
    "GitHub Actions",
    "Jenkins",
    "GitLab CI",
    "Docker",
    "Kubernetes",
    "ECS",
    "ECR",
    "Python",
    "Bash",
    "PowerShell",
    "Linux",
    "Shell Scripting",
    "AWS DevOps Agent"
];

const labelsThird = [
    "IAM",
    "AWS Organizations",
    "AWS Identity Center",
    "Microsoft Active Directory",
    "AWS SCP",
    "AWS Config",
    "AWS Systems Manager",
    "Wiz",
    "Cross-Account Access",
    "Security Governance"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <CloudQueueIcon className="skill-icon" />
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
                    <SettingsSuggestIcon className="skill-icon" />
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
                    <SecurityIcon className="skill-icon" />
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