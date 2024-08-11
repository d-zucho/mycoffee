import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { Button } from '../ui/button'

type Props = {
  hero_desktop: string
  hero_mobile?: string
  hero_tablet?: string
  title: string
  description: string
  btn_label?: string
}

const SharedHero = ({
  hero_desktop,
  hero_mobile,
  hero_tablet,
  title,
  description,
  btn_label,
}: Props) => {
  return (
    <section id='plan-hero' className='relative'>
      <MaxWidthWrapper>
        <div
          className={`bg-planhero_mobile md:bg-planhero_tablet lg:bg-planhero_desktop h-[500px] bg-cover bg-center bg-no-repeat text-cream w-full rounded-lg`}
        >
          <div className='flex flex-col justify-center mx-auto md:mx-0 gap-10 h-[100%] p-10 max-w-prose md:text-left md:items-start text-center items-center'>
            <h1 className='text-5xl md:text-[40px] lg:text-header-1 text-center md:text-left font-black'>
              {title}
            </h1>
            <p className='max-w-sm text-center md:text-left'>{description}</p>
            {btn_label && (
              <Button className='bg-cyan rounded-md font-black text-lg max-w-sm font-fraunces hover:bg-buttonhover transition-all duration-300'>
                {' '}
                {btn_label}
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default SharedHero
