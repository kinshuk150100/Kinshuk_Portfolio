import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { Projects } from '@/components/projects/Projects'
import { WorkExperience } from '@/components/experience/WorkExperience'
import { Education } from '@/components/education/Education'
import { Contact } from '@/components/contact/Contact'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { PageLoader } from '@/components/ui/PageLoader'
import { CursorGlow } from '@/components/effects/CursorGlow'

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Hero />
          <About />
          <WorkExperience />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  )
}
