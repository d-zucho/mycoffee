import { NAV_LINKS } from '@/lib/constants'

const DesktopNav = () => {
  return (
    <nav className='flex gap-8 text text-mygray'>
      {NAV_LINKS.map((link, index) => (
        <span key={index} className='flex'>
          {link.label}
        </span>
      ))}
    </nav>
  )
}

export default DesktopNav
