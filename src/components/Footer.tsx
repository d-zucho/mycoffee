import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from './Logo'
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'
import Link from 'next/link'

type FooterProps = {}

const Footer = (props: FooterProps) => {
  return (
    <footer className='bg-greyblue py-10'>
      <MaxWidthWrapper className='flex justify-between'>
        <div>
          <Logo fill='#fff' />
        </div>

        <div className='text-mygray space-x-5'>
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className='hover:text-white transform duration-300'
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex gap-5'>
          {SOCIAL_LINKS.map((socialLink, index) => (
            <Link key={index} href={socialLink.href}>
              <Image
                width={25}
                src={socialLink.icon}
                alt={socialLink.label}
                height={25}
              />
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
