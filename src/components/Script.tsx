import Script from 'next/script'

export default function MyComponent() {
  return (
    <Script
      src='../../node_modules/tw-elements/dist/js/tw-elements.umd.min.j'
      strategy='afterInteractive'
    />
  )
}

//  The  strategy  prop is optional and can be one of the following values:

//  beforeInteractive : The script will be fetched and executed before the page starts rendering.
//  afterInteractive : The script will be fetched and executed after the page has started rendering.
//  lazyOnload : The script will be fetched and executed when the script is requested.

//  You can also use the  Script  component to load scripts that are not related to analytics.
//  For example, you can load the  Google Maps JavaScript API:
