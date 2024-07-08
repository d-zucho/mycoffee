import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger } from '../ui/sheet'

// MobileNavProps should be a type in typescript

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu width={32} height={32} />
        </SheetTrigger>
      </Sheet>
      <nav className='flex flex-col gap-8 text text-mygray'>
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
    </div>
  )
}

export default MobileNav
