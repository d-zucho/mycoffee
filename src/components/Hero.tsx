import { heroDesktopImg, heroMobileImg, heroTabletImg } from '@/lib'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section id='hero' className='relative'>
      <MaxWidthWrapper>
        <div
          className={`bg-hero_mobile md:bg-hero_tablet lg:bg-hero_desktop h-[500px] bg-cover bg-center bg-no-repeat text-cream w-full rounded-lg`}
        >
          <div className='flex flex-col justify-center mx-auto md:mx-0 gap-10 h-[100%] p-10 max-w-prose md:text-left md:items-start text-center items-center'>
            <h1 className='text-5xl md:text-[40px] lg:text-header-1 text-center md:text-left font-black'>
              Great coffee <br /> made simple.
            </h1>
            <p className='max-w-sm text-center md:text-left'>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <Button className='bg-cyan rounded-md font-black text-lg max-w-sm font-fraunces hover:bg-buttonhover transition-all duration-300'>
              {' '}
              Create your plan
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
