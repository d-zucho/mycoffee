import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

type CollectionItemProps = {
  name: string
  description: string
  image: StaticImageData
  className?: string
}

function CollectionItem({
  name,
  description,
  image,
  className,
}: CollectionItemProps) {
  return (
    <div
      key={name}
      className={cn(
        'flex flex-col text-center md:text-left md:flex-row xl:flex-col xl:text-center md:items-center md:h-full',
        className
      )}
    >
      <div className='mx-auto w-full h-[150px] relative md:w-[200px] xl:h-[200px]   xl:-right-2 xl:p-2'>
        <Image
          src={image.src}
          alt={name}
          layout='fill'
          className='mx-auto object-contain w-full -right-8'
        />
      </div>
      <div className='space-y-1 xl:space-y-2'>
        <h3 className='text-header-3 font-black'>{name}</h3>
        <p className='max-w-xs xl:px-4'>{description}</p>
      </div>
    </div>
  )
}

export default CollectionItem
