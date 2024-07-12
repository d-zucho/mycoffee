import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

type MobileNavProps = {
  className?: string
}

const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <div className={cn(className, 'md:hidden')}>
      <Sheet>
        <SheetTrigger>
          <Menu width={32} height={32} />
        </SheetTrigger>
        <SheetContent>
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
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
