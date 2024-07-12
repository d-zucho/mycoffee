import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Nav = () => {
  return (
    <header className='w-full overflow-hidden'>
      <MaxWidthWrapper>
        <div className='py-7 flex justify-between items-center'>
          <Image
            src={'/assets/shared/desktop/logo.svg'}
            alt='logo'
            width={200}
            height={150}
            className='shrink-0'
          />

          <DesktopNav className='hidden md:block' />
          <MobileNav className='block md:hidden' />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Nav
