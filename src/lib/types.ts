import { StaticImageData } from 'next/image'

export type TNavLink = {
  href: string
  label: string
}

export type TProduct = {
  image: StaticImageData
  name: string
  description: string
}

export type TWhyFact = {
  title: string
  description: string
  image: string
}
