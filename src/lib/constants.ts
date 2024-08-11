import {
  dancheImg,
  facebookIcon,
  granEspressoImg,
  instagramIcon,
  piccolloImg,
  planaltoImg,
  twitterIcon,
} from '.'
import {
  THeadquarter,
  TNavLink,
  TProduct,
  TSocialLink,
  TStep,
  TWhyFact,
} from './types'
import facebook from '/public/assets/shared/desktop/icon-facebook.svg'
import instagram from '/public/assets/shared/desktop/icon-instagram.svg'
import twitter from '/public/assets/shared/desktop/icon-twitter.svg'

export const NAV_LINKS: TNavLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/aboutus',
    label: 'About Us',
  },
  {
    href: '/subscribe',
    label: 'Create Your Plan',
  },
]

export const SOCIAL_LINKS: TSocialLink[] = [
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    icon: '/assets/shared/desktop/icon-facebook.svg',
  },
  {
    href: 'https://www.twitter.com',
    label: 'Twitter',
    icon: '/assets/shared/desktop/icon-twitter.svg',
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    icon: '/assets/shared/desktop/icon-instagram.svg',
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

export const steps: TStep[] = [
  {
    step: '01',
    title: 'Pick your coffee',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    step: '02',
    title: 'Choose the frequency',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    step: '03',
    title: 'Receive and enjoy!',
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
]

export const headquarters: THeadquarter[] = [
  {
    icon: '/assets/about/desktop/illustration-australia.svg',
    country: 'Australia',
    city: 'Melbourne',
    address: '36 Swanston Street',
    phone: '+61 4 9928 3629',
  },
  {
    icon: '/assets/about/desktop/illustration-canada.svg',
    country: 'Canada',
    city: 'Toronto',
    address: '1528 Eglinton Avenue',
    phone: '+1 416 485 2997',
  },
  {
    icon: '/assets/about/desktop/illustration-uk.svg',
    country: 'United Kingdom',
    city: 'London',
    address: '96 Old Street',
    phone: '+44 20 3970 1287',
  },
]
