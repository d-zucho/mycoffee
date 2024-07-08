import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

const DesktopNav = () => {
  return (
    <nav className='flex gap-8 text text-mygray'>
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={'/'}
          className={cn(buttonVariants({ variant: 'ghost' }), 'flex')}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default DesktopNav
