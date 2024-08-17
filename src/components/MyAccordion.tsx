'use client'
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionTrigger } from './ui/accordion'
import AccItem from './AccItem'
import { AccordionItem } from '@radix-ui/react-accordion'

type Props = {
  title: string
  children: React.ReactNode
}

const MyAccordion = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Accordion type='single' className='w-full'>
      <div className='py-2 border-2 border-black mx-auto rounded-lg p-2 w-full'>
        <button
          onClick={() => setOpen((prevValue) => !prevValue)}
          className='flex justify-between w-full'
        >
          <h3 className='text-2xl  text-mygray'>{title}</h3>
          <svg
            className='fill-indigo-500 shrink-0 ml-8'
            width='16'
            height='16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              y='7'
              width='16'
              height='2'
              rx='1'
              className={`transform origin-center transition duration-200 ease-out ${
                open && '!rotate-180'
              }`}
            />
            <rect
              y='7'
              width='16'
              height='2'
              rx='1'
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                open && '!rotate-180'
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-greyblue
          ${open ? 'grid-rows-[500px] ' : 'grid-rows-0 opacity-0'}`}
          // add opacity-0 to the class list
        >
          <div className='overflow-hidden'>{children}</div>
        </div>
      </div>
    </Accordion>
  )
}

export default MyAccordion
