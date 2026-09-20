// Central place for site-wide content (name, role, nav links, socials).
// Populated in Phase 1B as the Navbar, Hero, and Footer are built —
// those components import from here instead of hardcoding copy.

export const siteConfig = {
  name: 'Lavkush',
  initials: 'LK',
  role: 'Data Analyst',
  roles: [
    'Data Analyst',
    'Data Storyteller',
    'SQL & Python Learner',
    'Insight Generator',
  ],
  tagline: "Making data simple, useful, and actionable.",
  resumeUrl: '#',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Lavkush-2005', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lavkush2005kumar/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:lovkush7535@gmail.com', icon: 'mail' },
  ],
};

export default siteConfig;
