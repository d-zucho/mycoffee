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
  handleQuestionChange?: (question: any) => void
  choice: string
}

const Question = ({
  question,
  options,
  index,
  choice,
  handleQuestionChange,
}: Props) => {
  const [questionIndex, setQuestionIndex] = React.useState<string>('0')
  const newIndex = `${index}`

  return (
    <div onClick={handleQuestionChange}>
      <span className='text-3xl text-mygray'>{question}</span>
      <div>
        <ToggleGroup
          type='single'
          className='flex flex-col md:flex-row gap-4 items-center'
        >
          {options.map((item, index) => (
            // <div className='flex' key={index}>
            <Option key={index} {...item} />
          ))}
        </ToggleGroup>
      </div>
    </div>
  )
}

export default Question
