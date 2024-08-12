import React from 'react'
import { ToggleGroup, ToggleGroupItem } from './ui/CustomAccordian'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/CustomAccordian'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {}

const CustomChoice = (props: Props) => {
  return (
    <div>
      <MaxWidthWrapper>
        <p>Testing</p>
        <Accordion type='multiple' className='w-full border-2 '>
          <AccordionItem value='bold'>
            <AccordionTrigger>Option 1</AccordionTrigger>
            <AccordionContent>
              <ToggleGroup type='single'>
                <ToggleGroupItem
                  value='bold'
                  aria-label='Toggle bold'
                  className='w-fit h-[300px] bg-optionbg'
                >
                  <h3 className='text-header-3'>Option 1</h3>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='italic'
                  aria-label='Toggle italic'
                  className='w-fit h-[300px] bg-optionbg'
                >
                  <h3>Option 2</h3>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='underline'
                  aria-label='Toggle underline'
                  className='w-fit h-[300px] bg-optionbg'
                >
                  <p>optioon 3</p>
                </ToggleGroupItem>
              </ToggleGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='bold2'>
            <AccordionTrigger>Option 1</AccordionTrigger>
            <AccordionContent>
              <ToggleGroup type='single'>
                <ToggleGroupItem
                  value='bold'
                  aria-label='Toggle bold'
                  className='w-fit h-[300px] bg-optionbg'
                >
                  <h3 className='text-header-3'>Option 1</h3>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='italic'
                  aria-label='Toggle italic'
                  className='w-fit h-[300px] bg-optionbg'
                >
                  <h3>Option 2</h3>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value='underline'
                  aria-label='Toggle underline'
                  className='w-fit h-[300px] bg-optionbg'
                >
                  <p>optioon 3</p>
                </ToggleGroupItem>
              </ToggleGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </MaxWidthWrapper>
    </div>
  )
}

export default CustomChoice
