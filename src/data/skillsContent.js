// Content for the Skills section. Mirrors the convention used by
// aboutContent.js — section-specific copy lives here, not hardcoded
// inside the component.

export const skillsContent = {
  label: 'Skills',
  heading: 'What I work with',
  description:
    'A practical toolkit spanning programming, databases, and BI tools — for turning raw data into decisions.',
  categories: [
    {
      icon: 'code',
      title: 'Data & Programming',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      icon: 'tool',
      title: 'Databases / SQL',
      skills: ['SQL', 'PostgreSQL', 'MySQL'],
    },
    {
      icon: 'chart',
      title: 'BI & Analytics',
      skills: [
        'Power BI',
        'Excel',
        'Statistics',
        'Data Modeling',
        'Exploratory Data Analysis (EDA)',
        'Data Cleaning',
        'Data Validation',
        'KPI & Business Metrics Reporting',
      ],
    },
  ],
};

export default skillsContent;
