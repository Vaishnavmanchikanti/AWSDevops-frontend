import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      number: 1,
      title: "OVERVIEW OF DEVOPS",
      description: [
        "What is DevOps?",
        "DevOps Market Trends",
        "DevOps Engineer Skills",
        "DevOps Delivery Pipeline",
        "DevOps Ecosystem",
      ],
    },
    {
      number: 2,
      title: "VIRTUALIZATION",
      description: [
        "What is DevOps?",
        "DevOps Market Trends",
        "DevOps Engineer Skills",
        "DevOps Delivery Pipeline",
        "DevOps Ecosystem",
      ],
    },
    {
      number: 3,
      title: "LINUX",
      description: [
        "All-important Linux commands",
        "The Linux filesystem",
        "File permissions",
        "Process management",
        "User account management",
        "Software management",
        "Networking in Linux",
      ],
    },
    {
      number: 4,
      title: "CLOUD CONCEPTS",
      description: [
        "Cloud Computing",
        "What is virtualization?",
        "AWS Platform",
        "EC2 Instance",
        "Load Balancing",
        "EBS (Elastic Block Storage)",
        "S3 (Simple Storage Service) Storage in Cloud",
        "IAM: (Identity Access Management)",
        "Amazon Virtual Private Cloud (VPC)",
        "Dynamo DB",
        "AWS Lambda",
        "ROUTE 53",
      ],
    },
    {
      number: 5,
      title: "SHELL SCRIPT",
      description: [
        "Variables",
        "Types of variables",
        "Operators",
        "Input arguments",
        "String comparison",
        "Arithmetic comparison",
        "File conditions",
        "If, loops, case, functions",
        "Examples",
      ],
    },
    {
      number: 6,
      title: "WEB APP SERVERS CONFIGURATIONS",
      description: ["Apache webserver", "Tomcat application server"],
    },
    {
      number: 7,
      title: "VERSION CONTROL WITH GIT - DEVOPS SYLLABUS",
      description: [
        "Git Introductions",
        "Git Workflow",
        "How to setup GIT",
        "Working with various commands in GIT",
        "Recording Changes to the Repository",
        "Viewing the Commit History",
        "Undoing Things",
        "Git Forking",
        "Working with Remotes",
        "Branching and Merging in Git",
      ],
    },
    {
      number: 8,
      title: "MAVEN",
      description: [
        "Maven Installation",
        "Maven Build requirements",
        "Maven POM Builds (pom.xml)",
        "Maven Build Life Cycle",
        "Maven Local Repository (.m2)",
        "Maven Global Repository",
        "Group ID, Artifact ID, Snapshot",
        "Maven Dependencies",
        "Maven Plugin",
      ],
    },
    {
      number: 9,
      title: "SONARQUBE OVERVIEW",
      description: [
        "Installation & Configuration of SonarQube",
        "Initiate code-scan with SonarQube server",
        "SonarQube dashboard",
        "Sample project to check code scan",
        "Maven integration with SonarQube",
        "Real-time use cases on SonarQube",
      ],
    },
    {
      number: 10,
      title: "CONTINUOUS INTEGRATION — JENKINS",
      description: [
        "Introduction to Jenkins",
        "Continuous Integration with Jenkins",
        "Configure Jenkins",
        "Jenkins Management",
        "Scheduling build Jobs",
        "Jenkins Master & Slave Node Configuration",
        "Jenkins Workspace Management",
        "Securing Jenkins",
        "Jenkins Plugins",
        "Jenkins configure with below services tools",
      ],
    },
    {
      number: 11,
      title: "DOCKER",
      description: [
        "Docker Introduction",
        "What is Docker Image",
        "How to get Docker Image",
        "Docker Installation",
        "Working with Docker Containers",
        "Docker Command Line Interface",
        "Docker Compose",
        "Docker Hub",
        "Docker Trusted Registry",
        "Docker swarm",
        "Docker attach",
        "Docker File & Command",
      ],
    },
    {
      number: 12,
      title: "CONTAINERIZATION USING KUBERNETES",
      description: [
        "Revisiting Kubernetes",
        "Cluster Architecture",
        "Spinning up a Kubernetes Cluster on Ec2 VMs",
        "Exploring your Cluster",
        "Understanding YAML",
        "Creating a Deployment in Kubernetes using YAML",
        "Creating a Service in Kubernetes",
        "Installing Kubernetes Dashboard",
        "Deploying an App using Dashboard",
        "Using Rolling Updates in Kubernetes",
        "Containers and Container Orchestration",
        "Helm Charts",
        "Schedulers",
        "Metric Server deployment",
        "Kubernetes volume",
        "RBAC process",
        "Installation, Configuration and Deployment of HELM",
        "EFK STACK Configuration",
      ],
    },
    {
      number: 13,
      title: "ARGO CD",
      description: ["Installation", "Configurations"],
    },
    {
      number: 14,
      title: "CONTINUOUS MONITORING WITH GRAFANA",
      description: [
        "Introduction to Continuous Monitoring",
        "Introduction to Grafana",
        "Installing Grafana",
        "Grafana Prometheus and Objects",
        "Grafana Prometheus configure to Kubernetes",
      ],
    },
    {
      number: 15,
      title: "ANSIBLE",
      description: [
        "Introduction to Ansible",
        "Ansible Server Configuration",
        "Infrastructure Management",
        "SSH Connection in Ansible Master",
        "YAML Scripts",
        "Host Inventory",
        "Ad-hoc Commands",
        "Playbooks",
        "Core & Extra Modules",
        "Ansible Role",
      ],
    },
    {
      number: 16,
      title: "TERRAFORM",
      description: [
        "Getting started with Terraform",
        "Terraform Modules",
        "Terraform: Writing in a more organized way",
        "Terraform with AWS: lab",
        "Terraform state",
        "Terraform with AWS: Lab Part",
        "Terraform Troubleshooting and Testing",
        "Terraform Best Practices",
      ],
    },
    {
      number: 17,
      title: "PYTHON BOTO3",
      description: [
        "Introduction to Python",
        "List, Ranges & Tuples in Python",
        "Input and Output in Python",
        "Python Object Oriented",
        "Python Regular Expressions",
        "Python Necessity DevOps",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            8-Weeks Training Agenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Click each module to explore its details
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.number}
              value={`faq-${faq.number}`}
              className="border rounded-xl bg-card shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:bg-muted/50 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {faq.number}
                  </span>
                  {faq.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground text-base leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  {faq.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
