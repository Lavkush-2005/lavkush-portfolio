// Content for the Certifications section. A flat `certifications`
// array — adding a certificate later (up to 15-20+) is just appending
// another object here; CertificationCarousel/CertificationCard never
// need to change. All 7 entries are real certifications. Entry 5's
// PDF is temporarily null — see its inline comment.
//
// image/pdf: real local paths under /public/certifications/.
// `credentialId` is stored for reference but is not currently
// rendered by CertificationCard.

export const certificationsContent = {
  label: 'Certifications',
  heading: 'Certifications & learning',
  description:
    'A running record of courses and certifications behind the skills above.',

  certifications: [
    {
      id: 1,
      title: 'Data Analyst Training',
      issuer: 'Elevance Skills',
      date: 'Feb 23, 2026',
      image: '/certifications/data-analyst-training.png',
      pdf: '/certifications/data-analyst-training.pdf',
      credentialId: '699c2449dd3b5a453245bf7e',
    },
    {
      id: 2,
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google / Coursera',
      date: 'Jul 17, 2026',
      image: '/certifications/google-data-analytics.jpg',
      pdf: '/certifications/google-data-analytics.pdf',
      credentialId: 'IDSCW2J5X8AK',
    },
    {
      id: 3,
      title: 'Introduction to Data Analytics',
      issuer: 'Meta / Coursera',
      date: 'Mar 15, 2026',
      image: '/certifications/meta-data-analytics.jpg',
      pdf: '/certifications/meta-data-analytics.pdf',
      credentialId: 'VBTRJ7LX68HM',
    },
    {
      id: 4,
      title: 'Prompt Engineering',
      issuer: 'Vanderbilt University / Coursera',
      date: 'Jul 28, 2026',
      image: '/certifications/prompt-engineering.jpg',
      pdf: '/certifications/prompt-engineering.pdf',
      credentialId: 'DR8YDLEOEBYB',
    },
    {
      id: 5,
      title: 'Introduction to Structured Query Language (SQL)',
      issuer: 'University of Michigan / Coursera',
      date: 'Feb 19, 2026',
      image: '/certifications/sql.jpg',
      pdf: '/certifications/sql.pdf',
      credentialId: '31LZ1KA4BTIF',
    },
    {
      id: 6,
      title: 'Getting Started with Microsoft Fabric',
      issuer: 'Whizlabs / Coursera',
      date: 'Aug 1, 2026',
      image: '/certifications/microsoft-fabric.jpg',
      pdf: '/certifications/microsoft-fabric.pdf',
      credentialId: '0ZI1ZD3GBND7',
    },
    {
      id: 7,
      title: 'Power BI for Beginners',
      issuer: 'Simplilearn / Microsoft Courses',
      date: 'Mar 10, 2026',
      image: '/certifications/power-bi.jpg',
      pdf: '/certifications/power-bi.pdf',
      credentialId: '9943287',
    },
  ],
};

export default certificationsContent;
