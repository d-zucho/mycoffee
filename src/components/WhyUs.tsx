import { TWhyFact } from '@/lib/types'
import MaxWidthWrapper from './MaxWidthWrapper'
import WhyFact from './WhyFact'

type Props = {
  // title: string
  // description: string
  // image: string
  facts: TWhyFact[]
}

function WhyUs({ facts }: Props) {
  return (
    <section className='relative pt-12'>
      <MaxWidthWrapper className='text-cream relative'>
        <div className='bg-greyblue rounded-xl  p-20 relative'>
          <div className='space-y-8 text-center'>
            <h2 className='text-header-2 font-black'>Why choose us?</h2>
            <p className='max-w-md mx-auto mt-10'>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>

          {/* next */}
          {/* facts container */}
          <div className='p-10 grid w-full gap-5 grid-cols-1 lg:grid-cols-3 md:grid-rows-1 pt-20 md:mt-4'>
            {facts.map((fact, index) => (
              <WhyFact key={index} index={index} {...fact} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUs
