import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive, accessible interfaces built with semantic HTML, modern CSS, and clean JavaScript.',
    icon: 'LayoutTemplate',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'End-to-end feature delivery, from data handling and backend logic to the interface users touch.',
    icon: 'Layers',
  },
  {
    id: 'ai',
    title: 'AI Applications',
    description: 'Practical AI features — from LLM fine-tuning to image classification — grounded in real data.',
    icon: 'BrainCircuit',
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Interactive tools and dashboards, like Streamlit-based apps that turn raw data into insight.',
    icon: 'AppWindow',
  },
  {
    id: 'api',
    title: 'API Integration',
    description: 'Connecting frontends to REST APIs and backend services with careful error handling.',
    icon: 'Plug',
  },
  {
    id: 'ui',
    title: 'UI Development',
    description: 'Component-driven UI work focused on consistency, hierarchy, and a polished feel.',
    icon: 'PenTool',
  },
]
