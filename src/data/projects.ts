import type { Project } from '@/types'

// Single source of truth for all projects. Add a new project here and it
// will automatically appear, be filterable, searchable, and sortable.
//
// Tier guide:
//   Ultimate     — the 3-5 strongest, most complete projects. Shown first.
//   Advanced     — strong technical ability, real backend/AI/API work.
//   Intermediate — solid fundamentals: CRUD, dashboards, polished frontends.
//   Beginner     — best of the early/learning-stage work, shown last.
export const projects: Project[] = [
  // ───────────────────────── ULTIMATE ─────────────────────────
  {
    id: 'jobflow',
    title: 'JobFlow — Full-Stack Job Application Management Platform',
    description:
      'A role-based job-application tracker with real-time notifications, a live analytics dashboard, and 90+ automated tests — containerized with Docker and shipped through a GitHub Actions CI pipeline.',
    longDescription:
      'JobFlow is a full-stack MERN platform for managing job applications, companies, interviews, and notes, with JWT authentication (httpOnly cookies, bcrypt hashing) and role-based access control separating user and admin accounts. Every list view supports server-side search, filtering, sorting, and pagination. Real-time notifications run through Socket.IO private per-user rooms, and a live analytics dashboard is driven entirely by MongoDB aggregation pipelines. The app is covered by 90+ automated tests and containerized with Docker, with GitHub Actions running lint, test, and build on every push.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Socket.io',
      'JWT',
      'Docker',
      'GitHub Actions',
      'Cloudinary',
      'Vitest',
      'Supertest',
      'React Testing Library',
    ],
    features: [
      'JWT authentication with httpOnly cookies and bcrypt password hashing',
      'Role-based access control separating user and admin accounts',
      'Full CRUD for applications, companies, interviews, and notes with server-side search, filtering, sorting, and pagination',
      'Real-time notifications via Socket.IO private per-user rooms',
      'Live analytics dashboard driven by MongoDB aggregation pipelines',
      'Cloudinary resume uploads with server-side file validation',
      '90+ automated tests (Vitest, Supertest, React Testing Library)',
      'Dockerized app with a GitHub Actions CI pipeline running lint, test, and build on every push',
    ],
    problem:
      'Most job-tracker demos are single-user CRUD apps. JobFlow adds the parts that make it closer to a real internal tool: role separation between users and admins, real-time updates, and a CI pipeline that actually gates broken code before it ships.',
    achievement:
      'Shipped a Dockerized, CI-tested full-stack app end to end — 90+ automated tests plus a GitHub Actions pipeline that runs lint, test, and build on every push.',
    githubUrl: 'https://github.com/ma-usman-pro/jobflow-ai',
    date: '2026',
    category: 'Full Stack',
    difficulty: 'Ultimate',
    featured: true,
  },
  {
    id: 'ecommerce-analytics-dashboard',
    title: 'E-Commerce Analytics Dashboard',
    description:
      'A full-stack analytics dashboard where every revenue, order, and category chart is powered by real MongoDB aggregation pipelines — no hardcoded data — backed by 169 automated tests.',
    longDescription:
      'A MERN analytics dashboard for e-commerce data: every chart, table, and stat card is powered by live MongoDB aggregation pipelines rather than mock data, with server-side filtering, search, pagination, and CSV export shared consistently across all of them. The API is hardened with Helmet, rate limiting, and environment-aware CORS. The project carries 169 automated tests (Vitest, Supertest, React Testing Library) plus Playwright end-to-end coverage, and deploys the frontend and backend as separate Railway services connected to a MongoDB Atlas cluster.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Recharts',
      'Helmet',
      'Vitest',
      'Supertest',
      'Playwright',
      'Railway',
    ],
    features: [
      'Every chart and stat card powered by real MongoDB aggregation pipelines',
      'Server-side filtering, search, pagination, and CSV export shared across charts, tables, and stat cards',
      'API hardened with Helmet, rate limiting, and environment-aware CORS',
      '169 automated tests (Vitest, Supertest, React Testing Library) plus Playwright E2E tests',
      'Frontend and backend deployed as separate Railway services connected to a MongoDB Atlas cluster',
    ],
    achievement:
      'Backed every chart with real aggregation-pipeline data and 169 automated tests — including full Playwright end-to-end coverage — rather than treating tests as an afterthought.',
    githubUrl: 'https://github.com/ma-usman-pro/ecommerce-analytics-dashboard',
    date: '2026',
    category: 'Full Stack',
    difficulty: 'Ultimate',
    featured: true,
  },
  {
    id: 'ourworld-app',
    title: 'OurWorld — Secure Real-Time Messaging App',
    description:
      'A full-stack, real-time messaging app with end-to-end encrypted chat, peer-to-peer voice/video calls, and a built-in AI assistant — built as a native mobile app with a production-style backend.',
    longDescription:
      'OurWorld pairs a React Native (Expo) mobile client with an Express/Socket.io backend to deliver real-time, end-to-end encrypted messaging (NaCl), custom WebRTC voice/video calling, voice notes, and an AI companion built into the chat interface via the Google GenAI SDK. The backend is built for real deployment conditions: Redis-backed Socket.io for horizontal scaling, JWT authentication, Cloudinary-hosted media uploads, push notifications, rate limiting, input validation with Zod, and Sentry error monitoring.',
    tech: [
      'React Native (Expo)',
      'Node.js',
      'Express',
      'Socket.io',
      'MongoDB',
      'Mongoose',
      'Redis',
      'WebRTC',
      'NaCl (E2E Encryption)',
      'Google GenAI SDK',
      'JWT',
      'Cloudinary',
      'Zod',
    ],
    features: [
      'End-to-end encrypted messaging between users using NaCl',
      'Custom WebRTC signaling for peer-to-peer voice and video calls, plus voice notes',
      'AI companion built directly into the chat interface via the Google GenAI SDK',
      'Redis-backed Socket.io adapter for real-time messages at scale',
      'JWT-authenticated accounts with rate-limited, Zod-validated APIs',
      'Push notifications, Cloudinary media uploads, and Sentry monitoring',
    ],
    problem:
      'Most portfolio chat apps stop at basic CRUD messaging. OurWorld tackles the parts that make messaging apps hard in production: real-time delivery at scale, peer-to-peer media without a relay server, end-to-end encryption, and security around user data.',
    achievement:
      'Wired a mobile client to a horizontally-scalable real-time backend (Socket.io + Redis adapter), shipped custom WebRTC signaling for calls, and audited and fixed authentication middleware, schema, and socket-handling issues across the frontend and backend.',
    githubUrl: 'https://github.com/ma-usman-pro/OurWorld-App',
    demoUrl:
      'https://www.linkedin.com/posts/mahmad-usman_softwareengineering-webrtc-reactnetworking-activity-7464690925294780417-tg9N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv288UB-gWnxGoUb6rzXRSFFD4dqkVMZuk',
    date: '2026',
    category: 'Full Stack',
    difficulty: 'Ultimate',
    featured: true,
  },
  {
    id: 'cloudnest-mini-drive',
    title: 'CloudNest — Full-Stack Mini Cloud Drive',
    description:
      'A real, working cloud storage app — drag-and-drop uploads, nested folders, search, trash, and favorites — with a security-conscious Express backend and zero mock data.',
    longDescription:
      'CloudNest is a from-scratch cloud drive: a React frontend and an Express/Multer backend with real file storage on disk. Every file, folder, favorite, and trashed item is genuinely persisted and survives a server restart — nothing is mocked. The backend resolves every file access through a metadata store first, generates UUID filenames to prevent path traversal, and validates uploads by both MIME type and extension.',
    tech: ['React', 'Vite', 'React Router', 'Node.js', 'Express', 'Multer'],
    features: [
      'Real drag-and-drop uploads with genuine XMLHttpRequest progress',
      'Unlimited nested folders with real breadcrumbs and recursive trash',
      'Debounced global search, sort, and MIME-based filtering',
      'Soft-delete Trash with Restore and permanent delete',
      'Path-traversal-safe file storage using server-generated UUID filenames',
      'Dark mode applied before first paint, fully responsive from 375px up',
    ],
    problem:
      'Builds a genuinely working file storage system rather than a UI mockup — real uploads, real folders, real trash lifecycle — while treating file-handling security (path traversal, MIME spoofing) as a first-class concern, not an afterthought.',
    achievement:
      'Every file-access route resolves the requested id through the metadata store before touching disk, and re-confirms the resolved path stays inside the uploads directory — so no crafted id can escape the storage folder.',
    githubUrl: 'https://github.com/ma-usman-pro/cloudnest-mini-drive',
    date: '2026',
    category: 'Full Stack',
    difficulty: 'Ultimate',
    featured: true,
  },
  {
    id: 'scholarapply',
    title: 'ScholarApply — Scholarship Application Platform',
    description:
      'A production-style, six-step scholarship application form where the backend never trusts the frontend — every validation rule is independently re-enforced server-side before anything touches the database.',
    longDescription:
      'A focused, full-stack scholarship application form: a six-step wizard (Personal → Academic → Scholarship → Essay → Documents → Review) with live client validation, submitting to an Express API that independently re-validates every single field with the same Zod rules before writing to MongoDB and returning a unique Application ID.',
    tech: ['React', 'React Hook Form', 'Zod', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Multer'],
    features: [
      'Six-step wizard with per-step validation and a review-before-submit screen',
      'Identical Zod validation rules enforced independently on client and server',
      'Conditional field validation driven by scholarship type',
      'Secure file uploads: MIME + extension allow-list, 5MB limit, orphan cleanup on failure',
      'Rate limiting, Helmet security headers, and a CORS allow-list on the API',
      'Sanitized input and error responses that never leak stack traces',
    ],
    problem:
      'Demonstrates that client-side validation is a UX layer, not a security boundary — enforced through the principle that the backend never trusts the frontend, verified by sending malformed requests directly to the API.',
    achievement:
      'Built the same validation schema twice on purpose — once in the browser for UX, once on the server as the actual authority — so a request that bypasses the UI entirely still gets rejected with the same field-level detail.',
    githubUrl: 'https://github.com/ma-usman-pro/Scholorship-Form',
    date: '2026',
    category: 'Full Stack',
    difficulty: 'Advanced',
    featured: false,
  },
  {
    id: 'voyage-job-tracker',
    title: 'Voyage — Job Application Tracker',
    description:
      "A full-stack MERN dashboard for tracking job applications, with real account authentication — JWT sessions in httpOnly cookies, bcrypt password hashing, and every application scoped to its owner.",
    longDescription:
      "Voyage is a production-quality job-application dashboard: signup/login/logout with JWT sessions stored in httpOnly cookies, bcrypt-hashed passwords, and protected routes so applications are always scoped to the signed-in account. The dashboard shows live stats, and the applications list supports search, filtering, sorting, and pagination with instant UI updates on every action.",
    tech: ['React', 'React Router', 'React Hook Form', 'Zod', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    features: [
      'Secure auth: JWT in httpOnly cookies, bcrypt hashing, rate-limited login',
      "Per-user data isolation — no account can see another account's applications",
      'Live dashboard stats plus search, filter, sort, and pagination',
      'Optimistic-feeling UI updates on every create, update, and delete',
      'Dark mode, skeleton loading states, and full responsiveness',
    ],
    problem:
      'Goes beyond a CRUD demo by implementing account-level security correctly: httpOnly (not localStorage) JWT storage, secure/sameSite cookie handling for cross-origin production deploys, and strict per-user data scoping.',
    achievement:
      'Configured the auth cookie to automatically switch to Secure + SameSite=None in production, so sessions survive a real cross-origin deploy (Vercel frontend to Render backend) over HTTPS.',
    githubUrl: 'https://github.com/ma-usman-pro/JOb-Tracker',
    date: '2026',
    category: 'Full Stack',
    difficulty: 'Advanced',
    featured: false,
  },
  {
    id: 'dynamic-4bit-rag',
    title: 'Dynamic 4-bit RAG Pipeline',
    description:
      'A Retrieval-Augmented Generation pipeline pairing a 4-bit quantized Llama-3.1-8B with FAISS vector search, so the model answers from real retrieved context instead of guessing.',
    longDescription:
      "Implements Retrieval-Augmented Generation from the ground up: Unsloth's dynamic 4-bit quantization loads Llama-3.1-8B in low-VRAM form, sentence-transformer embeddings feed a FAISS vector index built from a knowledge base, and retrieved passages are injected into the prompt before generation — reducing hallucination by grounding answers in retrieved fact.",
    tech: ['Python', 'Unsloth', 'Llama 3.1', 'FAISS', 'Sentence-Transformers', 'PyTorch', 'Google Colab'],
    features: [
      '4-bit quantized Llama-3.1-8B running on limited (Colab T4) VRAM',
      'Sentence-transformer embeddings indexed with FAISS for vector search',
      'Retrieved context injected into the prompt to ground generation',
      'Runs end-to-end in a single reproducible notebook',
    ],
    problem:
      'Shows a genuine understanding of why RAG matters — LLMs hallucinate without grounding — and implements the full retrieval-then-generate loop rather than just calling a hosted API.',
    achievement:
      'Combined two separate optimization techniques — 4-bit quantization for memory and FAISS for fast retrieval — so a fairly large model runs and answers from real context on free-tier GPU hardware.',
    githubUrl: 'https://github.com/ma-usman-pro/Dynamic_4bit_RAG_Implementation',
    date: '2026',
    category: 'AI/ML',
    difficulty: 'Advanced',
    featured: false,
  },

  // ───────────────────────── ADVANCED ─────────────────────────
  {
    id: 'speech-to-reasoning-pipeline',
    title: 'Speech-to-Reasoning Pipeline',
    description:
      'An end-to-end pipeline that transcribes spoken audio with Whisper and then reasons over the transcript using a 4-bit quantized Qwen2.5-7B model.',
    tech: ['Python', 'Whisper', 'Unsloth', 'Qwen2.5-7B', 'PyTorch', 'Google Colab'],
    features: [
      'Automatic speech recognition via OpenAI Whisper',
      '4-bit quantized Qwen2.5-7B for downstream logical reasoning over the transcript',
      'Two-model pipeline chained into a single reproducible workflow',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/speech-to-reasoning-pipeline',
    date: '2026',
    category: 'AI/ML',
    difficulty: 'Advanced',
    featured: false,
  },
  {
    id: 'medical-qlora',
    title: 'Medical LLM Fine-Tuning with QLoRA',
    description:
      'Fine-tuned a Llama-3 model on medical-domain data using QLoRA and Unsloth, adapting a general-purpose LLM to healthcare language through parameter-efficient, low-rank fine-tuning on limited compute.',
    tech: ['Python', 'Unsloth', 'Llama 3', 'QLoRA', 'Google Colab'],
    features: [
      'Parameter-efficient fine-tuning with QLoRA instead of a full fine-tune',
      'Domain adaptation of a general LLM to healthcare-specific language',
      "Trained within Colab's free-tier compute limits via low-rank adaptation",
    ],
    githubUrl: 'https://github.com/ma-usman-pro/Medical_Llama3_QLoRA_Finetuning',
    demoUrl:
      'https://www.linkedin.com/posts/mahmad-usman_machinelearning-generativeai-llm-activity-7442017473463349248-kqlR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv288UB-gWnxGoUb6rzXRSFFD4dqkVMZuk',
    date: '2026',
    category: 'AI/ML',
    difficulty: 'Advanced',
    featured: false,
  },
  {
    id: 'fall-guardian',
    title: 'FallGuardian — Smart Fall Detection App',
    description:
      'A Python mobile app that continuously monitors phone-sensor data, detects falls with a 3-phase motion algorithm, and alerts family members with GPS location via SMS/WhatsApp.',
    tech: ['Python', 'Kivy', 'KivyMD', 'Twilio API', 'Plyer', 'Buildozer'],
    features: [
      '3-phase fall detection algorithm: free-fall, impact, then stillness',
      '15-second cancellable countdown before an alert is sent',
      'GPS-tagged SMS/WhatsApp alerts to emergency contacts via the Twilio API',
      'Configurable sensitivity and full alert history log',
      'Packaged as a real installable Android APK via Buildozer',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/fall-guardian-apk',
    demoUrl:
      'https://www.linkedin.com/posts/mahmad-usman_python-softwareengineering-androiddevelopment-activity-7483485401526153217-_pYr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFv288UB-gWnxGoUb6rzXRSFFD4dqkVMZuk',
    date: '2026',
    category: 'Mobile',
    difficulty: 'Advanced',
    featured: true,
  },
  {
    id: 'local-llm-chatbot',
    title: 'Local LLM Chatbot',
    description:
      'A memory-enabled AI chatbot that runs entirely on local hardware, pairing a Streamlit chat UI with a locally-hosted Phi-3 model served through Ollama — no external API calls.',
    tech: ['Python', 'Streamlit', 'Ollama', 'Phi-3'],
    features: [
      'Fully local inference via Ollama — no external API or key required',
      'Session-persistent chat history with a sidebar log',
      'Full conversation context sent to the model on every turn for continuity',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/local-llm-chatbot',
    date: '2026',
    category: 'AI/ML',
    difficulty: 'Advanced',
    featured: false,
  },
  {
    id: 'meetmind-ai',
    title: 'MeetMind AI — SaaS Landing Page',
    description:
      'A premium, fully componentized SaaS marketing site in the style of Linear and Stripe — dark/light theme, a dashboard preview built entirely from live React components, and a signature animated waveform motif.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
    features: [
      'Dashboard preview built from real React components, not screenshots',
      'Physics-based scroll and parallax animation with Framer Motion',
      'Light/dark theme with system-preference detection and no flash on load',
      'Fully responsive from 375px to ultra-wide, with reduced-motion support',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/meetmind-ai',
    liveUrl: 'https://meetmind-ai-rho.vercel.app/',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Advanced',
    featured: true,
  },
  {
    id: 'github-explorer',
    title: 'Repo Atlas — GitHub Repository Explorer',
    description:
      'A polished GitHub repository explorer: search any username, browse their public repos with live data from the GitHub REST API, then filter, sort, and favorite the ones worth remembering.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Axios', 'Framer Motion'],
    features: [
      'Live profile and repository data from the GitHub REST API',
      'Instant in-page search, language filtering, and multi-key sorting',
      'Favorites and recent searches persisted locally',
      'Dedicated rate-limit and offline error states with retry',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/Github-explorer',
    liveUrl: 'https://github-explorer-eight-omega.vercel.app/',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Advanced',
    featured: false,
  },
  {
    id: 'scout-ai-tools',
    title: 'Scout — AI Tools Directory',
    description:
      'A SaaS-style directory for discovering and comparing AI tools, with instant search, category/pricing filters, a details page per tool, and a locally-persisted favorites list.',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    features: [
      'Debounced search plus category and pricing filters',
      'Dedicated tool-details pages with ratings and pricing badges',
      'Favorites persisted to localStorage and synced across tabs',
      'Hand-built skeleton loading and retry-able error states',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/Scout-AI-tools-dictionary',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Advanced',
    featured: false,
  },

  // ───────────────────────── INTERMEDIATE ─────────────────────────
  {
    id: 'noire-restaurant',
    title: 'NOIRÉ — Restaurant Website',
    description:
      'A modern, production-quality restaurant website with a menu showcase, reservation flow, and premium scroll animations.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
    features: [
      'Validated reservation form and menu showcase',
      'Component-driven sections with shared design tokens',
      'Smooth Framer Motion transitions throughout',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/Noire-restaurant-website',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Intermediate',
    featured: false,
  },
  {
    id: 'vera-estates',
    title: 'VERA ESTATES — Luxury Real Estate Site',
    description:
      'A real-estate portfolio site with a live property search, listings view with filtering and sorting, and a fullscreen property-details gallery with keyboard navigation.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
    features: [
      'Live filtering by buy/rent, location, type, bedrooms, and price range',
      'Fullscreen, keyboard-navigable image lightbox for property details',
      'Favorites persisted to localStorage',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/premium-real-estate-website',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Intermediate',
    featured: false,
  },
  {
    id: 'forme-fitness',
    title: 'FORME — Fitness Club Website',
    description:
      'An editorial-style marketing site for a fitness club, with a class schedule, trainer profiles, and membership tiers.',
    tech: ['React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion'],
    features: [
      'Class schedule, trainer, and membership sections',
      'Custom warm color-token design system',
      'Scroll-reveal animations with reduced-motion support',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/forme-fitness-website',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Intermediate',
    featured: false,
  },
  {
    id: 'employee-data-analysis',
    title: 'Employee Data Analysis',
    description:
      'A data analysis project examining employee records to surface salary and workforce trends, with charted results and a written report.',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib'],
    features: [
      'Exploratory data analysis over employee records',
      'Charted salary trend output',
      'Accompanying written documentation of findings',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/Employee-Data-Analysis',
    date: '2026',
    category: 'AI/ML',
    difficulty: 'Intermediate',
    featured: false,
  },

  // ───────────────────────── BEGINNER ─────────────────────────
  {
    id: 'aura-scent-lab',
    title: 'Aura Scent Lab',
    description:
      'A static, editorial-style landing page for a fictional fragrance brand, hand-built with vanilla HTML, CSS, and JavaScript — including a custom cursor and scroll parallax.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Custom cursor and parallax hero, built without a framework',
      'Fully responsive single-page layout',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/aura-scent-lab',
    liveUrl: 'https://aura-scent-lab.vercel.app/',
    date: '2026',
    category: 'Frontend',
    difficulty: 'Beginner',
    featured: false,
  },
  {
    id: 'handwritten-predictor',
    title: 'Handwritten Character Predictor',
    description:
      'A neural-network image-classification model that recognizes handwritten numbers and upper/lowercase letters.',
    tech: ['Python', 'Keras', 'Neural Networks'],
    features: [
      'Trained neural network for handwritten character recognition',
      'Handles digits and mixed-case letters',
    ],
    githubUrl: 'https://github.com/ma-usman-pro/ml-project',
    date: '2026',
    category: 'AI/ML',
    difficulty: 'Beginner',
    featured: false,
  },
  {
    id: 'moviefinder',
    title: 'MovieFinder',
    description:
      'A native Android app that looks up a movie by title via the OMDb API and displays its poster, year, and plot.',
    tech: ['Kotlin', 'Retrofit', 'Glide'],
    features: ['OMDb API integration via Retrofit', 'Poster image loading with Glide'],
    githubUrl: 'https://github.com/ma-usman-pro/MovieFinder',
    date: '2026',
    category: 'Mobile',
    difficulty: 'Beginner',
    featured: false,
  },
]
