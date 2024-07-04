import React from 'react'
import styled from "styled-components"
import Section from "./section.js"

function Home() {
  return (
    <Container>
      <Section 
      title="Model S"
      description="Order Online for Touchless Delivery"
      BackgroundImg="model-s.jpg"
      leftbtntext="Custom order"
      rightbtntext="Existing inventory"

      />
      <Section
      title="Model Y"
      description="Order Online for Touchless Delivery"
      BackgroundImg="model-y.jpg"
      leftbtntext="Custom order"
      rightbtntext="Existing inventory"
      
      />
      <Section 
      title="Model 3"
      description="Order Online for Touchless Delivery"
      BackgroundImg="model-3.jpg"
      leftbtntext="Custom order"
      rightbtntext="Existing inventory"
      />

      <Section 
      title="Model X"
      description="Order Online for Touchless Delivery"
      BackgroundImg="model-x.jpg"
      leftbtntext="Custom order"
      rightbtntext="Existing inventory"
      />
      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      BackgroundImg="solar-panel.jpg"
      leftbtntext="Order Now"
      rightbtntext="Learn More"
      />
      
      <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less than a New Roof Plus Solar Panel"
      BackgroundImg="solar-roof.jpg"
      leftbtntext="Order Now"
      rightbtntext="Learn More"
      />

      <Section
      title="Accessories"
      description=""
      BackgroundImg="accessories.jpg"
      leftbtntext="Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`
  