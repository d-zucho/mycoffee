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
    <section>
      <MaxWidthWrapper className='text-cream'>
        <div className='bg-greyblue rounded-xl h-[600px] p-20'>
          <div className='space-y-8 text-center'>
            <h2 className='text-header-2 font-black'>Why choose us?</h2>
            <p className='max-w-md mx-auto'>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>

          {/* next */}
          {/* facts container */}
          <div>
            {facts.map((fact) => (
              <WhyFact key={fact.title} {...fact} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WhyUs
