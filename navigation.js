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
  ]
},
},
];

export default navigationData;
