import { NAV_LINKS } from '@/lib/constants'

const MobileNav = () => {
  return (
    <nav>
      {NAV_LINKS.map((link, index) => (
        <span key={index} className='text-mygray'>
          {link.label}
        </span>
      ))}
    </nav>
  )
}

export default MobileNav
