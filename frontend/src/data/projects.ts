export interface Project {
  id: string;
  title: string;
  client: string;
  country: string;
  countryCode: string;
  category: string;
  description: string;
  outcomes: string[];
  tech: string[];
  image: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'uniport-portal',
    title: 'Student Management Portal',
    client: 'University of Port Harcourt (Uniport)',
    country: 'Nigeria',
    countryCode: 'NG',
    category: 'Enterprise Software',
    description:
      'A comprehensive student information system for one of Nigeria\'s largest federal universities. The platform manages student registration, course allocation, academic records, fee payments, and administrative workflows across faculties.',
    outcomes: [
      'Serving 50,000+ active students and staff',
      'Eliminated manual paper-based registration',
      'Reduced administrative processing time by 70%',
      'Integrated with university payment gateway',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Role-based access control'],
    image: '/images/softwareDev.jpg',
    featured: true,
    year: 2019,
  },
  {
    id: 'touchstone-platform',
    title: 'Healthcare Education Platform',
    client: 'Touchstone Institute',
    country: 'Canada',
    countryCode: 'CA',
    category: 'Web Application',
    description:
      'A digital platform for Touchstone Institute, a Toronto-based organization that assesses and supports internationally trained healthcare professionals. The system manages candidate assessment workflows, scheduling, and results tracking.',
    outcomes: [
      'Streamlined assessment scheduling for hundreds of candidates',
      'Automated results notification and candidate communication',
      'Full audit trail for regulatory compliance',
      'Accessible from Canada and internationally',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Email automation'],
    image: '/images/appDev.jpg',
    featured: true,
    year: 2021,
  },
  {
    id: 'climax-ims',
    title: 'Inventory & Equipment Management System',
    client: 'Climax Inspection Service',
    country: 'Nigeria',
    countryCode: 'NG',
    category: 'Enterprise Software',
    description:
      'A purpose-built inventory and equipment tracking system for an oil and gas inspection services firm. The system manages equipment lifecycle, maintenance schedules, deployment logs, and compliance documentation.',
    outcomes: [
      'Full visibility into equipment location and status',
      'Maintenance schedule automation reduced downtime',
      'Compliance documentation always audit-ready',
      'Reduced equipment loss through real-time tracking',
    ],
    tech: ['React', 'Express.js', 'MongoDB', 'Barcode scanning', 'PDF reporting'],
    image: '/images/climax-engineers.png',
    featured: true,
    year: 2020,
  },
  {
    id: 'kemcolfarms',
    title: 'Kemcolfarms Agro E-Commerce',
    client: 'Kemcolfarms',
    country: 'Nigeria',
    countryCode: 'NG',
    category: 'E-Commerce',
    description:
      'An agriculture-focused e-commerce platform connecting Nigerian farmers directly to buyers, retailers, and exporters. The platform supports product listings, order management, delivery logistics, and multi-channel payment processing.',
    outcomes: [
      'Connected 200+ farmers to verified buyers',
      'Integrated Paystack and bank transfer payments',
      'Mobile-first design reaching rural sellers',
      'Built-in logistics and delivery tracking',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Paystack', 'React Native'],
    image: '/images/ecommerce.jpg',
    featured: true,
    year: 2022,
  },
];
