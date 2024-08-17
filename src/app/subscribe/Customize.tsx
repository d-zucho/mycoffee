'use client'
import CustomChoice from '@/components/CustomChoice'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import MyAccordion from '@/components/MyAccordion'

import Question from '@/components/Question'
import ToggleItem from '@/components/ToggleItem'
import {
  Accordion,
  AccordionContent,
  ToggleGroup,
} from '@/components/ui/CustomAccordian'
import { CUSTOM_OPTIONS } from '@/lib/constants'
import React from 'react'

type Props = {}

const Customize = (props: Props) => {
  const [questionIndex, setQuestionIndex] = React.useState<string>('0')
  const [customChoice, setCustomChoice] = React.useState<string>('')

  // get value of selected option in toggle group
  const handleQuestionChange = (value: any) => {
    setQuestionIndex((prevValue) => value)
    console.log(questionIndex)
  }

  return (
    <div>
      <MaxWidthWrapper>
        <h1 className='text-4xl font-bold text-center mt-8 mb-4'>
          Create your plan
        </h1>
        <p className='text-center text-gray-500'>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
        {CUSTOM_OPTIONS.map((item, index) => (
          <MyAccordion key={index} title={item.question}>
            <Question
              question={item.question}
              options={item.options}
              index={index}
              handleQuestionChange={handleQuestionChange}
              // setCustomChoice={setCustomChoice}
              choice={item.value}
            />
          </MyAccordion>
        ))}
      </MaxWidthWrapper>
    </div>
  )
}

export default Customize
