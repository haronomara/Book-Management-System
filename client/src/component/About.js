import { Box, Typography } from '@mui/material';
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
<Typography variant='h2' sx={{fontFamily:'fantasy'}}>This is a CRUD Application</Typography>
<Typography variant='h3'sx={{fontFamily:'fantasy'}}>By MERN STACK</Typography>
      </Box>
    </div>
  )
}

export default About;