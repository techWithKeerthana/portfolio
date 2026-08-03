export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const heroData = {
  name: 'Keerthana M',
  title: 'Software Developer | AIML Enthusiast',
  tagline:
    'Building at the intersection of intelligent systems and interactive interfaces.',
  location: 'Bengaluru, Karnataka, India',
  ctas: {
    projects: '#projects',
    contact: '#contact',
    resume: '/KeerthanaM_Resume.pdf',
  },
  social: {
    github: 'https://github.com/techWithKeerthana',
    linkedin: 'https://www.linkedin.com/in/keerthana-m-31357a421',
  },
}

export const aboutData = {
  summary:
    'AI/ML and Full Stack Developer with hands-on experience in building scalable web applications and AI-powered solutions using React.js, Node.js, Python, FastAPI, PostgreSQL, MongoDB, and Generative AI.',
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const skillsData: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'Machine Learning',
      'Generative AI',
      'NLP',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
    ],
  },
  {
    category: 'Web Development',
    items: [
      'React.js',
      'Node.js',
      'Express.js',
      'HTML5',
      'CSS3',
      'REST APIs',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Vercel',
      'Render',
      'VS Code',
      'Postman',
    ],
  },
]

export type Project = {
  title: string
  duration: string
  stack: string[]
  description: string
  githubUrl: string
  liveUrl: string
  stages: string[]
  featured?: boolean
}

export const projectsData: Project[] = [
  {
    title: 'Eduverse AI – AI-Powered Personalized Learning Platform',
    duration: '06/2026 - Present',
    stack: [
      'React.js',
      'Node.js',
      'FastAPI',
      'PostgreSQL',
      'RAG',
      'Groq LLM',
      'ONNX',
      'ChromaDB',
    ],
    description:
      'Full-stack AI learning platform with a RAG pipeline letting students query uploaded study materials via vector search. Integrates Groq LLM APIs, ONNX-based embeddings, and ChromaDB for fast semantic retrieval with scalable REST APIs, auth, document processing, and AI-powered chat.',
    githubUrl: 'https://github.com/techWithKeerthana/Eduverse_AI.git',
    liveUrl: 'https://eduverse-ai-alpha.vercel.app',
    stages: ['ingest', 'embed', 'retrieve', 'generate'],
    featured: true,
  },
  {
    title: 'Queue Management System',
    duration: '06/2026 - 07/2026',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
    description:
      'Real-time queue management system with customer registration, token generation, live queue tracking, JWT authentication, and Socket.IO updates.',
    githubUrl: 'https://github.com/techWithKeerthana',
    liveUrl: 'https://rugas-queue-management-system.vercel.app',
    stages: ['capture', 'queue', 'sync', 'serve'],
  },
  {
    title: 'Automated Outreach Pipeline',
    duration: '05/2026 - 06/2026',
    stack: ['Python', 'Generative AI', 'APIs', 'Automation', 'Email Workflow'],
    description:
      'AI-powered outreach automation that generates personalized emails through a modular Python pipeline built for iterative prompt and workflow tuning.',
    githubUrl: 'https://github.com/techWithKeerthana',
    // TODO: replace with live deployed URL
    liveUrl: 'https://your-automated-outreach-pipeline.vercel.app',
    stages: ['ingest', 'compose', 'review', 'dispatch'],
  },
  {
    title: 'Solar Panel Degradation Predictor',
    duration: '05/2026 - 06/2026',
    stack: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modeling'],
    description:
      'Machine learning model that predicts solar panel degradation from historical and environmental features to support performance planning.',
    githubUrl: 'https://github.com/techWithKeerthana',
    // TODO: replace with live deployed URL
    liveUrl: 'https://your-solar-panel-degradation-predictor.vercel.app',
    stages: ['collect', 'train', 'evaluate', 'forecast'],
  },
  {
    title: 'Accredian Enterprise Clone',
    duration: '07/2026 - 07/2026',
    stack: ['React.js', 'TypeScript', 'Node.js', 'REST APIs', 'Responsive UI'],
    description:
      "Responsive enterprise web application recreating Accredian platform's core functionality with robust API integration and usability focus.",
    githubUrl: 'https://github.com/techWithKeerthana',
    liveUrl: 'https://accredian-clone-taupe.vercel.app',
    stages: ['map', 'build', 'integrate', 'ship'],
  },
]

export type EducationItem = {
  degree: string
  institution: string
  location: string
  duration: string
}

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. in Artificial Intelligence and Machine Learning',
    institution: 'Rajeev Institute of Technology',
    location: 'Hassan, Karnataka',
    duration: '10/2023 - Present',
  },
  {
    degree: 'PUC',
    institution: "Master's PU College",
    location: 'Hassan, Karnataka',
    duration: '05/2021 - 05/2023',
  },
]

export const languagesData: string[] = ['English', 'Kannada', 'Hindi']

export const contactData = {
  email: 'keerthanamgowda05@gmail.com',
  phone: '8073330970',
  linkedin: 'https://www.linkedin.com/in/keerthana-m-31357a421',
  github: 'https://github.com/techWithKeerthana',
}

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
