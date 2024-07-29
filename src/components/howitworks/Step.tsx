type Props = {
  step: string
  title: string
  description: string
  className?: string
}

const Step = ({ step, title, description, className }: Props) => {
  return (
    <article
      className={`max-w-sm text-center lg:text-left px-5 relative  ${className}`}
    >
      {/* add step circle (first two) */}

      <div className='border-2 border-cyan bg-white h-10 w-10 rounded-full absolute -left-5 lg:-top-[21px] lg:left-0' />

      <h2 className='text-header-1 font-fraunces font-black text-peach '>
        {step}
      </h2>
      <div className='max-w-[200px] mx-auto lg:mx-0'>
        <h4 className='text-greyblue font-black text-header-3 py-4'>{title}</h4>
      </div>
      <p className='text-greyblue'>{description}</p>
    </article>
  )
}

export default Step
