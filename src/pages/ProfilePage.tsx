import React, { useEffect } from "react";
import profileImage from '../assets/images/profile-photo.png';
import daBadge from '../assets/images/da.cropped.png';
import saBadge from '../assets/images/sa.cropped.png';
import cpBadge from '../assets/images/cp.cropped.png';

const profileSummary = "Platform Engineer with 5 years of experience in AWS cloud infrastructure, platform engineering, DevOps and cloud security. Experienced in designing and automating secure, scalable AWS platforms using AWS CDK, Terraform, CloudFormation and CI/CD. Strong experience across AWS Identity and Access Management, Microsoft Active Directory, AWS Organizations, cross-account access, networking, infrastructure automation and deployment governance. Hands-on experience with AWS ECS, EC2, Lambda, VPC, CloudWatch, S3 and AWS Glue, with a focus on security, reliability and operational efficiency. Experienced in cloud migration, platform modernization and cost optimization, including delivering 30-40% cost reduction across S3 and CloudWatch Logs.";

const skillGroups = [
  {
    title: "Cloud & Platform Engineering",
    items: [
      "Cloud Infrastructure",
      "Platform Engineering",
      "AWS Architecture",
      "Cloud Migration",
      "High Availability",
      "Scalability",
      "Reliability"
    ]
  },
  {
    title: "Infrastructure Automation",
    items: [
      "Infrastructure as Code",
      "Infrastructure Provisioning",
      "Deployment Automation",
      "Platform Automation",
      "Configuration Management"
    ]
  },
  {
    title: "DevOps & CI/CD",
    items: [
      "CI/CD",
      "Continuous Delivery",
      "Release Automation",
      "Build & Deployment Automation",
      "Pipeline Design"
    ]
  },
  {
    title: "Security & Identity",
    items: [
      "Cloud Security",
      "Identity & Access Management",
      "Security Governance",
      "Access Control",
      "Cross-Account Access",
      "Infrastructure Security"
    ]
  },
  {
    title: "Networking",
    items: [
      "AWS Networking",
      "VPC Architecture",
      "Network Security",
      "Load Balancing",
      "Cloud Connectivity"
    ]
  },
  {
    title: "Containers & Application Platforms",
    items: [
      "Containerization",
      "Container Orchestration",
      "Application Modernization",
      "Microservices Deployment"
    ]
  },
  {
    title: "Operations & Observability",
    items: [
      "Production Support",
      "Infrastructure Troubleshooting",
      "Monitoring",
      "Logging",
      "Incident Troubleshooting",
      "Operational Automation"
    ]
  }
];

const tools = [
  {
    title: "Cloud & AWS",
    items: [
      "AWS",
      "EC2",
      "ECS",
      "ECR",
      "VPC",
      "IAM",
      "Lambda",
      "S3",
      "CloudWatch",
      "SSM",
      "Route 53",
      "DynamoDB",
      "Aurora MySQL",
      "AWS Glue",
      "AWS Organizations"
    ]
  },
  {
    title: "Infrastructure as Code",
    items: [
      "AWS CDK",
      "Terraform",
      "Terraform Enterprise (TFE)",
      "CloudFormation"
    ]
  },
  {
    title: "CI/CD",
    items: [
      "GitHub Actions",
      "AWS CodeBuild",
      "CodePipeline",
      "CodeDeploy",
      "Jenkins",
      "GitLab CI",
      "Azure DevOps"
    ]
  },
  {
    title: "Security & Identity",
    items: [
      "Microsoft Active Directory",
      "Wiz"
    ]
  },
  {
    title: "Containers & Development",
    items: [
      "Docker",
      "Kubernetes",
      "Python",
      "Linux",
      "Bash"
    ]
  },
  {
    title: "Version Control",
    items: [
      "GitHub",
      "GitLab",
      "AWS CodeCommit"
    ]
  },
  {
    title: "Platform & Observability",
    items: [
      "Observe",
      "Temporal",
      "Secrets Manager",
      "ALB"
    ]
  }
];

const certificates = [
  {
    title: "AWS Certified Developer - Associate",
    image: daBadge,
    url: "https://www.credly.com/badges/57acb698-553e-4404-8250-c891c731bc4b/linked_in_profile"
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    image: saBadge,
    url: "https://www.credly.com/badges/19d72222-f6f0-4072-8a98-6186b8fe04e3/linked_in_profile"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: cpBadge,
    url: "https://www.credly.com/badges/7a2e3525-8b0f-4d40-853b-956b8bd26a1c/linked_in_profile"
  }
];

const education = [
  {
    degree: "B.Tech",
    institution: "Bhilai Institute of Technology, Durg",
    year: "2020"
  },
  {
    degree: "HSC",
    institution: "Oriental Public School, Ambikapur",
    year: "2015"
  }
];

const experienceEntries = [
  {
    company: "Commonwealth Bank of Australia",
    role: "Platform Engineer",
    period: "Apr 2025 - Present | Bengaluru, India",
    projects: [
      {
        name: "AWS Deployment Security Validation",
        bulletPoints: [
          "Designed and developed an AWS CloudFormation Hook with a Lambda backend to validate AWS resources against security and governance controls during deployment.",
          "Implemented deployment-time validation to allow or block infrastructure deployments based on compliance requirements.",
          "Integrated security evaluation tooling such as Wiz into the platform security workflow."
        ],
        tech: "CloudFormation, Lambda, IAM, Wiz, AWS Organizations, Python"
      },
      {
        name: "EC2 Bootstrap Automation",
        bulletPoints: [
          "Developed automated EC2 bootstrapping for AWS workloads.",
          "Automated Microsoft Active Directory domain joining, CloudWatch configuration and SSM setup.",
          "Automated instance profile configuration when required during provisioning."
        ],
        tech: "EC2, Microsoft Active Directory, SSM, CloudWatch, IAM, Lambda"
      },
      {
        name: "AWS Landing Zone Lifecycle",
        bulletPoints: [
          "Contributed to the redesign of the AWS Landing Zone lifecycle covering account provisioning, governance, security controls and deployment automation.",
          "Improved standardization and automation across the AWS platform lifecycle."
        ],
        tech: "AWS Organizations, IAM, CloudFormation, TFE, AWS CDK, GitHub Actions"
      },
      {
        name: "AWS Cost Optimization",
        bulletPoints: [
          "Contributed to organization-wide AWS cost optimization initiatives.",
          "Achieved approximately 30-40% cost reduction across S3 and CloudWatch Logs."
        ],
        tech: "S3, CloudWatch, AWS Cost Optimization"
      }
    ],
    responsibilities: [
      "Engineer and support the AWS platform with a focus on Identity, Security, Governance and Platform Engineering.",
      "Manage Microsoft Active Directory integration, IAM and cross-account access.",
      "Support AWS networking and infrastructure automation.",
      "Build and maintain deployment automation using TFE, CloudFormation, CodeBuild and GitHub Actions.",
      "Work with Wiz, Observe and Temporal for security and platform operations.",
      "Collaborate with Chief Engineers and senior technical stakeholders on architecture and solution design."
    ]
  },
  {
    company: "Persistent Systems Ltd.",
    role: "Lead Software Engineer",
    period: "Nov 2022 - Apr 2025 | India",
    projects: [
      {
        name: "Application Migration from On-Premises to AWS ECS",
        bulletPoints: [
          "Led migration of a PHP Laravel application from on-premises infrastructure to AWS ECS Fargate.",
          "Migrated approximately 1 TB of MySQL data to Aurora MySQL.",
          "Designed AWS infrastructure using CDK and automated container deployment using Docker, ECR and GitLab CI."
        ],
        tech: "ECS Fargate, ECR, Aurora MySQL, ALB, VPC, Secrets Manager, Docker, AWS CDK, GitLab CI"
      },
      {
        name: "CI/CD and AWS Infrastructure Automation",
        bulletPoints: [
          "Designed automated CI/CD infrastructure using AWS CDK, CodePipeline, CodeBuild and CodeDeploy.",
          "Automated JAR build and validation workflows using Maven.",
          "Built deployment and validation workflows for Spark workloads using AWS Glue and Glue Studio."
        ],
        tech: "AWS CDK, CodePipeline, CodeBuild, CodeDeploy, AWS Glue, Glue Studio, Maven"
      },
      {
        name: "Data Platform and Database Infrastructure",
        bulletPoints: [
          "Worked on bulk data loading and database infrastructure on AWS.",
          "Designed custom AMIs and infrastructure for database workloads running on EC2.",
          "Supported infrastructure provisioning, configuration and automation for data-intensive workloads."
        ],
        tech: "EC2, AMI, AWS CDK, Terraform, VPC"
      },
      {
        name: "Multi-Cloud SaaS Infrastructure",
        bulletPoints: [
          "Worked on SaaS database infrastructure across AWS, GCP and Azure.",
          "Automated infrastructure provisioning using AWS CDK and Terraform with Azure DevOps integration."
        ],
        tech: "AWS CDK, Terraform, AWS, GCP, Azure, Azure DevOps"
      }
    ],
    responsibilities: [
      "Led technical coordination and implementation across infrastructure and DevOps initiatives.",
      "Designed AWS solutions focused on automation, scalability, reliability and security.",
      "Implemented security best practices using IAM, Secrets Manager and encryption.",
      "Supported cloud migration, infrastructure provisioning and deployment automation.",
      "Collaborated with development and technical teams on solution design and implementation."
    ],
    recognition: [
      "TOP TALENT - FY24, Persistent Systems - Recognized for exceptional performance.",
      "Client Appreciation - Recognized for timely delivery and secure CI/CD and database architecture."
    ]
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant Systems Engineer",
    period: "Jan 2021 - Nov 2022 | India",
    projects: [
      {
        name: "Production Support and Application Operations",
        bulletPoints: [
          "Provided L2 production support for a billing application built using Java, Spring Boot, Oracle and AWS.",
          "Troubleshot production, ETL and API deployment and integration issues."
        ],
        tech: "Java, Spring Boot, Oracle, AWS, ETL, APIs"
      },
      {
        name: "AWS Application Deployment",
        bulletPoints: [
          "Managed application deployments on AWS EC2 using Jenkins.",
          "Supported ALB, RDS and application server scaling."
        ],
        tech: "EC2, ALB, RDS, Jenkins"
      },
      {
        name: "Deployment and Infrastructure Support",
        bulletPoints: [
          "Supported application deployment, configuration and scaling activities.",
          "Automated recurring deployment and operational activities.",
          "Troubleshot application and AWS infrastructure issues."
        ],
        tech: "AWS, EC2, RDS, ALB, Jenkins"
      }
    ],
    responsibilities: [
      "Provided L2 application and infrastructure support.",
      "Investigated and resolved application, deployment and integration issues.",
      "Supported AWS infrastructure configuration, scaling and production deployments.",
      "Collaborated with development and operations teams on deployment and troubleshooting activities."
    ],
    recognition: [
      "SPOT Award - FY22 - Recognized for professional excellence and organizational values."
    ]
  }
];

function ProfilePage() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container page-shell">
      <div className="single-page-section">
        <div className="profile-hero-block reveal">
          <div className="profile-hero-content">
            <div className="profile-hero-copy">
              <h1>Ripusudan Vishwakarma</h1>
              <p>Platform Engineer focused on AWS, cloud automation, cloud security, and developer platform work.</p>
            </div>
            <div className="profile-hero-image-wrap">
              <img src={profileImage} alt="Ripusudan Vishwakarma" className="profile-hero-image" />
            </div>
          </div>
        </div>

        <div className="profile-layout">
          <aside className="profile-sidebar">
            <div className="profile-card card-block reveal">
              <h3>Contact</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:sudan.ripu83@gmail.com">sudan.ripu83@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span>Bengaluru, India</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/sudanripu/" target="_blank" rel="noreferrer">linkedin.com/in/sudanripu</a>
                </div>
              </div>
            </div>

            <div className="profile-card card-block reveal">
              <h3>Skills</h3>
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <div className="tag-group">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="profile-card card-block reveal">
              <h3>Tools</h3>
              {tools.map((group) => (
                <div className="tool-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <div className="tag-group">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="profile-card card-block reveal">
              <h3>Certifications</h3>
              <div className="certification-grid">
                {certificates.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="certification-badge-link"
                    title={item.title}
                  >
                    <img src={item.image} alt={item.title} className="certification-badge" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <main className="profile-main">
            <div className="card-block reveal">
              <h3>Professional Summary</h3>
              <p className="lead-copy">{profileSummary}</p>
            </div>

            <div className="card-block reveal">
              <h3>Experience</h3>
              {experienceEntries.map((entry) => (
                <section className="experience-entry" key={entry.company}>
                  <div className="exp-header">
                    <div>
                      <h4>{entry.company}</h4>
                      <p className="exp-company-line"><strong>{entry.role}</strong></p>
                    </div>
                    <span className="exp-period">{entry.period}</span>
                  </div>

                  {entry.projects.map((project) => (
                    <div className="project-block" key={project.name}>
                      <h5>{project.name}</h5>
                      <ul>
                        {project.bulletPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <p className="project-tech">
                        <strong>Technologies:</strong> {project.tech}
                      </p>
                    </div>
                  ))}

                  {entry.responsibilities && (
                    <div className="project-block">
                      <h5>Other Responsibilities</h5>
                      <ul>
                        {entry.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.recognition && (
                    <div className="project-block">
                      <h5>Recognition</h5>
                      <ul>
                        {entry.recognition.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="card-block reveal">
              <h3>Education</h3>
              <div className="education-list">
                {education.map((item) => (
                  <div className="edu-item" key={item.degree}>
                    <h4>{item.degree}</h4>
                    <p>{item.institution}</p>
                    <span>{item.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
