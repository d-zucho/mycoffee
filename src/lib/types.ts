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

export type TStep = {
  step: string
  title: string
  description: string
}

export type TSocialLink = {
  icon: string
  href: string
  label: string
}

export type THeadquarter = {
  icon: string
  country: string
  city: string
  address: string
  phone: string
}
