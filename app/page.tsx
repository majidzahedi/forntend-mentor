import { siteConfig } from "@/config/site"
import ChallengeCard from "@/components/challengeCard"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 grid-cols-1 sm:grid-cols-2 md:py-10 lg:grid-cols-3">
        {siteConfig.challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </section>
    </>
  )
}
