import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Georgios Xylouris',
  title: 'Head of NOC at NCSR "Demokritos" | Head of CORE Research Group',
  affiliation: 'Institute of Informatics and Telecommunications',
  affiliationUrl: 'https://www.iit.demokritos.gr/',
  bio: `I am a researcher specializing in networks and cybersecurity at the CORE Research Group,
Institute of Informatics and Telecommunications, NCSR "Demokritos". My research focuses on
next-generation network architectures, network security, and emerging technologies for
telecommunications infrastructure.`,
  email: 'xilouris@iit.demokritos.gr', // TODO: Add your email
  location: 'Athens, Greece',
  profileImage: '/images/profile.jpeg',
  cvUrl: '/files/cv.pdf',
  socialLinks: {
    googleScholar: 'https://scholar.google.com/citations?user=eydLJrwAAAAJ&hl=en', // TODO: Add Google Scholar URL
    orcid: 'https://orcid.org/0000-0003-2695-4534', // TODO: Add ORCID if available
    researchGate: '', // TODO: Add ResearchGate if available
    linkedin: 'https://www.linkedin.com/in/xilouris/', // TODO: Add LinkedIn
    github: 'https://github.com/xilouris',
    twitter: 'https://x.com/xilouris', // Optional
  },
  researchInterests: [
    '5G/6G Networks',
    'Cybersecurity',
    'Smart Networks',
    'Cloud/Edge Continuum',
    'Network Orchestration and Management',
    'Network Performance'
  ]
};
