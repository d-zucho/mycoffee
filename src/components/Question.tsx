import React from 'react'
import Option from './Option'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/CustomAccordian'
import { ToggleGroup } from '@radix-ui/react-toggle-group'

type Props = {
  question: string
  index: number
  options: Array<{ label: string; description: string }>
  handleQuestionChange: (question: any) => void
}

const Question = ({
  question,
  options,
  index,
  handleQuestionChange,
}: Props) => {
  const [questionIndex, setQuestionIndex] = React.useState<string>('0')
  const newIndex = `${index}`

  return (
    <Accordion
      type='multiple'
      onValueChange={(value) => handleQuestionChange(value)}
    >
      <AccordionItem value={newIndex} onClick={handleQuestionChange}>
        <AccordionTrigger className='text-3xl text-mygray'>
          {question}
        </AccordionTrigger>
        <AccordionContent>
          <ToggleGroup
            type='single'
            className='flex flex-col md:flex-row gap-4 items-center '
          >
            {options.map((item, index) => (
              <div className='flex' key={index}>
                <Option {...item} />
              </div>
            ))}
          </ToggleGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Question
