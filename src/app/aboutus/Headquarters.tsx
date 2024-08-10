import Headquarter from '@/components/Headquarter'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { THeadquarter } from '@/lib/types'
import React from 'react'

type Props = {
  headquarders: THeadquarter[]
}

const Headquarters = ({ headquarders }: Props) => {
  return (
    <section className='py-[120px]'>
      <MaxWidthWrapper>
        <h2 className='text-header-3 text-mygray mb-16 text-center md:text-left'>
          Our headquarters
        </h2>
        <div className='mx-auto space-y-20 md:space-y-0 flex flex-col md:flex-row md:items-center justify-around md:justify-normal gap-10 md:gap-32 lg:gap-40 items-center'>
          {headquarders.map((headquarter) => (
            <Headquarter key={headquarter.country} headquarter={headquarter} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Headquarters
