'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { useMediaQuery } from 'usehooks-ts'

const Commitment = () => {
  const desktop = useMediaQuery('(min-width: 1024px)')
  const tablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const mobile = useMediaQuery('(max-width: 767px)')

  return (
    <section className='py-32'>
      <MaxWidthWrapper>
        <div className='relative md:flex md:items-center md:justify-between gap-7 just'>
          {/* <div className='bg-[url("/assets/about/mobile/image-commitment.jpg")] w-[325px] h-[400px] bg-contain bg-no-repeat mx-auto md:bg-[url("/assets/about/tablet/image-commitment.jpg")] md:w-[281px] md:h-[470px] lg:bg-[url("/assets/about/desktop/image-commitment.jpg")] lg:w-[445px] lg:h-[520px] md:mx-0 flex-1' /> */}
          <div className='flex-1'>
            {mobile && (
              <img
                src='/assets/about/mobile/image-commitment.jpg'
                alt='Our Commitment'
                className='rounded-lg mx-auto w-[350px]'
              />
            )}
            {tablet && (
              <img
                src='/assets/about/tablet/image-commitment.jpg'
                alt='Our Commitment'
                className='rounded-lg md:mx-0'
              />
            )}
            {desktop && (
              <img
                src='/assets/about/desktop/image-commitment.jpg'
                alt='Our Commitment'
                className='rounded-lg md:mx-0'
              />
            )}
          </div>

          <div className='text-greyblue flex-1 text-center md:text-left space-y-5'>
            <h2 className='text-header-3 md:text-header-2 text-center md:text-left pt-10 md:pt-0'>
              Our commitment
            </h2>
            <p className='max-w-lg md:max-w-md mx-auto md:mx-0'>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
            <p></p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Commitment
