'use client'
import CustomChoice from '@/components/CustomChoice'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Option from '@/components/Option'
import Question from '@/components/Question'
import ToggleItem from '@/components/ToggleItem'
import { Accordion, ToggleGroup } from '@/components/ui/CustomAccordian'
import { CUSTOM_OPTIONS } from '@/lib/constants'
import React from 'react'

type Props = {}

const Customize = (props: Props) => {
  const [questionIndex, setQuestionIndex] = React.useState<string>('0')

  const handleQuestionChange = (question: any) => console.log(question.value)

  return (
    <div>
      <MaxWidthWrapper>
        {CUSTOM_OPTIONS.map((item, index) => (
          <Question
            key={index}
            index={index}
            handleQuestionChange={handleQuestionChange}
            {...item}
          />
        ))}
      </MaxWidthWrapper>
    </div>
  )
}

export default Customize
