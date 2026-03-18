export const about = {
  greeting: "Hey, I'm",
  name: 'Piyush Hole',
  tagline: 'CS Honors @ Texas A&M',
  bio: [
    "I'm a Computer Science student (Honors) at Texas A&M, double minoring in Mathematics and Statistics. I love working across the stack, from GPU-accelerated image pipelines to distributed backend systems.",
    "When I'm not writing code, I'm tinkering with film photography, exploring new music, or optimizing my pizza dough recipe.",
  ],
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
  logo?:
    | { kind: 'image'; src: string; alt: string }
    | { kind: 'text'; text: string; ariaLabel?: string }
}

export const experiences: Experience[] = [
  // {
  //   role: 'Software Engineer Intern (Incoming)',
  //   company: 'OpenAI',
  //   period: 'August 2026 - December 2026',
  //   logo: { kind: 'image', src: '/public/openai.svg', alt: 'OpenAI logo' },
  //   description:
  //     "Joining OpenAI's Applied engineering team in San Francisco, building ChatGPT and OpenAI API features",
  //     tags: ['React', 'JavaScript', 'Python', 'APIs'],
  // },
  {
    role: 'Software Engineer Intern (Incoming)',
    company: 'Citadel',
    period: 'June 2026 - August 2026',
    logo: { kind: 'image', src: '/citadel.svg', alt: 'Citadel logo' },
    description:
      "Joining Citadel's Commodities engineering team in Houston, building infrastructure and analytics for market data.",
    tags: ['Infrastructure', 'Market Data', 'Analytics'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Palo Alto Networks',
    period: 'May 2025 - August 2025',
    logo: { kind: 'image', src: '/panw.svg', alt: 'Palo Alto Networks logo' },
    description:
      'Built a full-stack Customer 360 analytics platform with Python and React TypeScript',
    tags: ['Python', 'React', 'TypeScript', 'BigQuery', 'Vertex AI'],
  }
]

export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Kodak Portra Film Emulation',
    description:
      'An iOS app for processing Apple ProRAW images with customizable film emulation styles. GPU-accelerated color grading via Core Image, maintaining 16-bit color fidelity with a real-time preview pipeline.',
    tech: ['Swift', 'SwiftUI', 'AVFoundation', 'Core Image'],
    link: '#',
  },
  {
    title: 'Restaurant POS System',
    description:
      'A full point-of-sale system with MVC architecture, reducing screen load times by 40%. Automated inventory management for 100+ products and simulated 39 weeks of business ops producing 750K+ in sales data.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Python', 'AWS'],
    link: '#',
  },
  {
    title: 'Customer 360 Analytics',
    description:
      'Full-stack analytics platform at Palo Alto Networks processing 40,000 support cases/month. Multi-modal case analysis using Vertex AI LLMs with async batch processing at 50+ cases/second.',
    tech: ['Python', 'React', 'BigQuery', 'Vertex AI'],
    link: '#',
  },
  {
    title: 'BRD Detection System',
    description:
      'Decision modeling research system for early detection of Bovine Respiratory Disease in cattle. LSTM-based diagnosis pipeline achieving 86% accuracy, optimizing treatment protocols via data-driven insights.',
    tech: ['Python', 'LSTM', 'Scikit-learn', 'Pandas'],
    link: '#',
  },
]

export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Python', 'C/C++', 'Java', 'TypeScript', 'Swift', 'C#', 'R'],
  },
  {
    category: 'Frontend',
    items: ['React', 'SwiftUI', 'Tailwind CSS', 'Figma'],
  },
  {
    category: 'Backend & Data',
    items: ['FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    category: 'Tools & ML',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Tableau', 'Selenium', 'Unity', 'Blender 3D'],
  },
]

export const contact = {
  heading: 'Say hello',
  message:
    "I'm always open to chatting about new opportunities, interesting projects, or just tech in general. Drop me a line!",
  email: 'hole.piyu@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/piyushh-11' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/piyush-hole' },
  ],
}
