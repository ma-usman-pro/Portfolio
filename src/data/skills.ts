import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Kotlin', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      'React',
      'React Native (Expo)',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'TanStack Query',
      'Framer Motion',
      'Recharts',
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'Socket.IO',
      'WebRTC',
      'Multer',
      'Zod',
    ],
  },
  {
    id: 'database',
    name: 'Databases',
    skills: ['MongoDB', 'Mongoose (ODM)', 'MongoDB Atlas', 'Redis'],
  },
  {
    id: 'testing',
    name: 'Testing',
    skills: ['Vitest', 'Supertest', 'React Testing Library', 'Playwright (E2E)'],
  },
  {
    id: 'ai-ml',
    name: 'AI / Machine Learning',
    skills: [
      'LLM Fine-Tuning (QLoRA, Unsloth)',
      'Retrieval-Augmented Generation (RAG)',
      'FAISS Vector Search',
      'Whisper Speech Recognition',
      'Ollama',
      'Google GenAI SDK',
      'Prompt Engineering',
      'Neural Networks & Image Classification',
      'Pandas',
    ],
  },
  {
    id: 'tools',
    name: 'DevOps & Tools',
    skills: [
      'Docker',
      'Git/GitHub',
      'GitHub Actions (CI/CD)',
      'Vercel',
      'Railway',
      'Render',
      'Cloudinary',
      'Jupyter Notebook',
      'Google Colab',
    ],
  },
]

