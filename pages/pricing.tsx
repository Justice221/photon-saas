import { Box } from '@mui/material'
import React from 'react'
import TextAndImageContainer from '../components/shared/TextAndImageContainer'
import PricingContainer from '../components/pricing/PricingContainer'
import BetaAnnouncement from '../components/shared/BetaAnnouncement'

const pricing = () => {
    const data = {
  "src": "/assets/images/hero.jpg",
  "heading": "PRICING",
  "description": "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  "cta": ""
}

  return (
    <Box>
      <TextAndImageContainer data={data} />
      <PricingContainer />
      <BetaAnnouncement/>
    </Box>
  )
}

export default pricing
