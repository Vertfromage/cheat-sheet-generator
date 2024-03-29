import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}} id="no-print">
    <AppBar position="static" >
    <Toolbar>
    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
    <Link className="logo" to="/">Formula Factory</Link>
    </Typography>
    <ul className='links'>
      <li>
      <Link to="/home"><h2>Editor</h2></Link>
      </li>
      <li>
      <Link to="/pages"><h2>Pages</h2></Link>
      </li>
      <li>
      <Link to="/faq"><h2>FAQ</h2></Link>
      </li>
    </ul>
    </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar