import { dancheImg, granEspressoImg, piccolloImg, planaltoImg } from '.'
import { TNavLink, TProduct, TWhyFact } from './types'

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
]

export const why_facts: TWhyFact[] = [
  {
    title: 'Best quality',
    description:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    image: '/assets/home/desktop/icon-coffee-bean.svg',
  },
  {
    title: 'Exclusive benefits',
    description:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
    image: '/assets/home/desktop/icon-gift.svg',
  },
  {
    title: 'Free shipping',
    description:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    image: '/assets/home/desktop/icon-truck.svg',
  },
]
