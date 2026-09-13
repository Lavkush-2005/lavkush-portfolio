// Content for the Projects section. A single, flat `projects` array —
// each entry is self-contained and carries its own `featured` flag, so
// the UI (Projects.jsx) picks the featured project from this same
// source instead of duplicating project data in a separate object.
//
// Adding a project later — up to 15+ — is just appending another
// object to this array; Projects.jsx, FeaturedProject, and ProjectCard
// all render dynamically from it and need no changes.
//
// `image` is left `null` for every placeholder project — ImagePlaceholder
// shows its dashed-border placeholder box until a real image path is
// supplied. Only a GitHub repository link is supported; there is no
// live-demo, report, or download field by design.

export const projectsContent = {
  label: 'Projects',
  heading: 'Selected work',
  description:
    'A mix of dashboards, analysis, and end-to-end data projects — placeholders for now, real write-ups and links coming soon.',

  projects: [
    {
      id: 1,
      title: 'Customer Churn & Retention Analysis',
      description:
        'An end-to-end churn analysis built with SQL and Python — cleaning customer data, engineering churn-risk signals, and visualizing retention, plan-level churn, and support-escalation correlation to support retention decisions.',
      image: '/projects/customer-churn-retention.png',
      technologies: ['Python', 'SQL/SQLite', 'Pandas', 'NumPy', 'Matplotlib/Seaborn'],
      githubUrl: 'https://github.com/Lavkush-2005/customer-churn-retention-analysis',
      featured: true,
    },
    {
      id: 2,
      title: 'Samsung Supply Chain & Logistics Analytics Dashboard',
      description:
        'A Power BI dashboard analyzing Samsung\u2019s supply chain and logistics — supplier lead times, inventory levels, shipment and carrier delay performance, and revenue by platform, modeled end-to-end with DAX.',
      image: '/projects/samsung-supply-chain.jpg',
      technologies: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
      githubUrl: 'https://github.com/Lavkush-2005/supply-chain-analytics-dashboard-powerbi',
      featured: false,
    },
    {
      id: 3,
      title: 'Customer Behavior & Segmentation Analysis',
      description:
        'A Python, SQL, and Power BI analysis of customer purchasing behavior — segmenting customers by subscription status, category, and age group to explore revenue and sales patterns across the customer base.',
      image: '/projects/customer-behavior-segmentation.jpg',
      technologies: ['Python', 'PostgreSQL', 'SQL', 'Power BI'],
      githubUrl: 'https://github.com/Lavkush-2005/customer-behavior_segmentation-analysis',
      featured: false,
    },
    {
      id: 4,
      title: 'Hotel Booking & Cancellation Analysis',
      description:
        'An exploratory analysis of hotel booking data using Python and Pandas — examining booking and cancellation patterns, average daily rate (ADR) trends, and seasonality across city and resort hotels.',
      image: '/projects/hotel-booking-analysis.png',
      technologies: ['Python', 'Pandas', 'Exploratory Data Analysis'],
      githubUrl: 'https://github.com/Lavkush-2005/hotel-booking-analysis',
      featured: false,
    },
    {
      id: 5,
      title: 'Zepto Sales & Inventory Analysis',
      description:
        'A SQL and PostgreSQL analysis of Zepto sales and inventory data — covering product pricing, discounting, stock availability, and category-level revenue after data cleaning.',
      image: '/projects/zepto-sales-inventory.png',
      technologies: ['SQL', 'PostgreSQL'],
      githubUrl: 'https://github.com/Lavkush-2005/zepto-data-analysis',
      featured: false,
    },
    {
      id: 6,
      title: 'Iris Flower Classification',
      description:
        'A machine learning classification project using flower measurements to classify Iris species with Logistic Regression, built with Python, Pandas, NumPy, Matplotlib, and Scikit-learn.',
      image: '/projects/iris-flower-classification.png',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Logistic Regression'],
      githubUrl: 'https://github.com/Lavkush-2005/iris_flower_classification_machine_learning',
      featured: false,
    },
    {
      id: 7,
      title: 'Project Seven',
      description: 'Short, professional placeholder description of this project — problem, approach, outcome.',
      image: null,
      technologies: ['Power BI', 'Data Visualization'],
      githubUrl: '#',
      featured: false,
    },
  ],
};

export default projectsContent;
