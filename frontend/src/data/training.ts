export const bootcamp = {
  headline: 'Launch Your Tech Career',
  subheadline: 'Intensive, hands-on cohort programs that take you from beginner to job-ready in months, not years.',
  duration: '3–6 months',
  format: 'In-person & Online',
  intakeFrequency: 'Quarterly intakes',
  location: 'Port Harcourt, Nigeria (+ Remote)',
  tracks: [
    {
      id: 'web-dev',
      title: 'Full-Stack Web Development',
      duration: '6 months',
      description:
        'Master the complete web stack from HTML/CSS through React and Node.js. Build real projects, deploy to production, and graduate with a portfolio that gets you hired.',
      curriculum: ['HTML, CSS, JavaScript fundamentals', 'React & modern frontend', 'Node.js & REST APIs', 'Databases (SQL & NoSQL)', 'Git, deployment & DevOps basics', 'Capstone project'],
      icon: 'monitor',
      color: 'blue',
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      duration: '4 months',
      description:
        'Build cross-platform iOS and Android applications using React Native. From UI components to API integration and App Store submission.',
      curriculum: ['JavaScript & TypeScript', 'React Native fundamentals', 'Navigation & state management', 'Integrating REST APIs', 'Local storage & offline mode', 'App Store deployment'],
      icon: 'smartphone',
      color: 'teal',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      duration: '3 months',
      description:
        'Learn to design beautiful, user-centered digital products. Work with Figma, conduct user research, and build a professional design portfolio.',
      curriculum: ['Design principles & typography', 'Figma from scratch', 'User research & personas', 'Wireframing & prototyping', 'Design systems & tokens', 'Portfolio project'],
      icon: 'pen-tool',
      color: 'purple',
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      duration: '4 months',
      description:
        'Turn raw data into business decisions. Learn Python, SQL, and visualisation tools used by analysts at top companies — no prior coding required.',
      curriculum: ['Python for data (pandas, NumPy)', 'SQL & database querying', 'Data cleaning & wrangling', 'Visualisation with Power BI & Matplotlib', 'Statistical thinking & reporting', 'Capstone analytics project'],
      icon: 'bar-chart',
      color: 'green',
    },
  ],
  outcomes: [
    'Job-ready portfolio with real projects',
    'Certificate of completion from Ububa Technology',
    'Mentorship from working engineers and designers',
    "Access to Ububa's hiring network",
    'Lifetime alumni community access',
  ],
}

export const corporateTraining = {
  headline: 'Upskill Your Team',
  subheadline:
    'Tailored technical training workshops delivered at your offices or remotely. We design the curriculum around your stack, your team, and your timeline.',
  deliveryModes: ['On-site (Port Harcourt & travel)', 'Remote / virtual', 'Hybrid'],
  topics: [
    {
      title: 'Modern Web Development',
      description: 'React, TypeScript, API design, and deployment best practices for development teams.',
      duration: '2–5 days',
      icon: 'code',
    },
    {
      title: 'Mobile Development with React Native',
      description: 'Hands-on workshop for teams moving to cross-platform mobile development.',
      duration: '3–5 days',
      icon: 'smartphone',
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'SQL, Python, Power BI, and dashboard design for teams that need to make data-driven decisions.',
      duration: '3–5 days',
      icon: 'bar-chart',
    },
    {
      title: 'UI/UX for Engineering Teams',
      description: 'Design thinking, Figma, and design system fundamentals for engineers who work with designers.',
      duration: '2–3 days',
      icon: 'pen-tool',
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Executive and leadership workshops on technology strategy, software procurement, and digital readiness.',
      duration: '1–2 days',
      icon: 'trending-up',
    },
  ],
  benefits: [
    'Custom curriculum tailored to your team',
    'Pre-training assessment to baseline skills',
    'Hands-on labs and real-world exercises',
    'Post-training support and Q&A access',
    'Completion certificates for all participants',
  ],
}
