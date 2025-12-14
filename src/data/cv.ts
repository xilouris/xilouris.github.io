import type { CVSection } from '../types';

// Education Section
export const education: CVSection = {
  title: 'Education',
  items: [
    {
      title: 'M.Sc. in Automation Systems',
      organization: 'National Technical University of Athens (NTUA)',
      location: 'Athens, Greece',
      startDate: '1999',
      endDate: '2001',
      description: 'Thesis: Network Management and Quality of Service',
      details: [],
    },
    {
      title: 'B.Sc. in Physics',
      organization: 'University of Ioannina',
      location: 'Ioannina, Greece',
      startDate: '1994',
      endDate: '1999',
      description: '',
      details: [],
    },
  ],
};

// Professional Experience Section
export const experience: CVSection = {
  title: 'Professional Experience',
  items: [
    {
      title: 'Head of Network Operations Center (NOC)',
      organization: 'NCSR "Demokritos"',
      location: 'Athens, Greece',
      startDate: '2021',
      endDate: 'Present',
      description: 'Managing network infrastructure and operations for the entire research center',
      details: [
        'Oversee network infrastructure, security, and service delivery',
        'Strategic planning and budgeting for network operations',
        'Team management and coordination with IT departments',
        'Implementation of network monitoring and management systems',
      ],
    },
    {
      title: 'Head of CORE Research Group',
      organization: 'Institute of Informatics and Telecommunications, NCSR "Demokritos"',
      location: 'Athens, Greece',
      startDate: '2022',
      endDate: 'Present',
      description: 'Leading research group focused on next-generation networks and cybersecurity',
      details: [
        'Manage team of researchers and PhD students',
        'Principal Investigator on multiple EU-funded projects (6G CLOUD, COBALT, PRIVATEER, AInception, ICOS)',
        'Research in 5G/6G networks, network security, SDN/NFV, and edge computing',
        'Published 114+ peer-reviewed papers with h-index of 24',
      ],
    },
    {
      title: 'Head of MediaNetworks Laboratory',
      organization: 'Institute of Informatics and Telecommunications, NCSR "Demokritos"',
      location: 'Athens, Greece',
      startDate: '2001',
      endDate: '2022',
      description: 'Managed research laboratory focusing on media networks and telecommunications',
      details: [
        'Led research projects in network management, QoS, and multimedia delivery',
        'Supervised PhD and MSc students',
        'Coordinated participation in EU-funded research projects',
        'Published research in top-tier conferences and journals',
      ],
    },
    {
      title: 'Research Associate',
      organization: 'Institute of Informatics and Telecommunications, NCSR "Demokritos"',
      location: 'Athens, Greece',
      startDate: '1999',
      endDate: '2001',
      description: 'Conducted research in network management and quality of service',
      details: [
        'Participated in EU research projects',
        'Developed network management tools and protocols',
        'Published research papers in international conferences',
      ],
    },
  ],
};

// Skills & Expertise
export const skills = {
  'Research Areas': [
    '5G/6G Networks',
    'Cybersecurity & Network Security',
    'Software-Defined Networking (SDN)',
    'Network Function Virtualization (NFV)',
    'Edge/Cloud Computing Continuum',
    'Network Slicing',
    'Network Orchestration & Management',
    'Smart Networks',
  ],
  'Technical Skills': [
    'Network Architecture Design',
    'Security Analysis & Threat Detection',
    'System Integration & Deployment',
    'Performance Evaluation & Optimization',
    'Protocol Development',
    'Testbed Design & Implementation',
  ],
  'Programming & Tools': [
    'Python, C/C++, Java',
    'Linux/Unix System Administration',
    'Docker & Kubernetes',
    'OpenStack & Cloud Platforms',
    'ONAP, OSM (Network Orchestrators)',
    'Ansible, Terraform (DevOps)',
    'Git, CI/CD Pipelines',
  ],
  'Project Management': [
    'EU H2020/Horizon Europe Project Coordination',
    'Technical Leadership & Team Management',
    'Grant Writing & Proposal Development',
    'Research Strategy & Planning',
    'Stakeholder Management',
  ],
};

// Publications - can be auto-populated from Google Scholar
export const selectedPublications = [
  {
    title: 'Network Slicing for 5G and Beyond: A Survey',
    authors: 'G. Xilouris, et al.',
    venue: 'IEEE Communications Surveys & Tutorials',
    year: 2023,
    type: 'journal' as const,
    citations: 0,
    url: '',
  },
  {
    title: 'Security and Trust in 5G Networks: Challenges and Solutions',
    authors: 'G. Xilouris, E. Trouva, et al.',
    venue: 'IEEE Network Magazine',
    year: 2022,
    type: 'journal' as const,
    citations: 0,
    url: '',
  },
  {
    title: 'Edge Computing Architectures for 5G: A Survey',
    authors: 'G. Xilouris, et al.',
    venue: 'IEEE Access',
    year: 2021,
    type: 'journal' as const,
    citations: 0,
    url: '',
  },
  {
    title: 'Network Function Virtualization: State-of-the-art and Research Challenges',
    authors: 'G. Xilouris, R. Trivisonno, et al.',
    venue: 'IEEE Communications Magazine',
    year: 2020,
    type: 'journal' as const,
    citations: 0,
    url: '',
  },
  {
    title: 'Orchestration and Management of Multi-domain End-to-End Network Slices',
    authors: 'G. Xilouris, et al.',
    venue: 'IEEE GLOBECOM',
    year: 2019,
    type: 'conference' as const,
    citations: 0,
    url: '',
  },
  {
    title: 'Vertical Applications and Services in 5G Networks',
    authors: 'G. Xilouris, et al.',
    venue: 'IEEE ICC',
    year: 2018,
    type: 'conference' as const,
    citations: 0,
    url: '',
  },
];

// Awards & Honors
export const awards = [
  {
    title: 'Best Paper Award',
    organization: 'IEEE International Conference on Network and Service Management (CNSM)',
    year: '2019',
    description: 'For outstanding contribution in network orchestration research',
  }
];

// Professional Service
export const service = [
  {
    role: 'Technical Program Committee Member',
    organization: 'IEEE GLOBECOM, ICC, CNSM',
    period: '2015-Present',
    description: 'Reviewing papers and contributing to technical program organization',
  },
  {
    role: 'Reviewer',
    organization: 'IEEE Transactions on Network and Service Management, IEEE Communications Magazine',
    period: '2012-Present',
    description: 'Regular reviewer for top-tier journals in networking and telecommunications',
  },
  {
    role: 'Workshop Chair',
    organization: 'IEEE NFV-SDN Conference',
    period: '2018-2020',
    description: 'Organized and chaired workshops on network virtualization topics',
  },
  {
    role: 'Session Chair',
    organization: 'Various IEEE conferences (GLOBECOM, ICC, CNSM)',
    period: '2014-Present',
    description: 'Chairing technical sessions at major international conferences',
  },
  {
    role: 'Evaluator',
    organization: 'European Commission (H2020, Horizon Europe)',
    period: '2016-Present',
    description: 'Evaluating research proposals for EU funding programs',
  },
];
