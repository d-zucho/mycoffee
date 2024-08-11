import SharedHero from '@/components/hero/index'
import React from 'react'
import PlanHero from './PlanHero'

type Props = {}

const page = (props: Props) => {
  const heroTitle = 'Create a plan'
  const heroDescription =
    'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'

  return (
    <div className='w-full min-h-screen'>
      <PlanHero />
    </div>
  )
}

export default page
