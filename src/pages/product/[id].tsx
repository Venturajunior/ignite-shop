import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  return <h1>This is the product page: {JSON.stringify(query)}</h1>
}
