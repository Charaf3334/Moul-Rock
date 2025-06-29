import React from 'react'
import { Button } from "@/components/ui/button"
import Container from "@/components/Container"

const Home = () => {
  return (
  <Container className='bg-shop-light-pink'>
    <h2 className='text-xl font-semibold'>Home</h2>
    <p>
      Lorem ipsum dolor sit amet, 
      consectetur adipisicing elit. Tenetur molestiae 
      fugiat nemo consectetur expedita quas maxime ullam quis minima, 
      deserunt voluptates eaque, minus voluptatem, alias dolores 
      similique natus soluta rem?
    </p>
    <Button size="lg">Click me</Button>
  </Container>
  )
}

export default Home