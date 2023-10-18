import { About } from '@/components/about/about'
import { Contact } from '@/components/contact/contact'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Hero } from '@/components/hero/hero'
import { Projects } from '@/components/projects/projects'
import { Skills } from '@/components/skllis/skills'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
