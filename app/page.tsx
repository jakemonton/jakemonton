import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { FeatureCards } from "@/components/feature-cards"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
