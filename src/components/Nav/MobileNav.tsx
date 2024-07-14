import { NAV_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import Image from 'next/image'

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
          <SheetTitle asChild>
            <SheetHeader>
              {/* <Image
                src={'/assets/shared/desktop/logo.svg'}
                alt='logo'
                height={70}
                width={200}
                className='mx-auto'
              /> */}
              <h1 className='text-3xl font-black text-center'>
                coffeeroasters
              </h1>
            </SheetHeader>
          </SheetTitle>
          <SheetDescription className='text-center pb-2 pt-1'>
            You deserve it.
          </SheetDescription>
          <SheetDescription aria-hidden='true' />
          <div className='border-b border-b-1' />

          <nav className='flex flex-col gap-8 text text-mygray pt-8'>
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                href={'/'}
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'flex text-2xl font-medium hover:bg-cyan hover:text-cream duration-200'
                )}
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
