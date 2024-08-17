import React from 'react'
import { AccordionItem } from './ui/accordion'

type Props = {
  question: string
  options: Array<{ label: string; description: string }>
  index: number
}

const AccItem = ({ question, options, index }: Props) => {
  return <AccordionItem value={question}></AccordionItem>
}

export default AccItem
