// Content for the About section. Kept separate from siteConfig.js since
// this is section-specific copy, not site-wide identity — mirrors the
// convention already used for Navbar/Footer/Hero content in src/data/.
// All values here are placeholders, easy to replace later.

export const aboutContent = {
  intro:
    "My background is in IT, and I always wanted to build a career in a technology-driven role. Traditional, coding-heavy development roles didn't quite pull me in the way I expected — what did was Data Analytics, where technology, analytical problem-solving, and business understanding come together.",
  mission:
    "I'm at an intermediate, hands-on stage of this journey. I've worked with datasets spanning customer churn and retention, customer behavior, supply chain, hotel bookings, and sales and inventory analysis — cleaning and exploring data, writing SQL queries, developing KPIs, building Power BI dashboards, and working through data modeling along the way.",
  objective:
    "Right now, I'm looking for Data Analyst and Junior Data Analyst roles where I can keep building on this foundation. Longer term, my goal is to keep growing in analytics and, after gaining solid industry experience, move toward Data Science.",
  highlights: [
    {
      icon: 'lightbulb',
      title: 'Problem Solving',
      description: 'Breaking down ambiguous business questions into clear, testable data problems.',
    },
    {
      icon: 'chart',
      title: 'Data Analytics',
      description: 'Cleaning, exploring, and modeling data with SQL and Python to surface real insight.',
    },
    {
      icon: 'dashboard',
      title: 'Dashboard Development',
      description: 'Building interactive Power BI / Tableau dashboards people actually want to use.',
    },
    {
      icon: 'learning',
      title: 'Continuous Learning',
      description: 'Constantly picking up new tools, certifications, and techniques in the data space.',
    },
  ],
  stats: [
    { label: 'Projects Completed', value: 12, suffix: '+' },
    { label: 'Certificates Earned', value: 5, suffix: '+' },
    { label: 'Technologies', value: 10, suffix: '+' },
    { label: 'Learning Journey', value: 2, suffix: ' yrs' },
  ],
};

export default aboutContent;
