import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'decodelabs',
    role: 'Web Development Intern',
    company: 'DecodeLabs',
    location: 'Remote',
    period: 'Jun 2026 – Jul 2026',
    bullets: [
      'Completed four front-end milestones: a W3C-valid, accessible semantic HTML/CSS page; a fluid responsive layout; a vanilla-JS DOM and state-management app (Input-Process-Output model); and a form with client-side validation.',
    ],
  },
  {
    id: 'arch',
    role: 'Generative AI Intern',
    company: 'Arch Technologies',
    location: 'Remote',
    period: 'Mar 2026 – Apr 2026 · 8 Weeks',
    bullets: [
      'Built a RAG pipeline with Unsloth 4-bit quantization (Llama-3.1-8B) and FAISS for low-VRAM local document retrieval.',
      'Developed an end-to-end speech-to-reasoning pipeline: Whisper transcription feeding a 4-bit quantized Qwen2.5-7B model via Unsloth.',
      'Created a memory-enabled local chatbot with Streamlit and Ollama (Phi-3) that runs entirely offline.',
      'Fine-tuned a medical-domain LLM with QLoRA and Unsloth on Google Colab, adapting a general-purpose model to healthcare language on limited compute.',
    ],
  },
  {
    id: 'codealpha',
    role: 'Python Programming Intern',
    company: 'CodeAlpha',
    location: 'Remote',
    period: 'Feb 2026 – Mar 2026',
    bullets: [
      'Completed a series of Python programming tasks covering automation and problem-solving as part of a structured training program.',
      'Applied core Python concepts — data types, loops, functions, and data structures — to build and debug task-based scripts, using Git/GitHub for version control and submission.',
    ],
  },
]
