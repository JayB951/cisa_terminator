// Navigations.js

const navigationData = [
  {{
  id: "domain1",
  code: "D1",
  title: "Information Systems Auditing Process",
  children: [
    {
      id: "1.1",
      title: "IS Audit Standards, Guidelines, Functions and Codes of Ethics",
      children: [
        { id: "1.1.1", title: "ISACA IS Audit and Assurance Standards" },
        { id: "1.1.2", title: "ISACA IS Audit and Assurance Guidelines" },
        { id: "1.1.3", title: "ISACA Code of Professional Ethics" },
        { id: "1.1.4", title: "ITAF" },
        { id: "1.1.5", title: "IS Internal Audit Function" }
      ]
    },

    {
      id: "1.2",
      title: "Types of Audits, Assessments and Reviews",
      children: [
        { id: "1.2.1", title: "Control Self-Assessment (CSA)" },
        { id: "1.2.2", title: "Integrated Auditing" }
      ]
    },

    {
      id: "1.3",
      title: "Risk-Based Audit Planning",
      children: [
        { id: "1.3.1", title: "Individual Audit Assignments" },
        { id: "1.3.2", title: "Effect of Laws and Regulations on IS Audit Planning" },
        { id: "1.3.3", title: "Audit Risk and Materiality" },
        { id: "1.3.4", title: "Risk Assessment" },
        { id: "1.3.5", title: "IS Audit Risk Assessment Techniques" },
        { id: "1.3.6", title: "Risk Analysis" }
      ]
    },

    {
      id: "1.4",
      title: "Types of Controls and Considerations",
      children: [
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
      children: [
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
      children: [
        { id: "1.6.1", title: "Compliance Versus Substantive Testing" },
        { id: "1.6.2", title: "Sampling" }
      ]
    },

    {
      id: "1.7",
      title: "Audit Evidence Collection Techniques",
      children: [
        {
          id: "1.7.1",
          title: "Interviewing and Observing Personnel in Performance of Their Duties"
        }
      ]
    },

    {
      id: "1.8",
      title: "Audit Data Analytics",
      children: [
        { id: "1.8.1", title: "Computer-Assisted Audit Techniques (CAATs)" },
        { id: "1.8.2", title: "Continuous Auditing and Monitoring" },
        { id: "1.8.3", title: "Continuous Auditing Techniques" },
        { id: "1.8.4", title: "Artificial Intelligence in IS Audit" }
      ]
    },

    {
      id: "1.9",
      title: "Reporting and Communication Techniques",
      children: [
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
      children: [
        { id: "1.10.1", title: "Audit Committee Oversight" },
        { id: "1.10.2", title: "Audit Quality Assurance" },
        { id: "1.10.3", title: "Audit Team Training and Development" },
        { id: "1.10.4", title: "Monitoring" }
      ]
    }
  ]{
  id: 'chapter-2',
  title: 'Chapter 2 - Governance and Management of IT',
  children: [
    {
      id: '2.1',
      title: 'IT Governance and IT Strategy',
      children: [
        { id: '2.1.1', title: 'IT Governance Frameworks and Standards' },
        { id: '2.1.2', title: 'Enterprise Governance of IT' },
        { id: '2.1.3', title: 'Governance Committees' },
        { id: '2.1.4', title: 'IT Strategy' },
        { id: '2.1.5', title: 'Policies, Standards and Procedures' },
        { id: '2.1.6', title: 'Enterprise Architecture' },
        { id: '2.1.7', title: 'Enterprise Risk Management' },
        { id: '2.1.8', title: 'Maturity Models' },
        { id: '2.1.9', title: 'Laws, Regulations and Industry Standards' }
      ]
    },

    {
      id: '2.2',
      title: 'IT Management',
      children: [
        { id: '2.2.1', title: 'IT Resource Management' },
        { id: '2.2.2', title: 'IT Performance Monitoring and Reporting' },
        { id: '2.2.3', title: 'IT Organizational Structure' },
        { id: '2.2.4', title: 'Segregation of Duties' },
        { id: '2.2.5', title: 'IT Human Resource Management' }
      ]
    },

    {
      id: '2.3',
      title: 'Information Systems Governance',
      children: [
        { id: '2.3.1', title: 'Governance Structures' },
        { id: '2.3.2', title: 'Governance Processes' },
        { id: '2.3.3', title: 'Governance Metrics' }
      ]
    },

    {
      id: '2.4',
      title: 'Risk Management',
      children: [
        { id: '2.4.1', title: 'Risk Management Frameworks' },
        { id: '2.4.2', title: 'Risk Assessment' },
        { id: '2.4.3', title: 'Risk Analysis and Evaluation' },
        { id: '2.4.4', title: 'Risk Response and Treatment' },
        { id: '2.4.5', title: 'Risk Monitoring and Reporting' }
      ]
    },

    {
      id: '2.5',
      title: 'IT Policies and Procedures',
      children: [
        { id: '2.5.1', title: 'Policy Framework' },
        { id: '2.5.2', title: 'Standards and Procedures' },
        { id: '2.5.3', title: 'Compliance Monitoring' }
      ]
    },

    {
      id: '2.6',
      title: 'IT Resource Management',
      children: [
        { id: '2.6.1', title: 'Human Resources' },
        { id: '2.6.2', title: 'Financial Resources' },
        { id: '2.6.3', title: 'Technology Resources' },
        { id: '2.6.4', title: 'Vendor Management' }
      ]
    },

    {
      id: '2.7',
      title: 'Quality Management',
      children: [
        { id: '2.7.1', title: 'Quality Assurance' },
        { id: '2.7.2', title: 'Quality Control' },
        { id: '2.7.3', title: 'Continuous Improvement' }
      ]
    },

    {
      id: '2.8',
      title: 'Monitoring and Reporting',
      children: [
        { id: '2.8.1', title: 'Performance Metrics' },
        { id: '2.8.2', title: 'Balanced Scorecard' },
        { id: '2.8.3', title: 'Key Risk Indicators (KRIs)' },
        { id: '2.8.4', title: 'Key Performance Indicators (KPIs)' }
      ]
    }
 {
  id: 'chapter-3',
  title: 'Chapter 3 - Information Systems Acquisition, Development and Implementation',
  children: [
    {
      id: '3.1',
      title: 'Project Governance and Management',
      children: [
        { id: '3.1.1', title: 'Project Management Practices' },
        { id: '3.1.2', title: 'Project Management Structure' },
        { id: '3.1.3', title: 'Project Management Roles and Responsibilities' },
        { id: '3.1.4', title: 'Project Management Techniques' },
        { id: '3.1.5', title: 'Portfolio/Program Management' },
        { id: '3.1.6', title: 'Project Management Office' },
        { id: '3.1.7', title: 'Project Benefits Realization' },
        { id: '3.1.8', title: 'Project Initiation' },
        { id: '3.1.9', title: 'Project Objectives' },
        { id: '3.1.10', title: 'Project Planning' },
        { id: '3.1.11', title: 'Project Execution' },
        { id: '3.1.12', title: 'Project Controlling and Monitoring' },
        { id: '3.1.13', title: 'Project Closing' },
        { id: '3.1.14', title: "IS Auditor's Role in Project Management" }
      ]
    },

    {
      id: '3.2',
      title: 'Business Case and Feasibility Analysis',
      children: [
        { id: '3.2.1', title: "IS Auditor's Role in Business Case Development" }
      ]
    },

    {
      id: '3.3',
      title: 'System Development Methodologies',
      children: [
        { id: '3.3.1', title: 'Business Application Development' },
        { id: '3.3.2', title: 'SDLC Models' },
        { id: '3.3.3', title: 'SDLC Phases' },
        { id: '3.3.4', title: "IS Auditor's Role in SDLC Project Management" },
        { id: '3.3.5', title: 'Software Development Methods' },
        { id: '3.3.6', title: 'System Development Tools and Productivity Aids' },
        { id: '3.3.7', title: 'Infrastructure Development/Acquisition Practices' },
        { id: '3.3.8', title: 'Hardware/Software Acquisition' },
        { id: '3.3.9', title: 'System Software Acquisition' }
      ]
    },

    {
      id: '3.4',
      title: 'Control Identification and Design',
      children: [
        { id: '3.4.1', title: 'Application Controls' },
        { id: '3.4.2', title: 'Output Controls' }
      ]
    },

    {
      id: '3.5',
      title: 'System Readiness and Implementation Testing',
      children: [
        { id: '3.5.1', title: 'Testing Classifications' },
        { id: '3.5.2', title: 'Software Testing' },
        { id: '3.5.3', title: 'Data Integrity Testing' },
        { id: '3.5.4', title: 'Application Systems Testing' },
        { id: '3.5.5', title: 'System Implementation' }
      ]
    },

    {
      id: '3.6',
      title: 'Implementation Configuration and Release Management',
      children: [
        { id: '3.6.1', title: 'Configuration Management Systems' }
      ]
    },

    {
      id: '3.7',
      title: 'System Migration, Infrastructure Deployment and Data Conversion',
      children: [
        { id: '3.7.1', title: 'Data Migration' },
        { id: '3.7.2', title: 'Changeover (Go-Live or Cutover) Techniques' },
        { id: '3.7.3', title: 'System Change Procedures and the Program Migration Process' },
        { id: '3.7.4', title: 'System Software Implementation' },
        { id: '3.7.5', title: 'Certification/Accreditation' }
      ]
    },

    {
      id: '3.8',
      title: 'Postimplementation Review',
      children: [
        { id: '3.8.1', title: "IS Auditor's Role in Postimplementation Review" }
      ]
    }
{
  id: 'chapter-4',
  title: 'Chapter 4 - Information Systems Operations and Business Resilience',
  children: [
    {
      id: '4.1',
      title: 'IT Components',
      children: [
        { id: '4.1.1', title: 'Networking' },
        { id: '4.1.2', title: 'Computer Hardware Components and Architectures' },
        { id: '4.1.3', title: 'Common Enterprise Back-End Devices' },
        { id: '4.1.4', title: 'USB Mass Storage Devices' },
        { id: '4.1.5', title: 'Wireless Communication Technologies' },
        { id: '4.1.6', title: 'Hardware Maintenance Program' },
        { id: '4.1.7', title: 'Hardware Reviews' }
      ]
    },

    {
      id: '4.2',
      title: 'IT Asset Management'
    },

    {
      id: '4.3',
      title: 'Job Scheduling and Production Process Automation',
      children: [
        { id: '4.3.1', title: 'Job Scheduling Software' },
        { id: '4.3.2', title: 'Scheduling Reviews' }
      ]
    },

    {
      id: '4.4',
      title: 'System Interfaces',
      children: [
        { id: '4.4.1', title: 'Risk Associated With System Interfaces' },
        { id: '4.4.2', title: 'Controls Associated With System Interfaces' }
      ]
    },

    {
      id: '4.5',
      title: 'End-User Computing and Shadow IT',
      children: [
        { id: '4.5.1', title: 'End-User Computing' },
        { id: '4.5.2', title: 'Shadow IT' }
      ]
    },

    {
      id: '4.6',
      title: 'Systems Availability and Capacity Management',
      children: [
        { id: '4.6.1', title: 'IS Architecture and Software' },
        { id: '4.6.2', title: 'Operating Systems' },
        { id: '4.6.3', title: 'Access Control Software' },
        { id: '4.6.4', title: 'Data Communications Software' },
        { id: '4.6.5', title: 'Utility Programs' },
        { id: '4.6.6', title: 'Software Licensing Issues' },
        { id: '4.6.7', title: 'Source Code Management' },
        { id: '4.6.8', title: 'Capacity Management' }
      ]
    },

    {
      id: '4.7',
      title: 'Problem and Incident Management',
      children: [
        { id: '4.7.1', title: 'Problem Management' },
        { id: '4.7.2', title: 'Process of Incident Handling' },
        {
          id: '4.7.3',
          title: 'Detection, Documentation, Control, Resolution and Reporting of Abnormal Conditions'
        },
        { id: '4.7.4', title: 'Support/Help Desk' },
        { id: '4.7.5', title: 'Network Management Tools' },
        { id: '4.7.6', title: 'Problem Management Reporting Reviews' }
      ]
    },

    {
      id: '4.8',
      title: 'IT Change, Configuration and Patch Management',
      children: [
        { id: '4.8.1', title: 'Patch Management' },
        { id: '4.8.2', title: 'Release Management' },
        { id: '4.8.3', title: 'IS Operations' }
      ]
    },

    {
      id: '4.9',
      title: 'Operational Log Management',
      children: [
        { id: '4.9.1', title: 'Types of Logs' },
        { id: '4.9.2', title: 'Log Management' }
      ]
    },

    {
      id: '4.10',
      title: 'IT Service Level Management',
      children: [
        { id: '4.10.1', title: 'Service Level Agreements' },
        { id: '4.10.2', title: 'Monitoring of Service Levels' },
        { id: '4.10.3', title: 'Service Levels and Enterprise Architecture' }
      ]
    },

    {
      id: '4.11',
      title: 'Database Management',
      children: [
        { id: '4.11.1', title: 'DBMS Architecture' },
        { id: '4.11.2', title: 'Database Structure' },
        { id: '4.11.3', title: 'Database Controls' },
        { id: '4.11.4', title: 'Database Reviews' }
      ]
    },

    {
      id: '4.12',
      title: 'Business Impact Analysis',
      children: [
        { id: '4.12.1', title: 'Classification of Operations and Criticality Analysis' }
      ]
    },

    {
      id: '4.13',
      title: 'System and Operational Resilience',
      children: [
        { id: '4.13.1', title: 'Application Resiliency and Disaster Recovery Methods' },
        { id: '4.13.2', title: 'Telecommunication Networks Resiliency and Disaster Recovery Methods' }
      ]
    },

    {
      id: '4.14',
      title: 'Data Backup, Storage and Restoration',
      children: [
        { id: '4.14.1', title: 'Data Storage Resiliency and Disaster Recovery Methods' },
        { id: '4.14.2', title: 'Backup and Restoration' },
        { id: '4.14.3', title: 'Backup Schemes' }
      ]
    },

    {
      id: '4.15',
      title: 'Business Continuity Plan',
      children: [
        { id: '4.15.1', title: 'IT Business Continuity Planning' },
        { id: '4.15.2', title: 'Disasters and Other Disruptive Events' },
        { id: '4.15.3', title: 'Business Continuity Planning Process' },
        { id: '4.15.4', title: 'Business Continuity Policy' },
        { id: '4.15.5', title: 'Business Continuity Planning Incident Management' },
        { id: '4.15.6', title: 'Development of Business Continuity Plans' },
        { id: '4.15.7', title: 'Other Issues in Plan Development' },
        { id: '4.15.8', title: 'Components of a Business Continuity Plan' },
        { id: '4.15.9', title: 'Plan Testing' },
        { id: '4.15.10', title: 'Business Continuity Management Good Practices' },
        { id: '4.15.11', title: 'Auditing Business Continuity' }
      ]
    },

    {
      id: '4.16',
      title: 'Disaster Recovery Plans',
      children: [
        {
          id: '4.16.1',
          title: 'Recovery Point Objective, Recovery Time Objective and Mean Time to Repair'
        },
        { id: '4.16.2', title: 'Recovery Strategies' },
        { id: '4.16.3', title: 'Recovery Alternatives' },
        { id: '4.16.4', title: 'Development of Disaster Recovery Plans' },
        { id: '4.16.5', title: 'Disaster Recovery Testing Methods' },
        { id: '4.16.6', title: 'Invoking Disaster Recovery Plans' }
      ]
    }
  ]
},

export default navigationData;
