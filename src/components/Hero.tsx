import { heroDesktopImg, heroMobileImg, heroTabletImg } from '@/lib'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'

const desktop = '/desktop/image-hero-coffeepress.jpg'
const tablet = '/tablet/image-hero-coffeepress.jpg'
const mobile = '/mobile/image-hero-coffeepress.jpg'

const Hero = () => {
  return (
    <section id='hero' className='relative'>
      <MaxWidthWrapper>
        <div
          className={`bg-hero_mobile md:bg-hero_tablet lg:bg-hero_desktop h-[500px] bg-cover bg-center bg-no-repeat text-cream w-full rounded-lg`}
        >
          <div className='flex flex-col justify-between items-center h-[100%] p-10'>
            <h1 className='text-5xl md:text-5xl lg:text-header-1 text-center md:text-left font-black'>
              Great coffee <br /> made simple.
            </h1>
            <p className='max-w-prose text-center md:text-left'>
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
            <Button className='bg-cyan rounded-md font-black max-w-sm mx-auto'>
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
