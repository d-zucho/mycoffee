'use client'
import PlanHero from './PlanHero'
import { TStep } from '@/lib/types'
import PlanSteps from './PlanSteps'
import MyAccordion from '@/components/MyAccordion'
import Customize from './Customize'

type Props = {
  steps: TStep[]
}

const page = ({ steps }: Props) => {
  const heroTitle = 'Create a plan'
  const heroDescription =
    'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'

  return (
    <div className='w-full min-h-screen'>
      <PlanHero />
      <PlanSteps />
      <Customize />
    </div>
  )
}

export default page
