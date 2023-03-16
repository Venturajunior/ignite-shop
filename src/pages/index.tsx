import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export default function Home() {
  return (
    <>
      <Button>
        <span>teste</span>
        Botão
      </Button>
      <h1>Hello world</h1>
    </>
  )
}
