import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" >
    <Toolbar>
    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
    Cheat Sheet Generator
    </Typography>
    </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar