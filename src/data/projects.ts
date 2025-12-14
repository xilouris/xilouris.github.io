export interface Project {
  title: string;
  acronym?: string;
  description: string;
  role: string;
  status: 'active' | 'completed';
  startDate: string;
  endDate: string;
  funding: string;
  fundingProgram?: string;
  website?: string;
  technologies?: string[];
  objectives?: string[];
  impact?: string;
  logo?: string;
}

// Active Projects
export const activeProjects: Project[] = [
  {
    title: '6G CLOUD - Cloud Continuum Platform for 6G Advanced Cloud and Network Services',
    acronym: '6G CLOUD',
    description: 'Developing a cloud continuum platform enabling advanced cloud and network services for 6G networks, focusing on distributed computing, edge intelligence, and seamless service orchestration.',
    role: 'Technical Lead & Principal Investigator',
    status: 'active',
    startDate: '2023',
    endDate: '2025',
    funding: 'European Commission',
    fundingProgram: 'Horizon Europe',
    website: '',
    technologies: ['Cloud-Native', 'Edge Computing', '6G Networks', 'Service Orchestration', 'Kubernetes'],
    objectives: [
      'Design cloud continuum architecture for 6G networks',
      'Develop edge intelligence and distributed computing solutions',
      'Enable seamless service orchestration across cloud-edge continuum',
      'Validate platform with real-world use cases',
    ],
    impact: 'Advancing 6G network infrastructure with intelligent cloud-edge integration',
  },
  {
    title: 'COBALT - Collaborative Secure Platform for Cross-Border and Cross-Domain Fault Management',
    acronym: 'COBALT',
    description: 'Building a collaborative platform for secure cross-border and cross-domain fault management in critical infrastructure, enabling proactive threat detection and coordinated incident response.',
    role: 'Work Package Leader',
    status: 'active',
    startDate: '2022',
    endDate: '2025',
    funding: 'European Commission',
    fundingProgram: 'Horizon Europe',
    website: '',
    technologies: ['Cybersecurity', 'AI/ML', 'Threat Intelligence', 'Incident Response', 'Blockchain'],
    objectives: [
      'Develop cross-border fault management framework',
      'Implement AI-powered threat detection',
      'Enable secure information sharing between domains',
      'Validate in critical infrastructure scenarios',
    ],
    impact: 'Enhancing cybersecurity resilience across European critical infrastructure',
  },
  {
    title: 'PRIVATEER - Privacy-Preserving Technologies for Enhanced Cybersecurity',
    acronym: 'PRIVATEER',
    description: 'Developing privacy-preserving technologies and methodologies to enhance cybersecurity while protecting user privacy in digital ecosystems.',
    role: 'Research Lead',
    status: 'active',
    startDate: '2023',
    endDate: '2026',
    funding: 'European Commission',
    fundingProgram: 'Horizon Europe',
    website: '',
    technologies: ['Privacy-Preserving Computing', 'Homomorphic Encryption', 'Secure Multi-Party Computation', 'Zero-Knowledge Proofs'],
    objectives: [
      'Design privacy-preserving security mechanisms',
      'Develop cryptographic protocols for secure data processing',
      'Implement privacy-aware threat detection systems',
      'Validate with privacy-critical use cases',
    ],
    impact: 'Advancing privacy-preserving cybersecurity solutions for digital services',
  },
  {
    title: 'AInception - AI-Powered Network Security and Orchestration',
    acronym: 'AInception',
    description: 'Leveraging artificial intelligence for advanced network security and autonomous orchestration in next-generation networks.',
    role: 'Principal Investigator',
    status: 'active',
    startDate: '2022',
    endDate: '2025',
    funding: 'European Commission',
    fundingProgram: 'Horizon Europe',
    website: '',
    technologies: ['AI/ML', 'Network Security', 'Autonomous Orchestration', 'Anomaly Detection', 'Deep Learning'],
    objectives: [
      'Develop AI-powered security analytics platform',
      'Implement autonomous network orchestration',
      'Enable real-time threat detection and response',
      'Validate in operational network environments',
    ],
    impact: 'Transforming network security with AI-driven autonomous capabilities',
  },
  {
    title: 'ICOS - Intelligent Cloud Orchestration and Security',
    acronym: 'ICOS',
    description: 'Research project focusing on intelligent orchestration and security mechanisms for cloud-native applications and services.',
    role: 'Technical Coordinator',
    status: 'active',
    startDate: '2023',
    endDate: '2025',
    funding: 'European Commission',
    fundingProgram: 'Horizon Europe',
    website: '',
    technologies: ['Cloud Security', 'Container Orchestration', 'Zero-Trust Architecture', 'Service Mesh'],
    objectives: [
      'Design intelligent cloud orchestration framework',
      'Implement zero-trust security architecture',
      'Develop automated security policy enforcement',
      'Enable secure multi-cloud deployments',
    ],
    impact: 'Advancing secure and intelligent cloud-native infrastructure',
  },
];

// Past Projects (Selected Major Contributions)
export const completedProjects: Project[] = [
  {
    title: '5GENESIS - 5G End-to-End Network, Experimentation, System Integration, and Showcasing',
    acronym: '5GENESIS',
    description: 'Major 5G infrastructure project establishing experimental facilities across Europe for validating 5G technologies and use cases.',
    role: 'Site Technical Leader (Athens Facility)',
    status: 'completed',
    startDate: '2018',
    endDate: '2021',
    funding: 'European Commission',
    fundingProgram: 'Horizon 2020',
    website: 'https://5genesis.eu',
    technologies: ['5G Networks', 'Network Slicing', 'NFV/SDN', 'Edge Computing', 'Orchestration'],
    objectives: [
      'Deploy and operate 5G experimental facility in Athens',
      'Enable end-to-end 5G experimentation',
      'Validate vertical use cases (automotive, media, eHealth)',
      'Contribute to 5G standardization',
    ],
    impact: 'Established key European 5G testing infrastructure and validated multiple 5G use cases',
  },
  {
    title: '5GTANGO - 5G Development and Validation Platform for Global Industry-Specific Network Services and Apps',
    acronym: '5GTANGO',
    description: 'Developed comprehensive development and validation platform for 5G network services and applications.',
    role: 'Work Package Leader - Integration & Validation',
    status: 'completed',
    startDate: '2017',
    endDate: '2019',
    funding: 'European Commission',
    fundingProgram: 'Horizon 2020',
    website: '',
    technologies: ['NFV', 'SDN', 'Service Orchestration', 'Network Services', 'DevOps'],
    objectives: [
      'Design NFV development and deployment platform',
      'Implement automated service validation framework',
      'Enable rapid prototyping of network services',
      'Validate with industry verticals',
    ],
    impact: 'Created open-source platform widely adopted in NFV research community',
  },
  {
    title: 'SONATA - Service Programming and Orchestration for Virtualized Software Networks',
    acronym: 'SONATA',
    description: 'Pioneering project in NFV service programming, orchestration, and management for virtualized networks.',
    role: 'Principal Investigator',
    status: 'completed',
    startDate: '2015',
    endDate: '2017',
    funding: 'European Commission',
    fundingProgram: 'Horizon 2020',
    website: '',
    technologies: ['NFV', 'SDN', 'MANO', 'Service Orchestration', 'DevOps'],
    objectives: [
      'Develop NFV service programming framework',
      'Design and implement NFV orchestrator',
      'Enable automated lifecycle management',
      'Create developer-friendly tools and APIs',
    ],
    impact: 'Foundational contribution to NFV orchestration, influencing ETSI standards',
  },
  {
    title: 'T-NOVA - Network Functions as-a-Service over Virtualized Infrastructures',
    acronym: 'T-NOVA',
    description: 'Early NFV project establishing marketplace and orchestration platform for virtualized network functions.',
    role: 'Research Lead',
    status: 'completed',
    startDate: '2013',
    endDate: '2016',
    funding: 'European Commission',
    fundingProgram: 'FP7',
    website: '',
    technologies: ['NFV', 'VNF Marketplace', 'Orchestration', 'QoS Management'],
    objectives: [
      'Design VNF marketplace architecture',
      'Implement orchestration and lifecycle management',
      'Develop QoS and SLA management mechanisms',
      'Validate with telco use cases',
    ],
    impact: 'Early pioneering work in NFV marketplace and service orchestration',
  },
];

// All projects combined
export const allProjects = [...activeProjects, ...completedProjects];

// Project statistics
export const projectStats = {
  totalProjects: allProjects.length,
  activeProjects: activeProjects.length,
  completedProjects: completedProjects.length,
  totalFunding: 'Multiple EC-funded projects (H2020, Horizon Europe)',
  researchAreas: ['5G/6G Networks', 'NFV/SDN', 'Cloud/Edge Computing', 'Cybersecurity', 'AI/ML for Networks'],
};
