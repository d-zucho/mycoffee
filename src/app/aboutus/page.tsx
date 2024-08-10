import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import AboutHero from './AboutHero'
import Commitment from './Commitment'
import Quality from './Quality'
import Headquarters from './Headquarters'
import { headquarters } from '@/lib/constants'

const AboutUs = () => {
  return (
    <section>
      <AboutHero />
      <Commitment />
      <Quality />
      <Headquarters headquarders={headquarters} />
    </section>
  )
}

export default AboutUs
