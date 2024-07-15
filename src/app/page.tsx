import Collection from '@/components/Collection'
import Hero from '@/components/Hero'
import { granEspressoImg } from '@/lib'
import { collection_products } from '@/lib/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection coffees={collection_products} />
    </main>
  )
}
