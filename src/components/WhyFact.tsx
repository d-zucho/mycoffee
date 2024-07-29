type Props = {
  title: string
  description: string
  image: string
}

function WhyFact({ title, description, image }: Props) {
  return (
    <article className='bg-cyan md:flex items-center  lg:items-start lg:block p-12 rounded-md min-h-[180px]'>
      <div className='pb-12 md:pb-0 lg:pb-12 md:pr-6 lg:pr-0 h-[72px]'>
        <img
          src={image}
          alt=''
          height={72}
          // width={60}
          className='f flex-shrink-0 flex-grow-0 mx-auto mt-auto'
        />
      </div>
      <div className='text-center md:text-left lg:text-center md:flex-1 mt-5'>
        <h3 className='text-header-4 font-black'>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default WhyFact
