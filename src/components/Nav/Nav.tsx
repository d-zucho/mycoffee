import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import DesktopNav from './DesktopNav'

const Nav = () => {
  return (
    <header className='w-full'>
      <MaxWidthWrapper>
        <div className='py-7'>
          <div className='flex gap-2 items-center'>
            <Image
              src={'/assets/shared/desktop/logo.svg'}
              alt=''
              width={200}
              height={150}
            />
          </div>
        </div>
        <DesktopNav />
      </MaxWidthWrapper>
    </header>
  )
}

export default Nav
