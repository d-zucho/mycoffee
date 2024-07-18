import Collection from '@/components/Collection'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import { granEspressoImg } from '@/lib'
import { collection_products, why_facts } from '@/lib/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection coffees={collection_products} />
      <WhyUs facts={why_facts} />
    </main>
  )
}
