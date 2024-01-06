import { Box } from '@mui/material'
import React from 'react'
import StoriesHero from '../components/stories/StoriesHero'
import StoriesGalleryContainer from '../components/stories/StoriesGalleryContainer'

const stories = () => {
  return (
    <Box>
      <StoriesHero/>
      <StoriesGalleryContainer/>
    </Box>
  )
}

export default stories
