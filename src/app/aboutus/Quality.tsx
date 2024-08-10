'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { desktopQualityImg, mobileQualityImg, tabletQualityImg } from '@/lib'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Quality = () => {
  const desktop = useMediaQuery('(min-width: 1024px)')
  const tablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const mobile = useMediaQuery('(max-width: 767px)')
  return (
    <section className='w-full rounded-md mt-32 mb-20'>
      <MaxWidthWrapper>
        <div className='bg-greyblue px-10 py-20 grid lg:grid-cols-2 lg:gap-5 relative rounded-lg'>
          <div className='flex flex-col gap-5 text-center lg:text-left max-w-prose'>
            <h2 className='text-header-3 md:text-header-2 text-white'>
              Uncompromising quality
            </h2>
            <p className='text-cream'>
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
          </div>
          <div className='order-first mx-auto -mt-32 pb-16 md:pb-20 md:-mt-56 lg:order-last lg:-mt-40'>
            {mobile && (
              <Image
                src={mobileQualityImg}
                alt='Our Quality'
                width={279}
                height={156}
                className='rounded-lg mx-auto w-[350px]'
              />
            )}
            {tablet && (
              <Image
                src={tabletQualityImg}
                alt='Our Quality'
                width={570}
                height={320}
                className='rounded-lg md:mx-0'
              />
            )}
            {desktop && (
              <Image
                src={desktopQualityImg}
                alt='Our Quality'
                width={445}
                height={474}
                className='rounded-lg '
              />
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Quality
