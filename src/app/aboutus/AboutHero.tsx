import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const AboutHero = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div
          className={`bg-about_mobile md:bg-about_tablet lg:bg-about_desktop h-[500px] bg-cover  bg-no-repeat bg-right text-cream w-full rounded-lg`}
        >
          <div className='flex flex-col justify-center mx-auto md:mx-0 gap-10 h-[100%] p-10 max-w-prose md:text-left md:items-start text-center items-center'>
            <h2 className='text-center text-header-4 md:text-header-2 md:text-left font-black'>
              About Us
            </h2>
            <p className='max-w-sm text-center md:text-left'>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero
