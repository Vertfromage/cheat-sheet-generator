import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'

const Narbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor:'plum'}}>
    <Toolbar>
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
    Cheat Sheet Generator
    </Typography>
    </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Narbar