import { TProduct } from '@/lib/types'
import CollectionItem from './CollectionItem'
import MaxWidthWrapper from './MaxWidthWrapper'

type Props = {
  coffees: TProduct[]
}

function Collection({ coffees }: Props) {
  return (
    <section className='py-16'>
      <MaxWidthWrapper className='relative'>
        <div className='text-center'>
          <h2 className='text-header-1 md:text-[120px] w-full inline-block bg-clip-text text-transparent font-black leading-none bg-gradient-to-b from-mygray/90 via-mygray/25 to-transparent absolute -top-[132px] xs:-top-[60px] md:-top-20 xl:-top-[68px]  left-[50%] right-[50%] translate-x-[-50%]'>
            our collection
          </h2>
        </div>
        <div className='grid grid-cols-1 justify-items-center gap-20  md:gap-16 mt-28 lg:grid-cols-2  xl:grid-cols-4 xl:gap-2'>
          {coffees.map((coffee) => (
            <CollectionItem
              name={coffee.name}
              description={coffee.description}
              image={coffee.image}
              className=''
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Collection
