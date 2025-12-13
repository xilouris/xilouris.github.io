import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Your Name', // TODO: Replace with actual name
  title: 'Research Group Leader | Network Security Researcher',
  affiliation: 'CORE Research Group, Institute of Informatics and Telecommunications',
  affiliationUrl: 'https://www.iit.demokritos.gr/',
  bio: `I am a researcher specializing in networks and cybersecurity at the CORE Research Group,
Institute of Informatics and Telecommunications, NCSR "Demokritos". My research focuses on
next-generation network architectures, network security, and emerging technologies for
telecommunications infrastructure.`,
  email: '', // TODO: Add your email
  location: 'Athens, Greece',
  profileImage: '/images/profile.jpg',
  cvUrl: '/files/cv.pdf',
  socialLinks: {
    googleScholar: '', // TODO: Add Google Scholar URL
    orcid: '', // TODO: Add ORCID if available
    researchGate: '', // TODO: Add ResearchGate if available
    linkedin: '', // TODO: Add LinkedIn
    github: 'https://github.com/xilouris',
    twitter: '', // Optional
  },
  researchInterests: [
    '5G/6G Networks',
    'Network Security',
    'Software-Defined Networking',
    'Network Function Virtualization',
    'Cybersecurity',
    'Edge Computing',
    'Network Slicing',
    'Network Monitoring and Analytics'
  ]
};
