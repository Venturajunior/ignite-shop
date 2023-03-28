import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem non impedit tenetur, laboriosam nihil dicta recusandae
          fuga, in doloribus quam atque, minima provident? Ipsum assumenda,
          cupiditate rem illo distinctio nesciunt.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
