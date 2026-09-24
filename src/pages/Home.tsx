import { lazy, Suspense } from 'react'
import Hero from '@/components/Hero'

// Below-the-fold sections are code-split so the initial bundle only
// needs to ship what's visible on load (Hero). Each chunk is
// fetched as the user scrolls toward it.
const Projects = lazy(() => import('@/components/Projects'))
const Skills = lazy(() => import('@/components/Skills'))
const Services = lazy(() => import('@/components/Services'))
const About = lazy(() => import('@/components/About'))
const Experience = lazy(() => import('@/components/Experience'))
const EducationCerts = lazy(() => import('@/components/EducationCerts'))
const GithubStats = lazy(() => import('@/components/GithubStats'))
const Contact = lazy(() => import('@/components/Contact'))

// Minimal fallback — sections fade/animate in on their own once loaded,
// so this just reserves a little space rather than showing a spinner.
function SectionFallback() {
  return <div className="min-h-[20vh]" aria-hidden="true" />
}

// Order follows the audit's recommendation: lead with the strongest evidence
// (projects) right after the Hero, then skills/services, then the softer
// About/Experience/Education context, ending with GitHub + Contact.
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <Skills />
        <Services />
        <About />
        <Experience />
        <EducationCerts />
        <GithubStats />
        <Contact />
      </Suspense>
    </>
  )
}
