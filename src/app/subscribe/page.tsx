import SharedHero from '@/components/hero/index'
import React from 'react'
import PlanHero from './PlanHero'
import HowItWorks from '@/components/howitworks/HowItWorks'
import { TStep } from '@/lib/types'
import PlanSteps from './PlanSteps'

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
    </div>
  )
}

export default page
