import React,{useState} from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState()
  return (
    <div>
<AppBar sx={{bgcolor:'#00bfff'}} position='sticky'>
     <Toolbar>
    <NavLink to='/' style={{color:'white'}}>
      <Typography>
        <LibraryBooksIcon/>
      </Typography></NavLink>
      <Tabs sx={{marginLeft: 'auto'}} textColor='white' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
        <Tab LinkComponent={NavLink} to='/add' label='Add Book'/>
        <Tab LinkComponent={NavLink} to='/books' label='Books'/>
        <Tab LinkComponent={NavLink} to='/about' label='About Us'/>
      
      </Tabs>
     </Toolbar>
</AppBar>
    </div>
  )
}

export default Header;