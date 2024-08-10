import { THeadquarter } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

type HeadquarterProps = {
  headquarter: THeadquarter
}

const Headquarter = ({ headquarter }: HeadquarterProps) => {
  return (
    <div className='h-[200px] flex flex-col content-start items-center md:items-start'>
      <div className='w-20 h-20'>
        <img
          src={headquarter.icon}
          alt={headquarter.country}
          width={60}
          height={60}
          className='mx-auto md:mx-0 overflow-hidden'
        />
      </div>

      <div className='flex flex-col text-center md:text-left w-fit'>
        <h4 className='text-[28px]'>{headquarter.country}</h4>
        <span>{headquarter.address}</span>
        <span>{headquarter.city}</span>
        <span>{headquarter.phone}</span>
      </div>
    </div>
  )
}

export default Headquarter
