import HowItWorks from '@/components/howitworks/HowItWorks'
import Step from '@/components/howitworks/Step'
import { steps } from '@/lib/constants'
import React from 'react'

type Props = {}

const PlanSteps = (props: Props) => {
  return (
    <section className='w-full mb-28 bg-greyblue rounded-2xl'>
      <div className='py-24'>
        <div className='hidden md:grid md:grid-cols-3 justify-center relative gap-14  md:mx-20 h-2 border-b-2 border-peach'></div>
        <div className='grid md:grid-cols-3 justify-center gap-14  md:mx-20'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='max-w-xs  md:max-w-sm text-center md:text-left flex flex-col gap-6 relative'
            >
              <div className='hidden md:block w-10 h-10 border-2 border-cyan rounded-full absolute left-0 -top-5' />

              <div className='mt-20 '>
                <h3 className='text-7xl clear-start text-peach'>{step.step}</h3>
                <div className='space-y-6'>
                  <h4 className='text-cream text-[28px] lg:text-[32px] h-[100px] flex items-end'>
                    {step.title}
                  </h4>
                  <p className='text-cream text-[15px] leading-loose'>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlanSteps
