import { dancheImg, granEspressoImg, piccolloImg, planaltoImg } from '.'
import { TNavLink, TProduct } from './types'

export const NAV_LINKS: TNavLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About Us',
  },
  {
    href: '/create',
    label: 'Create Your Plan',
  },
]

export const collection_products: TProduct[] = [
  {
    image: granEspressoImg,
    name: 'Gran Espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience.',
  },
  {
    image: planaltoImg,
    name: 'Planalto',
    description:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.',
  },
  {
    image: piccolloImg,
    name: 'Piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry.',
  },
  {
    image: dancheImg,
    name: 'Danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes.',
  },
  {
    image: granEspressoImg,
    name: 'Gran Espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience.',
  },
]
