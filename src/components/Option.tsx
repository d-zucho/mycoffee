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
  choice?: string
}

const Options = ({ label, description, choice }: Props) => {
  return (
    <ToggleGroupItem
      value={label}
      aria-label={`Toggle ${label}`}
      id={label}
      className='flex flex-col gap-5 h-[200px] bg-optionbg w-full md:max-w-[350px] py-5  rounded-[40px]'
    >
      <h3 className='text-2xl'>{label}</h3>
      <p className='text-base'>{description}</p>
    </ToggleGroupItem>
  )
}

export default Options
