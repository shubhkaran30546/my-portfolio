// Single source of truth for every fact on the page.
// Metrics written as "150K+", "99.9%", "1,000+", "40%" are highlighted automatically.

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

export const person = {
  name: ['Shubhkaran', 'Dhillon'],
  role: 'Software Engineer',
  company: 'FastTrack',
  location: 'Edmonton, AB',
  timeZone: 'America/Edmonton',
  coords: { lat: 53.5461, lng: -113.4938 },
  email: 'shubh.karan30@gmail.com',
  github: 'https://github.com/shubhkaran30546',
  linkedin: 'https://www.linkedin.com/in/shubhkaran-dhillon-a73651217',
  resume: asset('/SWE_dhillon.pdf'),
  resumeFileName: 'Shubhkaran_Dhillon_Resume.pdf',
  photo: {
    small: asset('/img/golden-hour-900.jpg'),
    large: asset('/img/golden-hour-1400.jpg'),
    alt: 'Shubhkaran Dhillon leaning on a rooftop railing at sunset, hills and a golf course glowing behind him.',
  },
};

export const signal = [
  { value: 150, suffix: 'K+', label: 'Users served', note: 'LMS & exam platform' },
  { value: 99.9, decimals: 1, suffix: '%', label: 'Uptime', note: 'Held while scaling' },
  { value: 20, prefix: '−', suffix: '%', label: 'Cloud spend', note: 'Right-sizing & auto-scaling' },
  { value: 70, prefix: '−', suffix: '%', label: 'Debugging time', note: 'CI/CD triage agent' },
];

export const releases = [
  {
    version: 'v2.0',
    company: 'FastTrack Technologies Inc.',
    role: 'Software Engineer',
    location: 'Edmonton, AB',
    start: '2026-03',
    end: null,
    period: 'Mar 2026 – Present',
    highlights: [
      'Own end-to-end backend and cloud infrastructure for a production LMS and examination platform serving public universities and 150K+ users, including incident response, capacity planning, and architecture decisions.',
      'Built cloud-native infrastructure on AWS (S3, ECS, RDS, ElastiCache), achieving 99.9% uptime, improving performance by 30%, and reducing latency by 25%.',
      'Built a CI/CD failure triage agent using LangGraph that autonomously investigates failed pipeline runs, classifies root cause, and posts structured summaries to Slack, reducing mean debugging time by 70%.',
      'Implemented Infrastructure as Code using Terraform, reducing manual configuration errors by 90% and cutting environment provisioning time by 60%.',
      'Led cloud cost optimization initiatives across AWS services, reducing monthly infrastructure spend by 20% through right-sizing, auto-scaling, and resource cleanup.',
    ],
  },
  {
    version: 'v1.0',
    company: 'Cardify',
    role: 'Software Engineer Intern',
    location: 'Remote',
    start: '2025-01',
    end: '2025-08',
    period: 'Jan 2025 – Aug 2025',
    highlights: [
      'Built a full-stack digital business card platform using Spring Boot, React, and PostgreSQL, onboarding 1,000+ users during pilot testing.',
      'Designed an AI agent to generate optimized profile content from user inputs, reducing onboarding time by 35% and increasing profile completion rate by 40%.',
      'Optimized PostgreSQL schema and queries through indexing and restructuring, improving database efficiency by 25%.',
    ],
  },
];

export const featuredProject = {
  title: 'Cardify',
  purpose: 'Platform for digital business cards with portfolio integration.',
  status: 'Piloted with 1,000+ users',
  stack: ['Spring Boot', 'React', 'PostgreSQL', 'Google OAuth2', 'JWT', 'AI agent'],
  mark: asset('/logo1.png'),
  link: 'https://github.com/shubhkaran30546/cardify',
};

export const projects = [
  {
    title: 'QR Code Event Check-In',
    purpose: 'Android app for event check-ins via QR code.',
    kind: 'Android app',
    stack: ['Android', 'QR'],
    image: asset('/img/app-720.jpg'),
    link: 'https://github.com/qr-check-in/qr-check-in-app',
  },
  {
    title: 'CodeTweet',
    purpose: 'Secure command line project using Python and SQLite.',
    kind: 'Command-line tool',
    stack: ['Python', 'SQLite', 'CLI'],
    image: asset('/img/codetweet-720.jpg'),
    link: 'https://github.com/shubhkaran30546/CodeTweet-SQL-Backed-Command-Line-Interface',
  },
  {
    title: 'FEELFLOW',
    purpose: 'Emotion regulation app built for a NeuroTech Hackathon.',
    kind: 'Hackathon build',
    stack: ['Hackathon', 'NeuroTech'],
    image: asset('/img/feelflow-720.jpg'),
    link: 'https://github.com/vishwa702/classy-fire',
  },
  {
    title: 'SPARK',
    purpose: 'Online computer store with order management features.',
    kind: 'Web store',
    stack: ['E-commerce', 'Order management'],
    image: asset('/img/spark-720.jpg'),
    link: 'https://github.com/shubhkaran30546/spark',
  },
];

// Ordered top (closest to the user) to bottom (closest to the metal).
export const stackLayers = [
  { id: 'frontend', name: 'Frontend', items: ['React.js', 'HTML', 'CSS'] },
  {
    id: 'apis',
    name: 'APIs & services',
    items: ['Spring Boot', 'Django', 'FastAPI', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    id: 'data',
    name: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Firebase', 'Redis', 'Kafka'],
  },
  {
    id: 'infra',
    name: 'Cloud & infra',
    items: [
      'AWS — EC2 · S3 · Lambda · RDS · SQS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD',
      'Load balancing',
      'Horizontal scaling',
      'Networking',
    ],
  },
];

export const languages = ['Java', 'Python', 'JavaScript / TypeScript', 'Go', 'SQL'];

export const credentials = [
  {
    name: 'AWS Certified Cloud Practitioner',
    short: 'Cloud Practitioner',
    issuer: 'AWS',
    image: asset('/img/aws-certified-cloud-practitioner-240.png'),
    link: 'https://www.credly.com/badges/12005245-6f29-4683-a591-448b6aec29e1/public_url',
  },
  {
    name: 'AWS Certified Developer – Associate',
    short: 'Developer Associate',
    issuer: 'AWS',
    image: asset('/img/aws-certified-developer-associate-240.png'),
    link: 'https://www.credly.com/badges/11e69393-55d1-4afd-a436-a2c83d8e03f9/public_url',
  },
  {
    name: 'AWS Cloud Quest',
    short: 'Cloud Quest',
    issuer: 'AWS',
    image: asset('/img/cloud-quest-240.png'),
    link: 'https://www.credly.com/badges/bb9722f2-bdd5-4ed1-a38a-28115721848c/public_url',
  },
  {
    name: 'Linux Professional Institute',
    short: 'LPI Linux',
    issuer: 'LPI',
    image: asset('/img/linux-240.png'),
    link: 'https://www.credly.com/badges/3924dcb3-ba73-4c29-b83f-cd394b8d112e/public_url',
  },
];

export const education = {
  degree: 'BSc, Computing Science',
  school: 'University of Alberta',
  focus: 'Software development, networking, and cloud computing',
  logo: asset('/img/ualberta-160.png'),
};

export const sections = [
  { id: 'signal', label: 'Signal' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];
