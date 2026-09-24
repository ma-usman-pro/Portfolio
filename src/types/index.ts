export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  tech: string[]
  features: string[]
  problem?: string
  achievement?: string
  githubUrl?: string
  demoUrl?: string
  liveUrl?: string
  date: string
  category: 'AI/ML' | 'Full Stack' | 'Frontend' | 'Mobile'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Ultimate'
  featured: boolean
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  location?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  verifyUrl?: string
}

export interface SkillCategory {
  id: string
  name: string
  skills: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}
