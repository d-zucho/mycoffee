type Props = {
  title: string
  description: string
  image: string
}

function WhyFact({ title, description, image }: Props) {
  return (
    <article>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default WhyFact
