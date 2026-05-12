
import { ResumeData } from './types';

export const resumeData: ResumeData = {
  personal: {
    name: "Prince Onuoha",
    title: "DevOps Engineer",
    phone: "+4915218494353",
    email: "hello@princeonuoha.com",
    residence: "Berlin, Germany",
    nationality: "German",
    website: "https://princeonuoha.vercel.app/",
    linkedin: "https://linkedin.com/in/princeonuoha",
    github: "https://github.com/princeonuoha",
    photoUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFTzBEehTKeDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670490509202?e=1779926400&v=beta&t=LBwnDxkiEzam25puf4mm6JFakNpilWVuhuK-xvrePbk"
  },
  experiences: [
    {
      company: "Oracle",
      location: "Berlin / Dusseldorf / Stuttgart, Germany",
      role: "Cloud Engineer & Technical Consultant",
      period: "September 2021 - January 2026",
      bullets: [
        "Provisioned full OCI compute, VCN networking, Object Storage, and Oracle Kubernetes Engine environments end-to-end for enterprise migration projects across regulated German public sector organisations.",
        "Executed all kubectl operations across production migration projects: cluster setup, container deployments, dependency resolution, and cutover handover for a 1,000+ staff ISO 27001-certified government data centre.",
        "Provisioned OCI infrastructure using Terraform landing zone templates for regulated enterprise environments with data residency and compliance constraints.",
        "Built Python ingestion pipeline processing PDF, Word, Excel, MP4, image, and sitemap files into structured text for a RAG-based GenAI agent deployed at a major German statutory insurance body.",
        "Resolved blocking container dependency failure by coordinating with vendor engineers, who issued a patch release to unblock a live production cutover.",
        "Delivered live cloud architecture presentations and technical demos to enterprise decision-makers in regulated industries across Germany.",
        "Holds 4 Oracle Cloud certifications: OCI 2025 Generative AI Professional, LFS458 Kubernetes Administration (Linux Foundation), OCI 2024 Architect Associate, OCI Multicloud Architect Associate."
      ]
    },
    {
      company: "IronHack",
      location: "Berlin, Germany",
      role: "DevOps & Cloud Engineering Bootcamp",
      period: "January 2026 - March 2026",
      bullets: [
        "Built full CI/CD pipelines on GitHub Actions, automating build, test, and deploy workflows across AWS EKS and Azure AKS clusters.",
        "Deployed Kubernetes workloads on EKS and AKS, extending 4 years of OKE production experience to AWS and Azure environments.",
        "Implemented end-to-end observability stack: Prometheus metrics collection, Grafana dashboards, and Azure Monitor centralised logging.",
        "Provisioned AWS infrastructure using Terraform and configured multi-host environments with Ansible playbooks."
      ]
    },
    {
      company: "Bundesanstalt fuer Materialforschung (BAM)",
      location: "Berlin, Germany",
      role: "Research Assistant",
      period: "January 2020 - April 2020",
      bullets: [
        "Processed large experimental datasets from explosion tests using Python, forming the basis of a Master thesis and peer-reviewed publications."
      ]
    }
  ],
  abilities: [
    {
      title: "Cloud Infrastructure (AWS, OCI, Azure)",
      bullets: [
        "4+ years of experience in provisioning and operating cloud infrastructure across compute, networking, storage, and IAM on OCI, AWS, and Azure.",
        "Managed VCN and VPC networking, IAM policies, and storage tiers across regulated multi-cloud enterprise deployments."
      ]
    },
    {
      title: "Container Orchestration (Kubernetes)",
      bullets: [
        "4+ years of experience in deploying, operating, and troubleshooting Kubernetes clusters across OKE, EKS, and AKS.",
        "Executed production migration cutovers with full kubectl ownership: cluster setup, container deployments, and service handover."
      ]
    },
    {
      title: "Infrastructure as Code (Terraform)",
      bullets: [
        "4+ years of experience in provisioning cloud infrastructure using Terraform across OCI and AWS environments.",
        "Adapted OCI Terraform landing zone templates for regulated enterprise deployments in the German public sector."
      ]
    },
    {
      title: "Monitoring & Observability (Prometheus, Grafana)",
      bullets: [
        "1+ year of experience in implementing observability stacks using Prometheus, Grafana, and Azure Monitor on production-grade platforms.",
        "Configured metrics scraping, Grafana dashboards, and centralised log aggregation on the Expensy DevOps platform."
      ]
    }
  ],
  education: [
    {
      institution: "Otto-von-Guericke-Universität",
      location: "Magdeburg, Germany",
      degree: "Process Safety and Environmental Engineering (MSC)",
      period: "2018 - 2020"
    },
    {
      institution: "University of Lagos",
      location: "Lagos, Nigeria",
      degree: "Petroleum and Gas Engineering (BSC)",
      period: "2010 - 2015"
    }
  ],
  projects: [
    {
      company: "IronHack",
      title: "Expensy DevOps Platform",
      scope: "Full-stack expense tracking application deployed on Azure Kubernetes Service with end-to-end CI/CD, observability, and security hardening.",
      bullets: [
        "Stack: AKS, GitHub Actions, Prometheus, Grafana, Azure Monitor, Azure RBAC, Trivy, cert-manager",
        "Outcome: Production-grade DevOps platform with full observability stack and automated deployment pipeline."
      ]
    },
    {
      company: "IronHack",
      title: "Cloud-Native Voting App on AWS EKS",
      scope: "Five-microservice application deployed on AWS EKS with a full GitHub Actions CI/CD pipeline, Cloudflare DNS, and NGINX Ingress.",
      bullets: [
        "Stack: EKS, GitHub Actions, NGINX Ingress, Cloudflare DNS, Python Flask, Node.js, .NET Core, Redis, PostgreSQL",
        "Outcome: Publicly accessible multi-service application with zero-touch automated deployment."
      ]
    },
    {
      company: "Oracle",
      title: "ConceptBoard Migration — Hessische Zentrale für Datenverarbeitung",
      scope: "On-premises ConceptBoard deployment migrated to OKE on OCI for a 1,000+ staff ISO 27001-certified government data centre.",
      bullets: [
        "Stack: OKE, kubectl, OCI compute, VCN networking, Terraform, production cutover, vendor coordination",
        "Outcome: Successful migration with all services operational on OCI and handed over to the customer IT team."
      ]
    }
  ],
  crossFunctional: {
    title: "Cross-Functional Ownership & Enablement",
    bullets: [
      "Acted as primary escalation point for production migration issues at Oracle, coordinating directly with vendor engineering teams and senior consultants to resolve blocking failures during live government cutovers.",
      "Delivered live cloud architecture presentations and technical demos to enterprise decision-makers across regulated German public sector organisations.",
      "Trained technical end-users on newly deployed platforms following each migration, ensuring complete operational handover to customer IT teams.",
      "Contributed to knowledge sharing and code reviews within the engineering chapter, supporting team adoption of CI/CD automation and containerisation practices."
    ]
  },
  languages: [
    { name: "English", level: "Native" },
    { name: "German", level: "B2" }
  ],
  technicalProficiency: [
    { category: "Cloud Platforms", skills: "AWS (EC2, EKS, IAM, VPC) | OCI (Compute, VCN, OKE, Object Storage, GenAI) | Azure (AKS, RBAC, Monitor)" },
    { category: "IaC & Automation", skills: "Terraform | Ansible | Bash | Python" },
    { category: "Containers & Orchestration", skills: "Docker | Docker Compose | Kubernetes (OKE, EKS, AKS) | Helm | NGINX Ingress" },
    { category: "CI/CD & Observability", skills: "GitHub Actions | Prometheus | Grafana | Azure Monitor | Trivy | SonarQube" },
  ],
  references: [
    {
      name: "Tobias Deml",
      role: "Technical Lead Cloud Infrastructure",
      company: "Oracle",
      linkedin: "https://www.linkedin.com/in/tdeml/"
    },
    {
      name: "Stefan Spitzer",
      role: "Head of Scientific Research",
      company: "European Institute for Innovation - Technology",
      linkedin: "https://www.linkedin.com/in/stefan-spitzer-b99573186/"
    }
  ]
};
