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

export const CUSTOM_OPTIONS = [
  {
    question: 'How do you drink your coffee?',
    options: [
      {
        label: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers',
      },
      {
        label: 'Filter',
        description:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        label: 'Espresso',
        description:
          'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    question: 'What type of coffee?',
    options: [
      {
        label: 'Single Origin',
        description:
          'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        label: 'Decaf',
        description:
          'Just like regular coffee, except the caffeine has been removed',
      },
      {
        label: 'Blended',
        description:
          'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    question: 'How much would you like?',
    options: [
      {
        label: '250g',
        description:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        label: '500g',
        description:
          'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        label: '1000g',
        description:
          'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    question: 'Want us to grind them?',
    options: [
      {
        label: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience',
      },
      {
        label: 'Filter',
        description:
          'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        label: 'Cafetiére',
        description:
          'Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    question: 'How often should we deliver?',
    options: [
      {
        label: 'Every week',
        description: '$14.00 per shipment. Includes free first-class shipping.',
      },
      {
        label: 'Every 2 weeks',
        description: '$17.25 per shipment. Includes free priority shipping.',
      },
      {
        label: 'Every month',
        description: '$22.50 per shipment. Includes free priority shipping.',
      },
    ],
  },
]
