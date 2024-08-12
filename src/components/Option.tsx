import React, { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ToggleGroup,
  ToggleGroupItem,
} from './ui/CustomAccordian'

type Props = {
  label: string
  description: string
}

const Options = ({ label, description }: Props) => {
  return (
    <ToggleGroupItem
      value={label}
      aria-label={`Toggle ${label}`}
      className='flex flex-col gap-5 h-[200px] bg-optionbg w-full md:max-w-[400px] py-5 px-20 rounded-[40px]'
    >
      <h3 className='text-2xl'>{label}</h3>
      <p className='text-base'>{description}</p>
    </ToggleGroupItem>
  )
}

export default Options
