import type { CVSection } from '../types';

// Education Section
export const education: CVSection = {
  title: 'Education',
  items: [
    {
      title: 'Ph.D. in [Your Field]',
      organization: '[University Name]',
      location: 'Athens, Greece',
      startDate: '20XX',
      endDate: 'Present',
      description: 'Dissertation: [Your dissertation title]',
      details: [
        'Research focus: [Your research areas]',
        'Advisor: [Advisor name]',
      ],
    },
    {
      title: 'M.Sc. in [Your Field]',
      organization: '[University Name]',
      location: '[Location]',
      startDate: '20XX',
      endDate: '20XX',
      description: 'Thesis: [Your thesis title]',
      details: [],
    },
    {
      title: 'B.Sc. in [Your Field]',
      organization: '[University Name]',
      location: '[Location]',
      startDate: '20XX',
      endDate: '20XX',
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
      title: 'Head of CORE Research Group',
      organization: 'Institute of Informatics and Telecommunications, NCSR "Demokritos"',
      location: 'Athens, Greece',
      startDate: '20XX',
      endDate: 'Present',
      description: 'Leading research group focused on next-generation networks and cybersecurity',
      details: [
        'Manage team of [X] researchers and PhD students',
        'Principal Investigator on multiple EU-funded projects',
        'Research in 5G/6G networks, network security, and SDN/NFV',
        'Published [X] peer-reviewed papers',
      ],
    },
    {
      title: 'Head of Network Operations Center (NOC)',
      organization: 'NCSR "Demokritos"',
      location: 'Athens, Greece',
      startDate: '20XX',
      endDate: 'Present',
      description: 'Managing network infrastructure and operations',
      details: [
        'Oversee network infrastructure and security',
        'Team management and strategic planning',
        'Implementation of network monitoring and management systems',
      ],
    },
    // Add more positions as needed
  ],
};

// Skills & Expertise
export const skills = {
  'Research Areas': [
    '5G/6G Networks',
    'Cybersecurity',
    'Software-Defined Networking (SDN)',
    'Network Function Virtualization (NFV)',
    'Edge Computing',
    'Network Slicing',
    'Network Orchestration',
  ],
  'Technical Skills': [
    'Network Architecture Design',
    'Security Analysis',
    'System Integration',
    'Performance Evaluation',
    'Protocol Development',
  ],
  'Programming & Tools': [
    'Python',
    'Linux/Unix',
    'Network Simulation Tools',
    'Cloud Platforms',
    'Orchestration Tools',
  ],
  'Project Management': [
    'EU Project Coordination',
    'Technical Leadership',
    'Grant Writing',
    'Team Management',
  ],
};

// Publications - can be auto-populated from Google Scholar
export const selectedPublications = [
  {
    title: '[Your Key Publication Title]',
    authors: 'Author list',
    venue: 'Conference/Journal Name',
    year: 2024,
    type: 'journal' as const,
    citations: 0,
    url: '',
  },
  // Add more key publications
];

// Awards & Honors
export const awards = [
  {
    title: '[Award Name]',
    organization: '[Granting Organization]',
    year: '20XX',
    description: '[Brief description of the award]',
  },
  // Add more awards
];

// Professional Service
export const service = [
  {
    role: '[Role Name]',
    organization: '[Organization/Conference]',
    period: '20XX-Present',
    description: '[Brief description]',
  },
  // Add more service activities
];
