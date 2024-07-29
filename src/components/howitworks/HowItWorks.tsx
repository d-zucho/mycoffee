import { TStep } from '@/lib/types'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Step from './Step'

interface HowItWorksProps {
  steps: TStep[]
}

function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className='pt-32'>
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
      </MaxWidthWrapper>
    </section>
  )
}

export default HowItWorks
