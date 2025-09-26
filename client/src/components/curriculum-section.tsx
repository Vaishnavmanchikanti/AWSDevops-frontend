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
    title: "AWS CLOUD FUNDAMENTALS",
    description: [
      "Introduction to Cloud Computing – Basics, benefits, and use cases",
      "AWS Global Infrastructure – Regions, Availability Zones, Edge Locations",
      "Free Tier Setup – Create AWS account & explore free-tier services",
    ],
  },
  {
    number: 2,
    title: "IDENTITY & ACCESS MANAGEMENT (IAM)",
    description: [
      "IAM Users, Groups, Roles, and Policies",
      "IAM Identity Centre (SSO) – Centralised access management",
    ],
  },
  {
    number: 3,
    title: "COMPUTE SERVICES",
    description: [
      "EC2 Basics – Launching instances & understanding instance types",
      "Launch Templates – Preconfigure instance settings",
      "Reserved Instances & Spot Requests – Cost optimisation strategies",
    ],
  },
  {
    number: 4,
    title: "EBS (ELASTIC BLOCK STORE)",
    description: [
      "Volumes – Creating, attaching, resizing",
      "Snapshots – Backups & restores",
      "Lifecycle Manager – Automating EBS snapshot management",
    ],
  },
  {
    number: 5,
    title: "STORAGE SERVICES",
    description: [
      "S3 Buckets – Creation & configuration",
      "Storage Classes – Standard, IA, Glacier, One Zone-IA",
      "Replication – Cross-region & same-region replication",
      "Lifecycle Policies – Automating object transitions & expiration",
    ],
  },
  {
    number: 6,
    title: "NETWORKING (THEORY)",
    description: [
      "VPC – Overview and components",
      "Subnets – Public vs Private",
      "Route Tables – Control traffic flow",
      "Internet Gateway & NAT Gateway – Internet access options",
      "Security Groups & NACLs – Controlling inbound/outbound traffic",
    ],
  },
  {
    number: 7,
    title: "NETWORKING (HANDS-ON)",
    description: [
      "Practical VPC Setup – Create VPC, subnets, route tables, IGW, and test connectivity",
    ],
  },
  {
    number: 8,
    title: "LOAD BALANCING (PART 1)",
    description: [
      "Load Balancers – Introduction",
      "Configure 1 type of Load Balancer (e.g., Application Load Balancer)",
    ],
  },
  {
    number: 9,
    title: "LOAD BALANCING (PART 2)",
    description: [
      "Deep dive into 2 additional Load Balancer types (NLB, Gateway LB)",
    ],
  },
  {
    number: 10,
    title: "MONITORING & LOGGING",
    description: [
      "CloudWatch – Metrics, alarms, dashboards (theory + hands-on)",
    ],
  },
  {
    number: 11,
    title: "SERVERLESS COMPUTING",
    description: [
      "AWS Lambda – Functions, triggers, execution role",
    ],
  },
  {
    number: 12,
    title: "EVENT-DRIVEN ARCHITECTURE",
    description: [
      "EventBridge + SNS + Lambda – Practical demo (event-driven automation)",
    ],
  },
  {
    number: 13,
    title: "AUDITING & COST MANAGEMENT",
    description: [
      "CloudTrail Setup – Track who did what in AWS",
      "Cost Explorer – Track, analyse, and optimise costs",
    ],
  },
  {
    number: 14,
    title: "SECURITY & CONTENT DELIVERY",
    description: [
      "CloudFront (CDN) – Setup and distribution",
    ],
  },
  {
    number: 15,
    title: "SECURITY & GOVERNANCE (ADVANCED)",
    description: [
      "Amazon Inspector – Security vulnerability scanning",
      "AWS Trusted Advisor – Best practice recommendations for cost, security, and performance",
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
