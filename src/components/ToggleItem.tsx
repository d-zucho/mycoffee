import React from 'react'
import { ToggleGroupItem } from './ui/CustomAccordian'

type Props = {}

const ToggleItem = (props: Props) => {
  return (
    <ToggleGroupItem
      value='bold'
      aria-label='Toggle bold'
      className='w-fit h-[300px] bg-optionbg'
    >
      <h3 className='text-header-3'>Option 1</h3>
    </ToggleGroupItem>
  )
}

export default ToggleItem
