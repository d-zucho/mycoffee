import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const PlanHero = () => {
  const description =
    'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'

  return (
    <section id='plan-hero' className='relative'>
      <MaxWidthWrapper>
        <div
          className={`bg-planhero_mobile md:bg-planhero_tablet lg:bg-planhero_desktop h-[500px] bg-cover bg-center bg-no-repeat text-cream w-full rounded-lg`}
        >
          <div className='flex flex-col justify-center mx-auto md:mx-0 gap-10 h-[100%] p-10 max-w-prose md:text-left md:items-start text-center items-center'>
            <h1 className='text-5xl md:text-[40px] lg:text-header-1 text-center md:text-left font-black'>
              Create a plan
            </h1>
            <p className='max-w-sm text-center md:text-left'>{description}</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default PlanHero
