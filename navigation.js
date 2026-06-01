// Navigations.js

const navigationData = [
  {
    id: "domain-1",
    title: "Domain 1 – Information Systems Auditing Process",
    sections: [
      {
        id: "1.3",
        title: "IS Audit Risk & Assessment",
        subsections: [
          { id: "1.3.5", title: "IS Audit Risk Assessment Techniques" },
          { id: "1.3.6", title: "Risk Analysis" }
        ]
      },
      {
        id: "1.4",
        title: "Types of Controls and Considerations",
        subsections: [
          { id: "1.4.1", title: "Internal Controls" },
          { id: "1.4.2", title: "Control Objectives and Control Measures" },
          { id: "1.4.3", title: "Control Classifications" },
          { id: "1.4.4", title: "Control Relationship to Risk" },
          { id: "1.4.5", title: "Prescriptive Controls and Frameworks" },
          { id: "1.4.6", title: "Evaluation of the Control Environment" }
        ]
      },
      {
        id: "1.5",
        title: "Audit Project Management",
        subsections: [
          { id: "1.5.1", title: "Audit Objectives" },
          { id: "1.5.2", title: "Audit Phases" },
          { id: "1.5.3", title: "Audit Programs" },
          { id: "1.5.4", title: "Audit Work Papers" },
          { id: "1.5.5", title: "Fraud, Irregularities and Illegal Acts" },
          { id: "1.5.6", title: "Agile Auditing" }
        ]
      },
      {
        id: "1.6",
        title: "Audit Testing and Sampling Methodology",
        subsections: [
          { id: "1.6.1", title: "Compliance Versus Substantive Testing" },
          { id: "1.6.2", title: "Sampling" }
        ]
      },
      {
        id: "1.7",
        title: "Audit Evidence Collection Techniques",
        subsections: [
          { id: "1.7.1", title: "Interviewing and Observing Personnel" }
        ]
      },
      {
        id: "1.8",
        title: "Audit Data Analytics",
        subsections: [
          { id: "1.8.1", title: "Computer-Assisted Audit Techniques (CAATs)" },
          { id: "1.8.2", title: "Continuous Auditing and Monitoring" },
          { id: "1.8.3", title: "Continuous Auditing Techniques" },
          { id: "1.8.4", title: "Artificial Intelligence in IS Audit" }
        ]
      },
      {
        id: "1.9",
        title: "Reporting and Communication Techniques",
        subsections: [
          { id: "1.9.1", title: "Communicating Audit Results" },
          { id: "1.9.2", title: "Audit Report Objectives" },
          { id: "1.9.3", title: "Audit Report Structure and Contents" },
          { id: "1.9.4", title: "Audit Documentation" },
          { id: "1.9.5", title: "Follow-Up Activities" },
          { id: "1.9.6", title: "Types of IS Audit Reports" }
        ]
      },
      {
        id: "1.10",
        title: "Quality Assurance and Improvement of the Audit Process",
        subsections: [
          { id: "1.10.1", title: "Audit Committee Oversight" },
          { id: "1.10.2", title: "Audit Quality Assurance" },
          { id: "1.10.3", title: "Audit Team Training and Development" },
          { id: "1.10.4", title: "Monitoring" }
        ]
      }
    ]
  },

  {
    id: "domain-2",
    title: "Domain 2 – Governance and Management of IT",
    sections: [
      {
        id: "2.1",
        title: "Laws, Regulations and Governance",
        subsections: [
          { id: "2.1.1", title: "Impact of Laws, Regulations and Standards" },
          { id: "2.1.2", title: "Governance, Risk and Compliance (GRC)" }
        ]
      },
      {
        id: "2.2",
        title: "IT Governance and Strategy",
        subsections: [
          { id: "2.2.1", title: "Enterprise Governance of IT (EGIT)" },
          { id: "2.2.2", title: "Good Practices for EGIT" },
          { id: "2.2.3", title: "Audit's Role in EGIT" },
          { id: "2.2.4", title: "Information Security Governance" },
          { id: "2.2.5", title: "Information Systems Strategy" },
          { id: "2.2.6", title: "Strategic Planning" },
          { id: "2.2.7", title: "Business Intelligence" },
          { id: "2.2.8", title: "Organizational Structure" },
          { id: "2.2.9", title: "Auditing IT Governance Structure" }
        ]
      },
      {
        id: "2.3",
        title: "IT Policies, Standards and Procedures",
        subsections: [
          { id: "2.3.1", title: "Policies" },
          { id: "2.3.2", title: "Standards" },
          { id: "2.3.3", title: "Procedures" },
          { id: "2.3.4", title: "Guidelines" }
        ]
      },
      {
        id: "2.5",
        title: "Enterprise Risk Management",
        subsections: [
          { id: "2.5.1", title: "Risk Management Program" },
          { id: "2.5.2", title: "Risk Management Lifecycle" },
          { id: "2.5.3", title: "Risk Analysis Methods" }
        ]
      },
      {
        id: "2.8",
        title: "IT Resource Management",
        subsections: [
          { id: "2.8.1", title: "Value of IT" },
          { id: "2.8.2", title: "IT Portfolio Management" },
          { id: "2.8.3", title: "IT Management Practices" },
          { id: "2.8.4", title: "Human Resource Management" },
          { id: "2.8.5", title: "Enterprise Change Management" },
          { id: "2.8.6", title: "Financial Management Practices" },
          { id: "2.8.7", title: "Information Security Management" }
        ]
      },
      {
        id: "2.9",
        title: "IT Vendor Management",
        subsections: [
          { id: "2.9.1", title: "Sourcing Practices" },
          { id: "2.9.2", title: "Outsourcing Practices" },
          { id: "2.9.3", title: "Cloud Governance" },
          { id: "2.9.4", title: "Governance in Outsourcing" },
          { id: "2.9.5", title: "Capacity and Growth Planning" },
          { id: "2.9.6", title: "Third-Party Service Management" }
        ]
      },
      {
        id: "2.10",
        title: "IT Performance Monitoring",
        subsections: [
          { id: "2.10.1", title: "Key Performance Indicators (KPI)" },
          { id: "2.10.2", title: "Key Risk Indicators (KRI)" },
          { id: "2.10.3", title: "Key Control Indicators (KCI)" },
          { id: "2.10.4", title: "Performance Optimization" },
          { id: "2.10.5", title: "Measurement Approaches" }
        ]
      }
    ]
  },

  {
    id: "domain-3",
    title: "Domain 3 – IS Acquisition, Development and Implementation",
    sections: [
      {
        id: "3.1",
        title: "Project Governance and Management",
        subsections: [
          { id: "3.1.1", title: "Project Management Practices" },
          { id: "3.1.2", title: "Project Management Structure" },
          { id: "3.1.3", title: "Roles and Responsibilities" },
          { id: "3.1.4", title: "Project Management Techniques" },
          { id: "3.1.5", title: "Portfolio/Program Management" },
          { id: "3.1.6", title: "Project Management Office (PMO)" },
          { id: "3.1.7", title: "Benefits Realization" },
          { id: "3.1.8", title: "Project Initiation" },
          { id: "3.1.9", title: "Project Objectives" },
          { id: "3.1.10", title: "Project Planning" },
          { id: "3.1.11", title: "Project Execution" },
          { id: "3.1.12", title: "Project Monitoring" },
          { id: "3.1.13", title: "Project Closing" },
          { id: "3.1.14", title: "Auditor's Role in Projects" }
        ]
      },
      {
        id: "3.3",
        title: "System Development Methodologies",
        subsections: [
          { id: "3.3.1", title: "Business Application Development" },
          { id: "3.3.2", title: "SDLC Models" },
          { id: "3.3.3", title: "SDLC Phases" },
          { id: "3.3.4", title: "Auditor's Role in SDLC" },
          { id: "3.3.5", title: "Software Development Methods" },
          { id: "3.3.6", title: "Development Tools and Aids" }
        ]
      },
      {
        id: "3.5",
        title: "System Implementation Testing",
        subsections: [
          { id: "3.5.1", title: "Testing Classifications" },
          { id: "3.5.2", title: "Software Testing" },
          { id: "3.5.3", title: "Data Integrity Testing" },
          { id: "3.5.4", title: "Application Testing" },
          { id: "3.5.5", title: "System Implementation" }
        ]
      }
    ]
  },

  {
    id: "domain-4",
    title: "Domain 4 – IT Operations and Business Resilience",
    sections: [
      {
        id: "4.1",
        title: "IT Components and Infrastructure",
        subsections: [
          { id: "4.1.1", title: "Networking" },
          { id: "4.1.2", title: "Hardware Components" },
          { id: "4.1.3", title: "Enterprise Back-End Devices" },
          { id: "4.1.4", title: "USB Storage Security" },
          { id: "4.1.5", title: "Wireless Communication" }
        ]
      },
      {
        id: "4.6",
        title: "Systems Availability and Capacity Management",
        subsections: [
          { id: "4.6.1", title: "Architecture and Software" },
          { id: "4.6.2", title: "Operating Systems" },
          { id: "4.6.3", title: "Access Control Software" },
          { id: "4.6.4", title: "Data Communications Software" },
          { id: "4.6.5", title: "Utility Programs" },
          { id: "4.6.6", title: "Software Licensing" },
          { id: "4.6.7", title: "Source Code Management" },
          { id: "4.6.8", title: "Capacity Management" }
        ]
      },
      {
        id: "4.7",
        title: "Incident and Problem Management",
        subsections: [
          { id: "4.7.1", title: "Problem Management" },
          { id: "4.7.2", title: "Incident Handling" },
          { id: "4.7.3", title: "Abnormal Condition Reporting" },
          { id: "4.7.4", title: "Help Desk Support" },
          { id: "4.7.5", title: "Network Management Tools" }
        ]
      },
      {
        id: "4.8",
        title: "Change and Configuration Management",
        subsections: [
          { id: "4.8.1", title: "Patch Management" },
          { id: "4.8.2", title: "Release Management" },
          { id: "4.8.3", title: "IS Operations Reviews" }
        ]
      },
      {
        id: "4.9",
        title: "Log Management",
        subsections: [
          { id: "4.9.1", title: "Types of Logs" },
          { id: "4.9.2", title: "Log Management" }
        ]
      },
      {
        id: "4.10",
        title: "IT Service Level Management",
        subsections: [
          { id: "4.10.1", title: "Service Level Agreements" },
          { id: "4.10.2", title: "Monitoring Service Levels" },
          { id: "4.10.3", title: "Enterprise Architecture Alignment" }
        ]
      },
      {
        id: "4.14",
        title: "Backup, Storage and Restoration",
        subsections: [
          { id: "4.14.1", title: "Data Storage Resiliency" },
          { id: "4.14.2", title: "Backup and Restoration" },
          { id: "4.14.3", title: "Backup Schemes" }
        ]
      },
      {
        id: "4.15",
        title: "Business Continuity Planning",
        subsections: [
          { id: "4.15.1", title: "IT BCP Planning" },
          { id: "4.15.2", title: "Disruptive Events" },
          { id: "4.15.3", title: "BCP Process" },
          { id: "4.15.4", title: "BCP Policy" },
          { id: "4.15.5", title: "Incident Management" },
          { id: "4.15.6", title: "Plan Development" },
          { id: "4.15.9", title: "Plan Testing" }
        ]
      }
    ]
  },

  {
    id: "domain-5",
    title: "Domain 5 – Protection of Information Assets",
    sections: [
      {
        id: "5.3",
        title: "Identity and Access Management",
        subsections: [
          { id: "5.3.1", title: "IAM Lifecycle" },
          { id: "5.3.2", title: "Authentication and Authorization" },
          { id: "5.3.3", title: "Zero Trust Architecture" },
          { id: "5.3.4", title: "Privileged Access Management" },
          { id: "5.3.5", title: "Directory Services" }
        ]
      },
      {
        id: "5.4",
        title: "Network and Endpoint Security",
        subsections: [
          { id: "5.4.1", title: "Network Infrastructure" },
          { id: "5.4.2", title: "Network Architectures" },
          { id: "5.4.3", title: "Network Types" },
          { id: "5.4.12", title: "Firewalls" },
          { id: "5.4.14", title: "Network Segmentation" },
          { id: "5.4.15", title: "Endpoint Security" }
        ]
      },
      {
        id: "5.6",
        title: "Data Encryption",
        subsections: [
          { id: "5.6.1", title: "Encryption Systems" },
          { id: "5.6.3", title: "Symmetric Cryptography" },
          { id: "5.6.4", title: "Public Key Cryptography" },
          { id: "5.6.8", title: "Digital Signatures" }
        ]
      },
      {
        id: "5.7",
        title: "Public Key Infrastructure",
        subsections: [
          { id: "5.7.1", title: "Digital Certificates" },
          { id: "5.7.2", title: "Key Management" },
          { id: "5.7.3", title: "Certificate Revocation" },
          { id: "5.7.6", title: "PKI Audit Procedures" }
        ]
      },
      {
        id: "5.8",
        title: "Cloud and Virtualized Environments",
        subsections: [
          { id: "5.8.1", title: "Virtualization" },
          { id: "5.8.5", title: "Software Defined Networking" },
          { id: "5.8.7", title: "Cloud Migration Security" },
          { id: "5.8.8", title: "Shared Responsibility Model" },
          { id: "5.8.10", title: "DevSecOps" }
        ]
      },
      {
        id: "5.13",
        title: "Security Monitoring",
        subsections: [
          { id: "5.13.2", title: "Intrusion Detection Systems" },
          { id: "5.13.3", title: "Intrusion Prevention Systems" },
          { id: "5.13.6", title: "SIEM Systems" }
        ]
      },
      {
        id: "5.14",
        title: "Incident Response",
        subsections: [
          { id: "5.14.1", title: "Incident Response Process" },
          { id: "5.14.2", title: "CSIRT" },
          { id: "5.14.3", title: "Incident Response Plan" },
          { id: "5.14.4", title: "SOAR Systems" }
        ]
      },
      {
        id: "5.15",
        title: "Digital Forensics and Evidence",
        subsections: [
          { id: "5.15.1", title: "Types of Investigations" },
          { id: "5.15.2", title: "Computer Forensics Types" },
          { id: "5.15.3", title: "Forensics Phases" },
          { id: "5.15.7", title: "Chain of Custody" },
          { id: "5.15.8", title: "Digital Evidence Best Practices" }
        ]
      }
    ]
  }
];

export default navigationData;
