import { TStep } from '@/lib/types'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Step from './Step'
import { Button } from '../ui/button'
import { steps } from '@/lib/constants'

interface HowItWorksProps {
  title?: string
}

function HowItWorks({ title }: HowItWorksProps) {
  return (
    <section className='py-32'>
      <MaxWidthWrapper>
        <div>
          <h2 className='text-mygray text-header-3 font-black text-center pb-20'>
            How it works
          </h2>
          <div className='grid lg:grid-cols-3 justify-center relative'>
            {steps.map((step, index) => (
              <>
                <Step
                  key={index}
                  className={
                    index < 2
                      ? 'pb-10 lg:border-t-2 border-l-2 lg:border-l-0 border-peach'
                      : ''
                  }
                  {...step}
                />
              </>
            ))}
          </div>
        </div>
        <div className='flex justify-center lg:justify-start mt-16'>
          <Button className='bg-cyan hover:bg-btn_hover font-fraunces'>
            Create your plan
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HowItWorks
